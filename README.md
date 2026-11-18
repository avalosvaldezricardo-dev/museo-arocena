# Rutas y Experiencias Arocena — Landing Page

Landing page desarrollada para el **Museo Arocena** (Torreón, Coahuila) basada en el PRD del proyecto (*Arocena Conecta*). Integra la oferta cultural del museo con restaurantes y comercios aliados en el Centro Histórico.

---

## 🚀 Cómo ejecutarla en tu computadora localmente

Tienes dos formas muy sencillas de correrla:

### Opción 1: Directo en tu navegador (Sin instalar nada)
1. Abre tu carpeta `museo arocena` en el Finder de tu Mac:
   ```bash
   /Users/ricardoavalosvaldez/Documents/museo arocena
   ```
2. Haz **doble clic** sobre el archivo `index.html`.
3. ¡Listo! Se abrirá inmediatamente en Safari, Chrome o tu navegador predeterminado.

---

### Opción 2: Usando un servidor local ligero con Python
Si prefieres servirla a través de un servidor HTTP local:

1. Abre tu terminal y ve a la carpeta del proyecto:
   ```bash
   cd "/Users/ricardoavalosvaldez/Documents/museo arocena"
   ```
2. Inicia el servidor con Python 3 (ya viene instalado en tu Mac):
   ```bash
   python3 -m http.server 8000
   ```
3. Abre tu navegador y visita:
   ```
   http://localhost:8000
   ```

---

## 📂 Estructura de Archivos Creados

* `index.html`: Estructura HTML5 semántica y responsiva con Tailwind CSS, tipografías Google Fonts (*Cormorant Garamond* y *Plus Jakarta Sans*) e iconografía Lucide.
* `styles.css`: Estilos personalizados, transiciones suaves, diseño para impresión de tickets y ajustes del mapa.
* `app.js`: Lógica interactiva:
  * Filtro por categorías de paquetes (*Gastronomía*, *Emprendimiento*, *Aventura*, *Familiar*).
  * Mapa interactivo de **Leaflet.js** centrado en el Museo Arocena (Calle Cepeda) con marcadores de todos los aliados del Centro Histórico.
  * Modal interactivo de reserva con cálculo de costos en tiempo real y **generador de Pase Digital con Código QR dinámico**.
  * Acordeón de Preguntas Frecuentes.
  * Formulario de captación B2B para nuevos aliados comerciales.
* `prd_landing_page_experiencias_museo_arocena.md`: Documento de Requerimientos de Producto original.

---

## ✨ Características y Requerimientos del PRD Implementados

1. **Header Sticky:** Logotipo Arocena + submarca *Arocena Conecta* y navegación rápida con CTA directo.
2. **Hero Section de Alto Impacto:** H1 orientado a valor (*"Vive Torreón a través del arte, su sabor y su gente"*), métricas clave y llamadas a la acción duales.
3. **¿Cómo Funciona?:** 3 pasos interactivos (*Elige* $\rightarrow$ *Reserva* $\rightarrow$ *Disfruta con QR*).
4. **Catálogo de Experiencias:**
   * **Ruta 1:** Arte & Gastronomía (Museo + Restaurante Baldoria + Café Montañés).
   * **Ruta 2:** Talento Lagunero (Exposiciones temporales + Taller Colectivo Tinta & Barro + Descuento local).
   * **Ruta 3:** Torreón de Altura (Museo + Teleférico Torreón & Puerto Noas + Bebida artesanal).
   * **Ruta 4:** Paquete Familiar Especial (Museo didáctico + Taller infantil + Comida 3 tiempos).
5. **Simulador de Pase Digital & QR (RF-01, RF-02):** Modal de checkout que genera un ticket digital con código QR escaneable listo para imprimir o guardar.
6. **Mapa Interactivo del Centro Histórico (RF-03):** Mapa estilizado con los comercios aliados y distancias caminables desde el museo.
7. **B2B / Captación de Aliados (RF-04):** Formulario para registrar propuestas de restaurantes y emprendedores locales.
8. **Prueba Social & FAQ:** Testimonios con reseñas y acordeón interactivo.
