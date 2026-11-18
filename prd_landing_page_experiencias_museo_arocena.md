# Product Requirements Document (PRD): Landing Page "Rutas y Experiencias Arocena"

**Proyecto:** Plataforma de Paquetes Culturales, Gastronómicos y de Emprendimiento Local  
**Cliente/Institución:** Museo Arocena (Torreón, Coahuila)  
**Versión:** 1.0  
**Fecha:** Noviembre 2026  
**Estado:** Borrador para Revisión  

---

## 1. Resumen Ejecutivo
El objetivo de este proyecto es diseñar y desarrollar una *landing page* dedicada a promover y comercializar paquetes experienciales que conecten la oferta cultural del **Museo Arocena** con el ecosistema comercial del Centro Histórico de Torreón y la Comarca Lagunera. A través de alianzas estratégicas con restaurantes locales, emprendimientos creativos y operadores turísticos, buscamos transformar una visita tradicional al museo en una jornada integral de turismo cultural, gastronómico y de consumo local.

---

## 2. Objetivos del Producto

### Objetivos de Negocio
* **Incrementar la afluencia al museo:** Aumentar en un 20% la venta de boletos durante los fines de semana y temporadas vacacionales mediante paquetes atractivos.
* **Fomentar la economía local:** Crear un canal de exposición y venta cruzada para al menos 15 emprendimientos y restaurantes locales en los primeros 3 meses.
* **Diversificar ingresos:** Generar un nuevo modelo de monetización a través de comisiones por reserva de paquetes o membresías de aliados comerciales.

### Objetivos del Usuario
* Descubrir planes estructurados y curados para disfrutar en Torreón sin tener que planificar toda la logística desde cero.
* Acceder a beneficios exclusivos (descuentos, menús especiales, recorridos guiados) al adquirir un paquete integrado.
* Reservar o adquirir experiencias de forma rápida, intuitiva y segura desde dispositivos móviles.

---

## 3. Público Objetivo (User Personas)

1. **El Turista Cultural / Visitante Foráneo ("Sofía, 34 años"):**
   * *Contexto:* Visita Torreón por negocios o fin de semana. Quiere conocer lo más emblemático de la ciudad en poco tiempo y con buena calidad.
   * *Necesidad:* Un itinerario "todo en uno" que combine cultura (Museo Arocena), buena comida local y un recorrido seguro por el Centro Histórico.
2. **El Local Explorador ("Carlos y Ana, 28 años"):**
   * *Contexto:* Viven en La Laguna y buscan planes diferentes para el fin de semana o citas.
   * *Necesidad:* Redescubrir su ciudad apoyando marcas locales, cafeterías de especialidad y talleres creativos conectados con el arte.
3. **Familias Laguneras ("Familia Martínez"):**
   * *Contexto:* Buscan actividades educativas y recreativas de fin de semana para niños y adultos.
   * *Necesidad:* Paquetes familiares que incluyan talleres en el museo, comida apta para todos y actividades al aire libre (ej. Teleférico / Cristo de las Noas).

---

## 4. Propuesta de Valor y Estructura de Paquetes
La *landing page* presentará tres categorías principales de paquetes (con opción a personalización):

* **Ruta 1: Arte & Gastronomía (El Centro Histórico a Bocados)**
  * Entrada al Museo Arocena + Recorrido guiado por la colección de Arte Virreinal o Historia Regional + Comida/Cena de 3 tiempos en restaurante aliado del Centro Histórico + Degustación en cafetería local.
* **Ruta 2: Talento Lagunero (Cultura & Emprendimiento)**
  * Entrada al Museo Arocena (Exposiciones Temporales) + Taller práctico impartido por un emprendedor local (cerámica, ilustración, textiles) + Cupón de descuento en tiendas de diseño local participantes.
* **Ruta 3: Torreón de Altura (Aventura & Patrimonio)**
  * Entrada al Museo Arocena + Traslado/Acceso al Teleférico Torreón y Puerto Noas + Bebida tradicional lagunera en terraza aliada.

---

## 5. Arquitectura de la Información y Secciones de la Landing Page

### 5.1. Header / Navegación (Sticky)
* Logotipo del Museo Arocena + Sub-marca de la iniciativa (ej. *Arocena Conecta*).
* Enlaces de anclaje: *Experiencias*, *Aliados Locales*, *Cómo Funciona*, *Preguntas Frecuentes*.
* CTA Principal: **"Explorar Paquetes"**.

### 5.2. Hero Section
* **Visual:** Video corto en loop o carrusel de alta calidad mostrando la arquitectura del museo, platillos locales, manos de emprendedores creando y vistas de Torreón.
* **Copy Principal (H1):** *"Vive Torreón a través del arte, su sabor y su gente."*
* **Subtítulo (H2):** *"Descubre paquetes únicos que conectan tu visita al Museo Arocena con los mejores restaurantes, emprendimientos y rutas turísticas de La Laguna."*
* **CTA:** Botón primario **"Ver Paquetes Disponibles"** + Botón secundario **"Soy Emprendedor (Únete)"**.

### 5.3. Sección: "¿Cómo Funciona?" (3 Pasos)
1. **Elige tu experiencia:** Selecciona el paquete que mejor se adapte a tu plan (pareja, familia, amigos).
2. **Reserva en línea:** Elige tu fecha, horario de entrada al museo y realiza tu pago seguro.
3. **Disfruta y conecta:** Recibe tu pase digital único (QR) para acceder al museo y canjear tus beneficios en los establecimientos aliados.

