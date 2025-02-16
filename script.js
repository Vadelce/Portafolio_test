const slide = document.querySelector('.carrusel-slide');
const images = document.querySelectorAll('.carrusel-slide img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateCarrusel(index) {
    slide.style.transform = translateX(-${index * 100}%);
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarrusel(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarrusel(currentIndex);
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.getAttribute('data-index'));
        updateCarrusel(currentIndex);
    });
});


function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
      alert(Buscando: ${searchInput});
    } else {
      alert('Por favor, introduce un término para buscar.');
    }
}

document.getElementById("appointment-form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Cita solicitada correctamente. Nos pondremos en contacto contigo.");
});


document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    let offset = 0;
    setInterval(() => {
        offset -= 100 / 3;
        if (offset < -((100 / 3) * 4)) {
            offset = 0;
        }
        carousel.style.transform = translateX(${offset}%);
    }, 5000);
});

////////////// Mapa ///////////////////

function initMap() {
  var location = { lat: -34.6037, lng: -58.3816 }; // Coordenadas de ejemplo (Buenos Aires)
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
      styles: [
          {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ color: "#202020" }]
          },
          {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#ffffff" }]
          },
          {
              featureType: "poi",
              elementType: "labels.text",
              stylers: [{ visibility: "off" }]
          }
      ]
  });

  var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Ubicación"
  });
}

// Cargar el script de Google Maps con API Key
var script = document.createElement("script");
script.src = https://maps.googleapis.com/maps/api/js?key=[TU_API_KEY]&callback=initMap;
script.async = true;
script.defer = true;
document.body.appendChild(script);