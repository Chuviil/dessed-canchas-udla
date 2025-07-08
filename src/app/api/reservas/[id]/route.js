import dbConnect from '@/lib/mongoose/dbConnect';
import Reservation from '@/lib/mongoose/Reservation';
import { NextResponse } from 'next/server';

// GET /api/reservas/:id - Get reservation by ID
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const reservation = await Reservation.findById(id);
    if (!reservation) {
      return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
    }
    return NextResponse.json(reservation);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
