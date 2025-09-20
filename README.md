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
  - Se eliminó un atributo no utilizado

### Actualizado — Sep 16, 2025

- 🔐 **Sesión & Perfil**
  - Ahora se actualiza al detectar cambio en la sesión y se agregó `resetUser`. (`d340a6c`)

- 🏠 **Home (UI)**
  - Se agregó el **estilado de Home**. (`1d8e1f9`)

- 📋 **Menú & Datos de usuario**
  - Lógica del menú y binding de datos del usuario. (`1e10382`)
 
### Actualizado — Sep 20, 2025

- 🍹 **Form Bartender (Bebidas)**
  - Se **registró la ruta** del formulario de bartender. (`a8b1c7a`)
  - **Estructura HTML** del form con **validaciones** y control. (`cc59436`)

- 🧹 **UX / Forms**
  - Se quitó `autocomplete` innecesario. (`e6959a1`)

- 🎨 **Estilos**
  - Se agregó una **clase CSS** para el “back”/fondo. (`55814ae`)

- 🔀 **Integración**
  - Merge `main` → `Nahuel/formBartender`. (`fee0730`)
  - PR mergeado a `main` por @StefaniaAyelen. (`3c9c3bd`)

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

- 🧭 **Ruteo**
  - Agregado de ruta de registro. (`5f16ab1`)

- ⚡ **Accesos rápidos / Cuentas**
  - Agregado de acceso directo. (`714a517`)
  - Lógica del acceso directo. (`5d8741b`)
  - Agregado de la cuenta rápida. (`7a9b875`)
  - Agregado de cuentas. (`b68b41d`)
  - 
### Actualizado — Sep 20, 2025

- 🧭 **Navegación & Páginas (Bebidas/Comidas)**
  - Página de **Bebidas** (diseño inicial). (`55012ba`)
  - Cerrar sesión + navigate hacia **Comidas**. (`820a19b`)
  - Se agregó navegación hacia **Bebidas** y **Comidas**. (`67959e4`)
  - Nuevos métodos `navigate`. (`6199fd5`, `5597f5d`)
  - Se añadió navegación faltante hacia **Bebidas** desde **Comidas**. (`ded17b9`)
  - Ajustes de UI: **diseño responsive** y header más grande. (`9d36c56`, `8251096`)
  - Mejora: **diseño responsive de la card**. (`4d37c16`)

- 👩‍🍳 **Pantalla del Chef & Formularios**
  - Rutas del **chef**. (`51ae8e2`)
  - Nuevo **input custom** para la pantalla del chef. (`d6a3e99`)
  - Nuevo **form de comidas**. (`21862f1`)
  - Normalización: rutas a **minúscula**. (`e6204c9`)
  - Refactor: se eliminó `custom-input-chef` y se aplicó/importe `custom-input`. (`aa67fdd`, `6e896a9`, `2025015`)

- 🧑‍💼 **Owner & Empleados**
  - Integración de rutas del **owner**. (`5b5d806`)
  - Implementación del **form para cargar empleado**. (`782fff6`)

- 🔀 **Integración**
  - Merges de ramas de trabajo a `main`. (`8319046`, `b2d7ad3`, `a2ede3e`, `fcd9865`)
  - PRs fusionados por el colaborador: (`aefded5`, `91a3f74`, `114e029`, `bb29316`)
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

### Actualizado — Sep 17, 2025

- ✅ **Registro & Validaciones**
  - Fix: Se arreglaron las validaciones del formulario de registro. (`e17dcdd`)
  - Fix: Validación del dominio del correo electrónico. (`1886f54`)

### Actualizado — Sep 20, 2025

- 🔐 **Autenticación (Invitado)**
  - Feature: Implementé el **login anónimo / guest**. (`43149fc`)

- 🔀 **Integración**
  - Merge `main` → `federico/guest-login`. (`1fe72ab`)
  - PR fusionado a `main`. (`a925fff`)

---
