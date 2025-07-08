"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function ReservationForm() {
  const { data: session } = useSession();
  const params = useParams();
  const cancha_id = params.id;
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: session?.user?.email,
          date,
          cancha_id,
        }),
      });
      if (res.ok) {
        setMessage("Reserva creada exitosamente");
        setDate("");
      } else {
        const data = await res.json();
        setMessage(data.error || "Error al crear reserva");
      }
    } catch (err) {
      setMessage("Error de red");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm mt-8">
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
        required
        className="border rounded px-3 py-2"
      />
      <button
        type="submit"
        disabled={loading || !session?.user?.email}
        className="bg-blue-600 text-white rounded px-4 py-2 disabled:opacity-50"
      >
        {loading ? "Reservando..." : "Reservar"}
      </button>
      {message && <div className="text-center text-sm mt-2">{message}</div>}
    </form>
  );
}
