export const productos = [
    {
        id: 1,
        "categoria": "Fit",
        "nombre": "CHOCOLATE",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "stock": 5,
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
    {
        id: 2,
        "categoria": "Fit",
        "nombre": "FRUTILLA",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "stock": 5,
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
    {
        id: 3,
        "categoria": "Fit",
        "nombre": "DULCE DE LECHE",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "stock": 5,
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
    {
        id: 4,
        "categoria": "Fit",
        "nombre": "VAINILLA",
        "imagen": "https://i.ibb.co/jDLfV8G/cremademani.jpg",
        "stock": 5,
        "descripcion": "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
        "precio": "$3500",
    },
    {
        id: 5,
        "categoria": "Postre",
        "nombre": "ALMENDRADO",
        "imagen": "https://i.ibb.co/sgwsrPp/almedrado.jpg",
        "stock": 6,
        "descripcion": "Pasta hecha con almendras, harina y miel o azúcar.",
        "precio": "$12.000",
    },
    {
        id: 6,
        "categoria": "Postre",
        "nombre": "TRICOLOR",
        "imagen": "https://i.ibb.co/rb9Vp5M/se-trata-de-la-crema-helada-sabor-frutilla-vainilla-y-de-chocolate-marca-great-value-928338.jpg",
        "stock": 6,
        "descripcion": "El helado napolitano, es aquel que está compuesto por tres capas diferentes de helado, chocolate, vainilla y fresa; juntas y sin separación entre ellas.",
        "precio": "$12.000",
    },
    {
        id: 7,
        "categoria": "Postre",
        "nombre": "TORTA HELADA",
        "imagen": "https://i.ibb.co/tXY9h3P/torta-helada-2.jpg" ,
        "stock": 7,
        "descripcion": "Torta helada con chocolate frutilla y vainilla recubierta  con una capa de Chocolate Aguila",
        "precio": "$15.000",
    },
    
    
     
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

export const GetProductsByCategory = (category) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.categoria === category 
        );
        setTimeout(() => {
            resolve(productosFiltrados);
        }, 2000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const productosFiltrado = productos.find((prod) => prod.id === parseInt(id));
        resolve(productosFiltrado);
    });
};
