// Lógica interactiva para la Landing Page de Rutas y Experiencias Museo Arocena

// Estado global de la reserva en curso
let currentBooking = {
  packageTitle: 'Arte & Gastronomía',
  unitPrice: 680,
  routeTag: 'Ruta 1',
  duration: '4.5 horas',
  persons: 2
};

// Coordenadas reales de Torreón (Centro Histórico y Museo Arocena)
const AROCENA_COORDS = [25.5413, -103.4590];

// Puntos de interés para el mapa
const LOCATIONS = [
  {
    name: "Museo Arocena",
    tag: "Punto Central de Partida",
    category: "Cultura",
    lat: 25.5413,
    lng: -103.4590,
    address: "Calle Cepeda 354, Centro Histórico",
    desc: "Colección virreinal, arte regional e historia de La Laguna."
  },
  {
    name: "Restaurante Baldoria Centro",
    tag: "Aliado Gastronómico",
    category: "Gastronomía",
    lat: 25.5422,
    lng: -103.4578,
    address: "Av. Morelos #182 (a 3 min caminando)",
    desc: "Menú especial de 3 tiempos y maridaje regional."
  },
  {
    name: "Café Montañés",
    tag: "Cafetería de Especialidad",
    category: "Cafetería",
    lat: 25.5418,
    lng: -103.4582,
    address: "Paseo Morelos (a 2 min caminando)",
    desc: "Café de altura mexicano y repostería artesanal."
  },
  {
    name: "Colectivo Tinta & Barro",
    tag: "Aliado Emprendimiento",
    category: "Diseño Local",
    lat: 25.5430,
    lng: -103.4602,
    address: "Calle Zaragoza (a 5 min caminando)",
    desc: "Taller de cerámica utilitaria y piezas de creadores locales."
  },
  {
    name: "Estación Teleférico Torreón",
    tag: "Turismo & Panorámica",
    category: "Aventura Urbana",
    lat: 25.5390,
    lng: -103.4625,
    address: "Calle Treviño (a 6 min caminando)",
    desc: "Pase directo al Mirador de Puerto Noas y Cristo de las Noas."
  }
];

let mapInstance = null;
let mapMarkers = [];

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  setupFilterButtons();
  setupDateInput();
});

// Inicializar el mapa de Leaflet
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;

  // Centro en Museo Arocena
  mapInstance = L.map("map", {
    scrollWheelZoom: false
  }).setView(AROCENA_COORDS, 16);

  // Capa base de OpenStreetMap con estilo limpio
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contribuyentes',
    maxZoom: 19
  }).addTo(mapInstance);

  // Iconos personalizados con colores de la marca
  const arocenaIcon = L.divIcon({
    className: 'custom-map-pin-arocena',
    html: `<div style="background-color: #6B1D2F; color: #C5A059; border: 3px solid #ffffff; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-family: serif; font-size: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.35);">A</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });

  const allyIcon = L.divIcon({
    className: 'custom-map-pin-ally',
    html: `<div style="background-color: #C5A059; color: #141416; border: 2px solid #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; box-shadow: 0 3px 8px rgba(0,0,0,0.25);">📍</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });

  // Agregar los marcadores
  LOCATIONS.forEach((loc, index) => {
    const isMain = index === 0;
    const marker = L.marker([loc.lat, loc.lng], {
      icon: isMain ? arocenaIcon : allyIcon
    }).addTo(mapInstance);

    const popupContent = `
      <div style="font-family: inherit;">
        <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: ${isMain ? '#6B1D2F' : '#B08B46'};">${loc.tag}</span>
        <h4 style="font-size: 14px; font-weight: 700; margin: 2px 0; color: #141416;">${loc.name}</h4>
        <p style="font-size: 12px; color: #555; margin: 4px 0;">${loc.desc}</p>
        <p style="font-size: 11px; color: #777; margin: 0; font-weight: 600;">📍 ${loc.address}</p>
      </div>
    `;

    marker.bindPopup(popupContent);
    mapMarkers.push(marker);
  });

  // Abrir por defecto el popup del Museo Arocena
  mapMarkers[0].openPopup();
}

// Enfocar un marcador desde la lista lateral
function focusMarker(index) {
  if (!mapInstance || !mapMarkers[index]) return;

  const loc = LOCATIONS[index];
  mapInstance.flyTo([loc.lat, loc.lng], 17, { duration: 0.8 });
  mapMarkers[index].openPopup();

  // Actualizar estilos activos de las tarjetas
  const cards = document.querySelectorAll('.aliado-card');
  cards.forEach((card, i) => {
    if (i === index) {
      card.classList.add('active', 'border-arocena-burgundy', 'bg-arocena-burgundy/5');
      card.classList.remove('border-stone-200', 'bg-white');
    } else {
      card.classList.remove('active', 'border-arocena-burgundy', 'bg-arocena-burgundy/5');
      card.classList.add('border-stone-200', 'bg-white');
    }
  });
}

