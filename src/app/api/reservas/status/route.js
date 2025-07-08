import dbConnect from '@/lib/mongoose/dbConnect';
import Reservation from '@/lib/mongoose/Reservation';
import { NextResponse } from 'next/server';

// PATCH /api/reservas/status
export async function PATCH(req) {
  try {
    await dbConnect();
    const { id, state } = await req.json();
    if (!id || !['PENDING', 'ACCEPTED', 'REJECTED'].includes(state)) {
      return NextResponse.json({ error: 'Invalid id or state' }, { status: 400 });
    }
    const updated = await Reservation.findByIdAndUpdate(id, { state }, { new: true });
    if (!updated) {
      return NextResponse.json({ error: 'Reservation not found' }, { status: 404 });
    }
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
