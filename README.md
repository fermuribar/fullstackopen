```markdown
# 🧠 Full Stack Open – Parte 1: React con Vite en Docker

Este entorno Docker está diseñado para desarrollar los ejercicios de la [**Parte 1 del curso Full Stack Open**](https://fullstackopen.com/es/), utilizando **React** con **Vite** sin necesidad de instalar Node.js en tu sistema.

El objetivo es que puedas crear y ejecutar tus proyectos de React directamente dentro de Docker, manteniendo el código editable desde tu host.

---

## 📁 Estructura del proyecto

```

.
├── Dockerfile
├── docker-compose.yml
└── app-react/        ← Se genera automáticamente al crear el proyecto

````

---

## 🚀 1. Crear un nuevo proyecto React (solo la primera vez)

Para crear el proyecto dentro del volumen `app-react`, ejecuta el siguiente comando:

```bash
docker run --rm -it \
  -v $(pwd)/app-react:/app \
  -w /app \
  node \
  bash -c "npm create vite@latest . -- --template react --yes"
````

🧩 **Qué hace este comando:**

* Usa la imagen oficial de **Node**.
* Monta la carpeta `./app-react` como volumen en `/app`.
* Crea un nuevo proyecto React con **Vite** dentro del contenedor.
* Descarga las dependencias iniciales de React y Vite.

📦 El resultado será un nuevo proyecto en tu carpeta local `app-react`, que podrás editar libremente con tu editor de código.

> ⚠️ Este paso solo se realiza **una vez** (la primera vez que creas el proyecto).
> Si ya tienes `./app-react`, puedes saltarlo.

---

## 🧰 2. Archivos de configuración Docker

### 🐳 Dockerfile

```dockerfile
FROM node

WORKDIR /app

RUN npm install -g npm@latest

EXPOSE 5173
```

---

### ⚙️ docker-compose.yml

```yaml
services:
  react:
    build: .
    container_name: react-vite
    ports:
      - "5173:5173"
    volumes:
      - ./app-react:/app
    environment:
      - CHOKIDAR_USEPOLLING=true
    stdin_open: true
    tty: true
    command: >
      sh -c "
      npm run dev -- --host
      "
```

---

## 🧩 3. Levantar el entorno de desarrollo

Una vez creado el proyecto, puedes levantar el entorno de desarrollo con:

```bash
docker compose up
```

Esto hará que:

* Se construya la imagen desde tu `Dockerfile`.
* Se monte el código del proyecto dentro del contenedor.
* Se ejecute el servidor de desarrollo de **Vite**.

🔗 Accede a tu aplicación React desde tu navegador en:

> **[http://localhost:5173](http://localhost:5173)**

---

## 🔄 4. Reiniciar o limpiar el entorno

Si quieres borrar el proyecto y comenzar desde cero:

```bash
rm -rf app-react
```

Luego, vuelve a ejecutar el comando de creación inicial:

```bash
docker run --rm -it \
  -v $(pwd)/app-react:/app \
  -w /app \
  node \
  bash -c "npm create vite@latest . -- --template react --yes"
```

---

## 🧠 Notas técnicas

* Todo el entorno corre dentro de Docker (no necesitas Node.js local).
* El código es totalmente editable desde tu máquina host (gracias al volumen `./app-react:/app`).
* `CHOKIDAR_USEPOLLING=true` asegura compatibilidad con **macOS**, **Windows (WSL2)** y **Docker Desktop**.
* Si Vite no detecta cambios automáticos, asegúrate de que la sincronización de archivos de Docker esté activa.

---

## 📘 Referencia

Este entorno ha sido creado para trabajar los ejercicios del curso **[Full Stack Open](https://fullstackopen.com/es/)** — *Universidad de Helsinki*.

El curso enseña desarrollo web moderno utilizando:

* **React** (frontend)
* **Node.js** (backend)
* **Express**
* **MongoDB**
* **GraphQL**
* **TypeScript**

---

✍️ **Autor:** fernando muriano
📅 **Última actualización:** Octubre 2025
🚀 **Stack:** React + Vite + Docker Compose
