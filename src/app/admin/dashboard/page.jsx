"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/reservas")
            .then(res => res.json())
            .then(data => {
                setReservations(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Error al cargar reservas");
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 sm:px-0 w-full">
            <h1 className="text-2xl font-bold mb-6">Reservas</h1>
            {loading ? (
                <div>Cargando...</div>
            ) : error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <div className="overflow-x-auto w-full max-w-4xl">
                    <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">Email</th>
                                <th className="py-2 px-4 border-b">Fecha</th>
                                <th className="py-2 px-4 border-b">Cancha</th>
                                <th className="py-2 px-4 border-b">Estado</th>
                                <th className="py-2 px-4 border-b">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map(r => (
                                <tr key={r._id} className="text-center">
                                    <td className="py-2 px-4 border-b">{r.email}</td>
                                    <td className="py-2 px-4 border-b">{new Date(r.date).toLocaleDateString()}</td>
                                    <td className="py-2 px-4 border-b">{r.cancha_id}</td>
                                    <td className="py-2 px-4 border-b">{r.state}</td>
                                    <td className="py-2 px-4 border-b">
                                        <select
                                            value={r.state}
                                            onChange={async (e) => {
                                                const newState = e.target.value;
                                                const res = await fetch("/api/reservas/status", {
                                                    method: "PATCH",
                                                    headers: { "Content-Type": "application/json" },
                                                    body: JSON.stringify({ id: r._id, state: newState })
                                                });
                                                if (res.ok) {
                                                    const updated = await res.json();
                                                    setReservations(prev => prev.map(x => x._id === r._id ? updated : x));
                                                }
                                            }}
                                            className="border rounded px-2 py-1"
                                        >
                                            <option value="PENDING">PENDING</option>
                                            <option value="ACCEPTED">ACCEPTED</option>
                                            <option value="REJECTED">REJECTED</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}