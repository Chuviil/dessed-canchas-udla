export const campus = [
    {
        id: "UP",
        nombre: "UdlaPark",
        imagenURL: "/UP_display.png"
    },
    {
        id: "GR",
        nombre: "Granados",
        imagenURL: "/GR_display.png"
    },
    {
        id: "ARE",
        nombre: "Udla Arena",
        imagenURL: "/ARE_display.png"
    }
];

export const canchas = [
    {
        id: "UP-CHF",
        campusId: "UP",
        tipo: "Fútbol",
        deportes: ["FUTBOL"],
        imagenURL: "/UP_cancha_futbol.jpg"
    },
    {
        id: "ARE-CHM",
        campusId: "ARE",
        tipo: "Múltiple",
        deportes: ["FUTBOL", "BASQUET", "VOLLEY"],
        imagenURL: "/ARE_cancha.jpg"
    },
    {
        id: "GR-CHB",
        campusId: "GR",
        tipo: "Básket/Vóley",
        deportes: ["BASQUET", "VOLLEY"],
        imagenURL: "/GR_cancha_basquet.jpeg"
    },
    {
        id: "GR-CHF",
        campusId: "GR",
        tipo: "Fútbol",
        deportes: ["FUTBOL"],
        imagenURL: "/GR_cancha_futbol.jpeg"
    }
];

export const tiposCancha = [
    {
        id: "Futbol",
        nombre: "Fútbol"
    },
    {
        id: "Basket",
        nombre: "Básket"
    },
    {
        id: "Voley",
        nombre: "Vóley"
    },
    {
        id: "Multiple",
        nombre: "Múltiple"
    }
];
