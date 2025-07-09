import dbConnect from '@/lib/mongoose/dbConnect';
import Reservation from '@/lib/mongoose/Reservation';

export async function getAllReservations() {
  await dbConnect();
  const reservations = await Reservation.find();
  return reservations;
}