// Filtros para las tarjetas de paquetes
function setupFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".package-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle clase activa en botones
      buttons.forEach(b => b.classList.remove("active", "bg-arocena-burgundy", "text-white"));
      btn.classList.add("active", "bg-arocena-burgundy", "text-white");

      const category = btn.getAttribute("data-category");

      cards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (category === "todos" || cardCat === category) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// Establecer fecha mínima en el selector de reserva (mañana)
function setupDateInput() {
  const dateInput = document.getElementById("book-date");
  if (!dateInput) return;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];
  dateInput.min = minDate;
  dateInput.value = minDate;
}

// Abrir modal de reserva con datos del paquete
function openBookingModal(packageTitle, unitPrice, routeTag, duration) {
  currentBooking.packageTitle = packageTitle;
  currentBooking.unitPrice = unitPrice;
  currentBooking.routeTag = routeTag;
  currentBooking.duration = duration;

  document.getElementById("modal-package-title").textContent = packageTitle;
  document.getElementById("modal-route-tag").textContent = `${routeTag} • ${duration}`;
  
  // Reset de vistas
  document.getElementById("modal-step-form").classList.remove("hidden");
  document.getElementById("modal-step-success").classList.add("hidden");

  updateBookingTotal();

  const modal = document.getElementById("booking-modal");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Cerrar modal
function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Actualizar el resumen de costos
function updateBookingTotal() {
  const personsSelect = document.getElementById("book-persons");
  const persons = parseInt(personsSelect.value, 10);
  currentBooking.persons = persons;

  const isFamilyPackage = currentBooking.packageTitle.includes("Familiar");
  // Si es paquete familiar, el costo es tarifa plana de paquete
  const total = isFamilyPackage ? currentBooking.unitPrice : currentBooking.unitPrice * persons;

  document.getElementById("summary-unit-price").textContent = `$${currentBooking.unitPrice.toLocaleString('es-MX')} MXN${isFamilyPackage ? ' (Paquete completo)' : ' c/u'}`;
  document.getElementById("summary-persons").textContent = `${persons} persona${persons > 1 ? 's' : ''}`;
  document.getElementById("summary-total").textContent = `$${total.toLocaleString('es-MX')} MXN`;
}

// Procesar la reserva y generar el Código QR (RF-01, RF-02)
function processBooking(event) {
  event.preventDefault();

  const nameInput = document.getElementById("book-name");
  const emailInput = document.getElementById("book-email");
  const dateInput = document.getElementById("book-date");
  const timeSelect = document.getElementById("book-time");

  if (!nameInput.value || !emailInput.value || !dateInput.value) {
    alert("Por favor completa los campos de nombre, correo y fecha para generar tu pase digital.");
    return;
  }

  // Generar código único de boleto
  const bookingCode = `ARO-${Math.floor(1000 + Math.random() * 9000)}`;
  const qrData = `MUSEO_AROCENA|PASE:${bookingCode}|RUTA:${currentBooking.packageTitle}|TITULAR:${nameInput.value}|FECHA:${dateInput.value}|HORA:${timeSelect.value}|PERSONAS:${currentBooking.persons}`;

  // Actualizar datos del pase digital generado
  document.getElementById("pass-package-name").textContent = currentBooking.packageTitle;
  document.getElementById("pass-holder").textContent = nameInput.value;
  document.getElementById("pass-date").textContent = `${dateInput.value} (${timeSelect.value} hrs)`;
  document.getElementById("pass-qty").textContent = `${currentBooking.persons} persona${currentBooking.persons > 1 ? 's' : ''}`;
  document.getElementById("pass-code").textContent = bookingCode;

  // Generar código QR dinámico
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrData,
    width: 140,
    height: 140,
    colorDark: "#141416",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Transición a la vista de éxito
  document.getElementById("modal-step-form").classList.add("hidden");
  document.getElementById("modal-step-success").classList.remove("hidden");

  // Re-renderizar iconos de Lucide en la vista nueva
  if (window.lucide) {
    lucide.createIcons();
  }
}

// Acordeón FAQ
function toggleFaq(index) {
  const contents = document.querySelectorAll(".faq-content");
  const icons = document.querySelectorAll(".faq-icon");

  contents.forEach((content, i) => {
    if (i === index) {
      const isHidden = content.classList.contains("hidden");
      if (isHidden) {
        content.classList.remove("hidden");
        icons[i].style.transform = "rotate(180deg)";
      } else {
        content.classList.add("hidden");
        icons[i].style.transform = "rotate(0deg)";
      }
    } else {
      content.classList.add("hidden");
      icons[i].style.transform = "rotate(0deg)";
    }
  });
}

// Formulario B2B para nuevos aliados
function handleB2BSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("form-b2b");
  const successMsg = document.getElementById("b2b-success");

  form.reset();
  form.classList.add("hidden");
  successMsg.classList.remove("hidden");

  setTimeout(() => {
    form.classList.remove("hidden");
    successMsg.classList.add("hidden");
  }, 7000);
}
