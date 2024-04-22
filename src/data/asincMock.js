export const productos = [
    {
        id: 1,
        "categoria": "Fit",
        "nombre": "CHOCOLATE",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
    {
        id: 2,
        "categoria": "Fit",
        "nombre": "FRUTILLA",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
    {
        id: 3,
        "categoria": "Fit",
        "nombre": "DULCE DE LECHE",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
    {
        id: 4,
        "categoria": "Fit",
        "nombre": "VAINILLA",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

