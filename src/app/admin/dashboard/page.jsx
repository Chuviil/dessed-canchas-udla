import { getAllReservations } from '@/lib/mongoose/getAllReservations';
import ReservationsTable from './ReservationsTable';

export default async function DashboardPage() {
    let reservations = [];
    let error = "";
    try {
        reservations = await getAllReservations();
    } catch (e) {
        error = "Error al cargar reservas";
    }

    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 sm:px-0 w-full">
            <h1 className="text-2xl font-bold mb-6">Reservas</h1>
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <ReservationsTable initialReservations={reservations} />
            )}
        </div>
    );
}