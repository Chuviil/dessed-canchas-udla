import dbConnect from '@/lib/mongoose/dbConnect';
import Reservation from '@/lib/mongoose/Reservation';
import { NextResponse } from 'next/server';

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
    return NextResponse.json(reservations);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
