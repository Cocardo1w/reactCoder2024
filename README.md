
 # Ecommerce de Helados Proteicos

¡Bienvenido al ecommerce de helados proteicos! Este proyecto es una tienda en línea donde puedes comprar helados proteicos y postres saludables. 

## Tecnologías Utilizadas

- **Firebase**: Utilizado para la autenticación, base de datos en tiempo real y hosting.
- **React**: Biblioteca de JavaScript utilizada para construir la interfaz de usuario.
- **CSS Puro**: Utilizado para el diseño y la estética de la web, asegurando que sea responsive y funcione bien en dispositivos móviles, tabletas y computadoras.

## Funcionalidades

- **Categorías de Productos**:
  - **Helado Proteico**: Una variedad de helados saludables y ricos en proteínas.
  - **Postres**: Deliciosos postres saludables.
  
- **Carrito de Compra**: Añade productos al carrito y procede a la compra de manera fácil y rápida.

- **Responsive Design**: El sitio web está diseñado para funcionar perfectamente en cualquier dispositivo, ya sea un móvil, tableta o computadora.

## Cómo Ejecutar el Proyecto

### Prerrequisitos

- Node.js y npm instalados en tu sistema.
- Crear un proyecto en Firebase y configurar la autenticación y la base de datos.

### Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura Firebase:
    - Crea un archivo `.env` en la raíz del proyecto y añade tu configuración de Firebase:
        ```env
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```

### Ejecutar el Proyecto

Para ejecutar la aplicación en modo desarrollo:
```bash
npm start
