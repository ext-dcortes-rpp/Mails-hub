# VISION — MailForge OS Hub

Sistema de generación de mails Braze para Rappi. Permite a cualquier persona del equipo construir mails compatibles con Braze a partir de bloques predefinidos (los "bricks de LEGO" del sistema de diseño MailForge OS).

Este es el **Hello World** del proyecto: prueba que el flujo Cursor → GitHub → Vercel funciona antes de construir el hub real.

---

## Stack técnico

- **Next.js 14** (App Router) con TypeScript
- **Tailwind CSS** con la paleta Neon de MailForge OS pre-configurada
- **Supabase** como base de datos (preparado, conexión real en fase 3)
- **Vercel** para deploy automático

---

## Tokens de marca aplicados

La configuración de Tailwind ya incluye:

- Paleta Neon: `neon-orange` (#FF7A4D), `neon-red` (#FF2526), `neon-pink` (#FF4583), `neon-magenta` (#EB5583)
- Escala de neutros: de `neutral-50` (#F9F9F9) a `neutral-900` (#1D1D1D)
- Gradiente hero: `bg-neon-hero` (20°, naranja → rojo → rosa)
- Gradiente reverse: `bg-neon-reverse` (222°)
- Tipografía: Trebuchet MS

Espejan las variables del archivo Figma `sTTrCFxXKOYmbdw4GjxKJO` (MAILS_NEON_DESIGN_SYSTEM).

---

## Cómo arrancar localmente

### 1. Instalar dependencias

```bash
npm install
```

Esto descarga todo lo que el proyecto necesita. La primera vez tarda 1–2 minutos.

### 2. Levantar el servidor de desarrollo

```bash
npm run dev
```

Abre el navegador en `http://localhost:3000`. Cualquier cambio que hagas en los archivos se ve reflejado al instante (hot reload).

### 3. (Opcional, solo cuando llegues a la fase 3) Configurar Supabase

```bash
cp .env.example .env.local
```

Y rellena los valores reales en `.env.local`. **Nunca subas este archivo a GitHub** — ya está en `.gitignore`.

---

## Cómo desplegar a Vercel (la magia)

Una vez el proyecto está en GitHub:

1. Entra a [vercel.com](https://vercel.com) y registrate con tu cuenta de GitHub.
2. Clic en "Add New" → "Project".
3. Selecciona el repositorio `vision-hub`.
4. Vercel detecta automáticamente que es Next.js. Solo dale "Deploy".
5. En 1–2 minutos te da una URL pública tipo `vision-hub-tunombre.vercel.app`.

A partir de ahí, **cada vez que hagas push a la rama `main`, Vercel re-despliega automáticamente** en menos de un minuto.

---

## Estructura del proyecto

```
vision-hub/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raíz (head, fonts, metadata)
│   │   ├── page.tsx          # Página principal (Hello World)
│   │   └── globals.css       # Estilos globales y tokens
│   ├── components/           # Componentes reutilizables (próximamente)
│   └── lib/
│       └── supabase.ts       # Cliente de Supabase (preparado)
├── public/                   # Imágenes y assets estáticos
├── tailwind.config.js        # Configuración de Tailwind con tokens MailForge
├── tsconfig.json             # Configuración de TypeScript
├── next.config.js            # Configuración de Next.js
└── package.json              # Dependencias y scripts
```

---

## Próximos pasos (cuando confirmes que el Hello World funciona)

1. **Fase 1 — Cimientos:** descomponer la plantilla maestra de Braze en bloques atómicos (headers, banners, deals, módulos, footer) y guardarlos en `src/blocks/`.
2. **Fase 2 — Las 8 recetas:** construir el motor que ensambla bloques + tokens + recetas → HTML válido para Braze.
3. **Fase 3 — Editor visual:** la interfaz que el usuario ve, con preview en vivo y los 5 KVs (Genérico, Turbo, Neutro, Pro, ProBlack).
4. **Fase 4 — Integración Drive:** reemplazar la lectura de la TAXONOMIA Sheet por la API de Google Drive.

---

## Equipo

Proyecto VISION — MailForge OS · Rappi
