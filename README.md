# 🏥 AsisteUHD

**AsisteUHD** es una aplicación web progresiva (**PWA**) diseñada para apoyar el trabajo de enfermería en la **Unidad de Hospitalización Domiciliaria (UHD)**.  
Su objetivo es facilitar la **organización de rutas**, el **seguimiento de curas** y la **documentación clínica** mediante herramientas digitales intuitivas e inspiradas en la práctica real.

---

## ✨ Funcionalidades principales

### 🗺️ Ruta diaria
- Gestión de visitas domiciliarias con:
  - Dirección
  - Observaciones clínicas
  - Prioridad (alta / media / baja)
- Visualización de ruta con mapa integrado
- Cálculo estimado de tiempo y kilómetros
- Diferenciación de ubicaciones lejanas
- Exportación y opciones de compartir (demo)

### 🩹 Curas IA
- Seguimiento cronológico de heridas (timeline)
- Clasificación del estado de la herida:
  - Mejora
  - Atención
  - Crítico
- Análisis clínico simulado con IA basado en evidencia
- Selector de paciente
- Añadir fotos (simulado: cámara o galería)

### 🎙️ Evolutivo IA
- Dictado por voz en español
- Transcripción en tiempo real
- Generación automática de evolutivo clínico
- Edición manual o por voz
- Acciones rápidas:
  - Copiar
  - Editar
  - Compartir
  - Guardar

### 🤖 Asistente clínico IA
- Chat integrado orientado a:
  - Protocolos de curas
  - Selección de apósitos
  - Signos de infección
  - Cuidados de catéter PICC
- Respuestas basadas en guías clínicas (GNEAUPP, EWMA)

---

## 📱 Aplicación PWA (instalable)

AsisteUHD está preparada como **Progressive Web App**:

- ✅ Instalable en **Android** y **iOS**
- ✅ Icono y nombre personalizados (`icon1.png`)
- ✅ Modo aplicación (sin barra del navegador)
- ✅ Funciona offline para contenidos básicos
- ✅ Adaptada a *safe-area* (iPhone con notch)

---

## 🧩 Tecnologías utilizadas

- **HTML5** – estructura
- **CSS3** – diseño responsive y estilo móvil
- **JavaScript (Vanilla)** – lógica de la aplicación
- **Web Speech API** – dictado por voz (si el navegador lo permite)
- **Google Maps Embed** – visualización de rutas
- **PWA**:
  - `manifest.json`
  - `service worker (sw.js)`

---

## 📂 Estructura del proyecto

```text
/
├── index.html        # Aplicación principal
├── manifest.json     # Configuración PWA
├── sw.js             # Service Worker (offline)
├── icon1.png         # Icono de la aplicación
└── README.md         # Este archivo
