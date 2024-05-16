
export const productos = [
  {
    id: 1,
    categoria: "Fit",
    nombre: "CHOCOLATE",
    imagen: "https://i.ibb.co/CVG5b0v/chocolate.png",
    stock: 5,
    descripcion:
      "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
    precio: 3500,
  },
 
  {
    id: 2,
    categoria: "Fit",
    nombre: "FRUTILLA",
    imagen: "https://i.ibb.co/pKjxHs0/frutilla.png",
    stock: 5,
    descripcion:
      "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
    precio: 3500,
  },
  
  {
    id: 3,
    categoria: "Fit",
    nombre: "LIMON",
    imagen: "https://i.ibb.co/r28Sp14/limon.png",
    stock: 5,
    descripcion:
      "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
    precio: 3500,
  },
  // imagen: "https://i.ibb.co/jDLfV8G/cremademani.jpg",
  {
    id: 4,
    categoria: "Fit",
    nombre: "DULCE DE LECHE",
    imagen: "https://i.ibb.co/XSdx4KJ/dl.png",
    stock: 5,
    descripcion:
      "100% artesanal, sin azúcar agregada. Bajo en calorías, 98 kcal por pote. Peso: 300gr.",
    precio: 3500,
  },
  {
    id: 5,
    categoria: "Postre",
    nombre: "ALMENDRADO",
    imagen: "https://i.ibb.co/sgwsrPp/almedrado.jpg",
    stock: 6,
    descripcion: "Pasta hecha con almendras, harina y miel o azúcar.",
    precio: 12000,
  },
  {
    id: 6,
    categoria: "Postre",
    nombre: "TRICOLOR",
    imagen:
      "https://i.ibb.co/rb9Vp5M/se-trata-de-la-crema-helada-sabor-frutilla-vainilla-y-de-chocolate-marca-great-value-928338.jpg",
    stock: 6,
    descripcion:
      "El helado napolitano, es aquel que está compuesto por tres capas diferentes de helado, chocolate, vainilla y fresa; juntas y sin separación entre ellas.",
    precio: 12000,
  },
  {
    id: 7,
    categoria: "Postre",
    nombre: "TORTA HELADA",
    imagen: "https://i.ibb.co/tXY9h3P/torta-helada-2.jpg",
    stock: 7,
    descripcion:
      "Torta helada con chocolate frutilla y vainilla recubierta  con una capa de Chocolate Aguila",
    precio: 15000,
  },
];

export const sucursales = [
  {
    id:1,
    barrio: "Belgrano",
    direccion: "Av Cabildo 2044",
    horario: "Lunes a Sabados de 9 a 20hs",
    imagen: "https://i.ibb.co/5sxjrvb/belgrano.png" 
    
  },
  {
    id: 2,
    barrio: "Villa Crespo",
    direccion: "Av Corrientes 5350",
    horario: "Lunes a Sabados de 9 a 21hs",
    imagen:"https://i.ibb.co/1J7pSDV/vcresp.png"
  },
  {
    id: 3,
    barrio: "Flores",
    direccion: "Av Rivadavia 7806",
    horario: "Lunes a Sabados de 8 a 20hs",
    imagen: "https://i.ibb.co/3ch49kp/flores.png"
  },
  {
    id: 4,
    barrio: "Villa del Parque",
    direccion: "Av Cuenca 2538",
    horario: "Lunes a Viernes de 10 a 18hs",
    imagen:"https://i.ibb.co/kXZss3s/vparque.png" 
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
    const productosFiltrado = productos.find(
      (prod) => prod.id === parseInt(id)
    );
    resolve(productosFiltrado);
  });
};