### 5.4. Catálogo de Paquetes (Cards Interactivas)
* Filtros rápidos: *Todos*, *Gastronomía*, *Emprendimiento*, *Turismo*, *Familiar*.
* Cada tarjeta de paquete debe mostrar:
  * Imagen representativa.
  * Etiqueta de duración estimada (ej. *4 horas*).
  * Título del paquete y resumen de lo que incluye (iconografía clara: boleto museo + comida + actividad).
  * Precio total (mostrando el ahorro vs. comprar por separado).
  * Botón **"Ver Detalles / Reservar"** (abre un modal o página de detalle con el itinerario hora por hora y términos).

### 5.5. Directorio de Aliados Locales ("Corazón Lagunero")
* Cuadrícula visual destacando los restaurantes, cafeterías, marcas locales y tours participantes.
* Al hacer clic en un aliado, se muestra una breve historia del emprendimiento y su ubicación en un mapa interactivo respecto al Museo Arocena (fomentando el recorrido peatonal por el Centro Histórico).

### 5.6. Mapa Interactivo de la Ruta
* Integración de mapa estilizado (Google Maps API o Mapbox) mostrando el Museo Arocena como nodo central y los puntos de interés aliados a su alrededor con distancias caminables en minutos.

### 5.7. Prueba Social y Testimonios
* Reseñas de visitantes que ya vivieron las rutas, acompañadas de fotos reales (UGC - User Generated Content) con un hashtag oficial (ej. `#ArocenaConecta`).

### 5.8. Convocatoria para Nuevos Aliados (B2B)
* Banner dedicado para captar nuevos emprendimientos, restaurantes o guías turísticos interesados en sumarse al programa.
* CTA: **"Postula tu proyecto"** (abre formulario de registro para curaduría del museo).

### 5.9. Preguntas Frecuentes (FAQ) y Footer
* Acordeón con dudas sobre vigencia de pases, políticas de cancelación, accesibilidad, estacionamiento y reservaciones en restaurantes.
* Footer institucional con datos de contacto del Museo Arocena, horarios, redes sociales y aviso de privacidad.

---

## 6. Requerimientos Funcionales

| ID | Requerimiento | Descripción | Prioridad |
| :--- | :--- | :--- | :--- |
| **RF-01** | **Motor de Reservas / Checkout** | Permitir seleccionar fecha, número de personas y pagar en línea (Tarjeta de crédito/débito, SPEI, PayPal). | Alta |
| **RF-02** | **Generación de Pase Digital (QR)** | Al completar la compra, el sistema debe enviar un correo y permitir descargar un pase con código QR único que valide el acceso en taquilla del museo y en los comercios aliados. | Alta |
| **RF-03** | **Gestión de Disponibilidad** | Sincronización de horarios disponibles según el aforo del museo, talleres de emprendedores y horarios de restaurantes. | Alta |
| **RF-04** | **Formulario de Registro de Aliados** | Formulario web para que negocios locales envíen su propuesta (nombre, giro, redes sociales, propuesta de valor) para ser evaluados por el equipo del museo. | Media |
| **RF-05** | **Panel de Validación para Aliados** | Interfaz web sencilla (mobile-first) para que los restaurantes y emprendedores escaneen el QR del cliente y marquen el beneficio como "Canjeado". | Alta |
| **RF-06** | **Integración con Analytics** | Implementación de Google Analytics 4 y Meta Pixel para medir embudos de conversión y campañas publicitarias. | Media |

---

## 7. Requerimientos No Funcionales (UI/UX y Técnicos)
* **Diseño Mobile-First:** El 75% del tráfico turístico y de consulta de planes ocurre desde smartphones. La navegación y el proceso de pago deben ser fluidos en pantallas pequeñas.
* **Identidad Visual:** Debe respetar la línea gráfica institucional del Museo Arocena (elegancia, sobriedad, tipografía clara) pero inyectando acentos cálidos y vibrantes que representen la gastronomía y creatividad local.
* **Velocidad de Carga:** Tiempo de carga inicial inferior a 2.5 segundos (optimización de imágenes en formato WebP y lazy loading).
* **Accesibilidad:** Cumplir con estándares WCAG 2.1 nivel AA (contraste adecuado, textos alternativos en imágenes, navegación por teclado).

---

## 8. Métricas de Éxito (KPIs)
* **Tasa de Conversión (CR):** Alcanzar entre el 2.5% y 4% de visitantes a la landing que completan la compra de un paquete.
* **Ticket Promedio:** Incrementar el gasto promedio por visitante en comparación con la entrada general individual del museo.
* **Tasa de Canje en Aliados:** Al menos el 85% de los paquetes vendidos deben completar el recorrido (visita al museo + consumo en el comercio aliado).
* **Leads de Aliados:** Recibir al menos 30 solicitudes de emprendimientos y restaurantes locales en el primer mes de lanzamiento.

---

## 9. Fases de Implementación Sugeridas
* **Fase 1 (Semanas 1-2):** Definición comercial de los primeros 5 paquetes piloto con aliados fundadores, diseño UX/UI y redacción de contenidos.
* **Fase 2 (Semanas 3-5):** Desarrollo frontend de la landing page, integración de pasarela de pagos y sistema de generación/validación de códigos QR.
* **Fase 3 (Semana 6):** Pruebas de usuario (QA), capacitación a personal de taquilla del museo y comercios aliados.
* **Fase 4 (Semana 7):** Lanzamiento oficial y campaña de difusión en redes sociales y medios locales.