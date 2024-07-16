document.addEventListener('DOMContentLoaded', (event) => {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookies = document.getElementById('acceptCookies');

    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'block';
    }

    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });

    // JavaScript para rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Dados simulados dos carros
const carData = [
  { marca: 'Hyundai', modelo: 'IX35', imagem: 'images/ix35.jpg', descricao: 'HYUNDAI IX35 2.0 16V 170CV MANUAL', linkDetalhes: '...' },
  { marca: 'Chevrolet', modelo: 'Spin', imagem: 'images/spin1.jpg', descricao: 'CHEVROLET SPIN PREMIER 1.0 FLEX AUT.', linkDetalhes: '...' },
  // Adicionar mais carros conforme necessário
];

// Função para renderizar cards de carros
function renderCarCards(cars) {
  const carCardsContainer = document.getElementById('carCards');
  carCardsContainer.innerHTML = '';

  cars.forEach(car => {
    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');

    cardItem.innerHTML = `
      <img src="${car.imagem}" alt="Car" />
      <div class="card-content">
        <h3>${car.marca} ${car.modelo}</h3>
        <p>${car.descricao}</p>
        <button type="button" data-js="button" data-link="${car.linkDetalhes}">Ver Detalhes</button>
      </div>
    `;

    carCardsContainer.appendChild(cardItem);
  });
}

// Função para buscar carros pelo filtro de marca
function search() {
  const selectedBrand = document.getElementById("searchInput").value.trim().toLowerCase();
  const filteredCars = carData.filter(car => car.marca.toLowerCase().includes(selectedBrand));

  renderCarCards(filteredCars);
}

// Função para selecionar uma marca e fechar o dropdown
function selectBrand(brand) {
  document.getElementById("searchInput").value = brand;
  document.getElementById("myDropdown").classList.remove("show");
  
  // Aplicar filtro ao selecionar uma marca diretamente
  search();
}

// Dropdown functionality
document.getElementById("searchInput").addEventListener("click", function() {
  document.getElementById("myDropdown").classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.search-input')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// Initial render when page loads
document.addEventListener('DOMContentLoaded', function() {
  renderCarCards(carData);
});
