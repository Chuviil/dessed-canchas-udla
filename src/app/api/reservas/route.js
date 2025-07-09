import dbConnect from '@/lib/mongoose/dbConnect';
import Reservation from '@/lib/mongoose/Reservation';
import { NextResponse } from 'next/server';
import { DefaultAzureCredential } from '@azure/identity';
import { KeyClient, CryptographyClient } from '@azure/keyvault-keys';
import crypto from 'crypto';

// POST /api/reservas - Create a reservation
export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const { email, date, cancha_id } = data;
    if (!email || !date || !cancha_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    // Do not allow client to set state, always default to 'PENDING'
    const reservation = await Reservation.create({ email, date, cancha_id });
    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET /api/reservas - Get all reservations
export async function GET() {
  try {
    await dbConnect();
    const reservations = await Reservation.find();

    const keyVaultUrl = process.env.AZURE_KEY_VAULT_URL;
    const keyName = process.env.AZURE_KEY_NAME;
    const credential = new DefaultAzureCredential();
    const keyClient = new KeyClient(keyVaultUrl, credential);
    const key = await keyClient.getKey(keyName);
    const cryptoClient = new CryptographyClient(key.id, credential);

    // 1. Generate a random AES key and IV
    const aesKey = crypto.randomBytes(32); // AES-256
    const iv = crypto.randomBytes(16); // 16 bytes for AES-CBC

    // 2. Encrypt the reservations JSON string with AES
    const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
    let encryptedData = cipher.update(JSON.stringify(reservations), 'utf8', 'base64');
    encryptedData += cipher.final('base64');

    // 3. Encrypt the AES key with Azure Key Vault (RSA)
    const encryptResult = await cryptoClient.encrypt({ algorithm: 'RSA-OAEP', plaintext: aesKey });
    const encryptedAesKey = encryptResult.result.toString('base64');

    // 4. Return encrypted data, encrypted AES key, and IV
    return NextResponse.json({
      encryptedData,
      encryptedAesKey,
      iv: iv.toString('base64')
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
