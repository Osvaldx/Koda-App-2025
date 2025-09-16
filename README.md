# Integrantes

---

## Nahuel Romano _(Osvaldx)_
**Áreas:** Setup del proyecto, Ruteo, Autenticación/Sesiones, Feedback UI, Docs

- 🔧 **Setup & base**
  - Inicio de proyecto. *(Sep 10, 2025)*
  - Se agregó **Tailwind**. *(Sep 10, 2025)*
  - Configuraciones automáticas. *(Sep 10, 2025)*
  - Limpieza de archivos `[-] deleted`. *(Sep 10, 2025)*
  - Update README / Docs iniciales. *(Sep 6, 2025)*
  - Initial commit. *(Sep 6, 2025)*

- 🧭 **Ruteo**
  - Registro de rutas (**beta**, usando _children_). *(Sep 10, 2025)*

- 🔐 **Autenticación & sesiones (Supabase)**
  - Manejo de **supabaseClient** para la DB. *(Sep 10, 2025)*
  - Consumo del servicio **Auth** para login. *(Sep 10, 2025)*
  - Creación del **formulario de login**. *(Sep 10, 2025)*
  - Implementación de **sessionClose** y botón **Cerrar sesión**. *(Sep 10, 2025)*

- 🍞 **Feedback al usuario (Toasts)**
  - Componente **`custom-toast`** (estructura y props desde el padre).
  - **ToastManager** para centralizar invocaciones.
  *(Sep 10, 2025)*

- ✨ **Animaciones & Branding**
  - Se agregó `animations.css`.
  - Se agregaron animaciones para cada texto y el logo.
  - Se incorporaron logos e imágenes de la app.

- 🚀 **Splash Screen (Capacitor)**
  - Se instaló `@capacitor/splash-screen`.
  - Se configuró el splash screen.
  - Se creó y **registró** el splash animado.
  - Se registró la ruta de `assets/`.

- 📦 **Android**
  - App lista para abrir en **Android Studio**.

- 🧹 **Limpieza**
  - Se eliminó un atributo no utilizado.

---

## Stefania Bianchi _(StefaniaAyelen)_
**Áreas:** UI/UX de login, Header, Inputs, Accesibilidad

- 🎨 **UI del login**
  - **Estructura** del login. *(Sep 11, 2025)*
  - **Estilado** de inputs del formulario. *(Sep 11, 2025)*
  - **Header personalizado**. *(Sep 11, 2025)*
  - Ajuste de **forma de la curva** (detalle visual). *(Sep 11, 2025)*

- 👁️ **Accesibilidad/UX**
  - **Botón “ojo”** para mostrar/ocultar contraseña. *(Sep 12, 2025)*
  - **Lógica** para alternar el tipo del input (password/text). *(Sep 12, 2025)*

---

## Federico Deniard
### Actualizado — Sep 13, 2025

- 🧭 **Ruteo & Navegación**
  - **Se arregló la navegación de rutas** — branch `federico/route-fixing` (PR #6), commit `101bd1a`.
  - `app.routes.ts`: reorganización de rutas:
    - Redirect `"" → "splash"` (full match).
    - Grupo `auth/` con **lazy load** para `login` y `register`.
    - `home` y `splash` pasan a **lazy load**.
    - Se eliminan rutas duplicadas y se ordena la definición.
  - `pages/auth/login/login.ts`: unificación de post-login a `this.router.navigateByUrl('home')` (sin `replaceUrl`).
  - `pages/home/home.ts`: tras sign-out, redirige a **`/auth/login`**.
  - `pages/splash/splash.ts`: botón de ingreso redirige a **`/auth/login`**.

- 📊 **Diff**
  - 16 cambios — **8 adiciones** / **8 eliminaciones**.

### Actualizado — Sep 15, 2025

- 🧭 **Ruteo & Navegación**
  - Fix: Se corrigió la ruta del botón de redirección. (`8ecd372`)

- 👤 **Registro & Perfiles**
  - Feature: Diseño del formulario de registro básico. (`b645c90`)
  - Feature: Componente para cargar imágenes de avatar. (`b72e680`)

- 🎨 **Estilos & UX**
  - Style: Efecto hover en el botón de remover imagen. (`8fa30e4`)
  - Style: Pantalla de Register con *clip-curve*. (`25206dd`)

---
