# The Wizard's Table 🧙‍♂️

![Logo](src/assets/logo/logo.png)

Bienvenido a "The Wizard's Table", una tienda e-commerce temática donde los magos y brujas pueden encontrar todos los artículos mágicos que necesitan. Este proyecto fue desarrollado como parte del curso de React en Coderhouse.

## 🌟 Características

- **Catálogo de Productos**: Explora una amplia gama de productos mágicos.
- **Detalle del Producto**: Haz clic en cualquier artículo para ver su descripción detallada, precio y stock disponible.
- **Carrito de Compras**: Añade productos a tu carrito, modifica las cantidades o elimina artículos.
- **Integración con Firebase**: Los datos de los productos se obtienen directamente desde Firebase.
- **Navegación Fluida**: Gracias a React Router, la navegación entre las diferentes secciones es rápida y sin recargas de página.
- **Diseño Responsivo**: La tienda es accesible y funcional en diferentes tamaños de pantalla.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando una variedad de tecnologías modernas del ecosistema de JavaScript:

- **[React](https://react.dev/)**: Biblioteca principal para la construcción de la interfaz de usuario.
- **[Vite](https://vitejs.dev/)**: Herramienta de desarrollo para un inicio y recarga en caliente (HMR) ultrarrápidos.
- **[React Router DOM](https://reactrouter.com/)**: Para la gestión de rutas en la aplicación.
- **[Firebase](https://firebase.google.com/)**: Utilizado como backend para la base de datos de productos.
- **[Ant Design](https://ant.design/)**: Biblioteca de componentes de UI para elementos como íconos y loaders.
- **[Bootstrap](https://getbootstrap.com/)**: Para el sistema de rejilla y estilos base.
- **[SweetAlert2](https://sweetalert2.github.io/)**: Para mostrar alertas y notificaciones personalizadas.
- **[ESLint](https://eslint.org/)**: Para el análisis de código estático y mantenimiento de la calidad del código.

## 🚀 Cómo Empezar

Para ejecutar este proyecto en tu entorno local, sigue estos sencillos pasos.

### Pre-requisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (se recomienda la versión LTS) y un gestor de paquetes como `npm` o `yarn`.

### Instalación

1. Clona el repositorio en tu máquina local:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd TheWizardsTable
   ```
3. Instala todas las dependencias del proyecto:
   ```sh
   npm install
   ```

### Ejecución

Una vez instaladas las dependencias, puedes iniciar el servidor de desarrollo:

```sh
npm run dev
```

Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique la consola) en tu navegador para ver la tienda en acción.

## 📜 Scripts Disponibles

En el archivo `package.json`, encontrarás los siguientes scripts:

- `npm run dev`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Compila la aplicación para producción en la carpeta `dist`.
- `npm run lint`: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
- `npm run preview`: Sirve la build de producción localmente para previsualizarla.