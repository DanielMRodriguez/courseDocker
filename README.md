# Docker Capacitación - Proyecto Básico

Este es un proyecto **HTML, CSS y JavaScript** básico que provee información esencial sobre Docker.  
La interfaz es amigable y puedes visualizar conceptos principales, comandos útiles y arquitectura de Docker de manera sencilla.

## ¿Cómo usar este proyecto?

Simplemente **coloca la carpeta del proyecto en cualquier servidor que sirva archivos estáticos** (puede ser un servidor nginx, Apache, Python SimpleHTTPServer, etc).  
Luego navega a `index.html` desde tu navegador.

No requiere backend ni instalación de dependencias.

## Estructura del proyecto

- `index.html` — Página principal con la información de Docker.
- `assets/css/style.css` — Estilos personalizados.
- `assets/js/script.js` — Funcionalidad básica interactiva.
- `assets/static/` — Imágenes o recursos estáticos usados en el proyecto.

## Características

- Interfaz responsive y visualmente agradable (usa Bootstrap y Google Fonts).
- Información clara y esencial sobre contenedores, imágenes y comandos básicos de Docker.
- Ejemplos, imágenes y leyendas para mejor comprensión.

## Requisitos

Solo necesitas un **servidor de archivos estáticos**.  
Por ejemplo, puedes usar:

- Python 3:  
  ```bash
  python3 -m http.server
  ```

- Node.js (con http-server):  
  ```bash
  npx http-server .
  ```

- nginx, Apache, o cualquier otro servidor de archivos estáticos.

O simplemente abre `index.html` directamente en tu navegador (algunas funciones pueden requerir que sea servido desde http://).

---

¡Ideal para introducir Docker y su funcionamiento de manera visual!

