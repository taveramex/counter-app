# ⚛️ Ejercicio React + Vite + PropTypes

Este es un proyecto sencillo creado con **React + Vite**, usando **Yarn** como manejador de paquetes.

---

## 🚀 Cómo correr el proyecto

1. Instala las dependencias:

   ```bash
   yarn
   ````

2. Inicia el servidor de desarrollo:

   ```bash
   yarn dev
   ```

> Asegúrate de tener **Node.js** y **Yarn** instalados.

---

## 🎯 ¿Cuál es el propósito?

Este proyecto no está pensado como demo visual, sino como una prueba intencional para validar errores con **PropTypes** y valores por defecto (`defaultProps`) en React.

---

## 📢 Nota para Vic y Santz

> ¡Hey Vic, Santz! 👋
> Ya quedó resuelto el problema que tenía el proyecto. Resultó ser una incompatibilidad con **React 19**, que hace que los `defaultProps` no se apliquen correctamente en componentes funcionales — incluso usando `function` en lugar de `const`.

👉 Hice **downgrade a React 18.2.0**, que es estable y 100% compatible con `PropTypes` y `defaultProps`.
Ahora todo funciona perfecto, y ya pueden revisar el comportamiento esperado.

Si estaban viendo `undefined` en props que debían tener valores por defecto, era **por eso**. No era bug mío 😅.

---

## ✅ Confirmación rápida

* [x] React 18.2.0
* [x] PropTypes cargando correctamente
* [x] Valores por defecto funcionando
* [x] `StrictMode` compatible

---

## 🧠 TL;DR

Este repo:

* Fue una prueba para entender los errores silenciosos de `PropTypes`
* Ya está corregido y limpio
* Quedó con React 18.2.0 para asegurar compatibilidad

---

Made with 💻 by Mando 🧠

