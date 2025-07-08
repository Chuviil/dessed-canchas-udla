"use client";

import { useParams } from "next/navigation";
import ReservationForm from "./ReservationForm";
import { campus } from "@/constants";

export default function DashboardPage() {
    const params = useParams();
    const id = params.id;
    const campusData = campus.find(c => c.id === id);
    const nombre = campusData ? campusData.nombre : id;
    const imageUrl = campusData ? campusData.imagenURL : `/${id}_display.png`;
    return (
        <div className="flex min-h-screen flex-col justify-center items-center px-4 sm:px-0">
            <h1 className="text-2xl font-bold mb-4">{nombre}</h1>
            <img src={imageUrl} alt={`Cancha ${id}`} className="w-full max-w-md rounded-lg shadow-lg mb-6" />
            <ReservationForm />
        </div>
    );
}