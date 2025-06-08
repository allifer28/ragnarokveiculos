// Car data
const carData = [
  {
    id: 1,
    marca: 'Hyundai',
    modelo: 'IX35',
    imagem: 'images/ix35.jpg',
    descricao: 'HYUNDAI IX35 2.0 16V 170CV MANUAL',
    ano: '2018',
    km: '45.000',
    preco: 'R$ 85.000'
  },
  {
    id: 2,
    marca: 'Jeep',
    modelo: 'Renegade',
    imagem: 'images/renegade.jpg',
    descricao: 'JEEP RENEGADE LONGITUDE 1.8 FLEX AUT',
    ano: '2019',
    km: '38.000',
    preco: 'R$ 95.000'
  },
  {
    id: 3,
    marca: 'Ford',
    modelo: 'Ranger',
    imagem: 'images/ranger.jpg',
    descricao: 'FORD RANGER XLT 2.5 FLEX MANUAL',
    ano: '2020',
    km: '25.000',
    preco: 'R$ 120.000'
  },
  {
    id: 4,
    marca: 'Fiat',
    modelo: 'Uno',
    imagem: 'images/uno1.jpg',
    descricao: 'FIAT UNO DRIVE 1.0 FLEX COMPLETO',
    ano: '2021',
    km: '15.000',
    preco: 'R$ 55.000'
  },
  {
    id: 5,
    marca: 'Chevrolet',
    modelo: 'Spin',
    imagem: 'images/spin1.jpg',
    descricao: 'CHEVROLET SPIN PREMIER 1.0 FLEX AUT.',
    ano: '2019',
    km: '42.000',
    preco: 'R$ 75.000'
  },
  {
    id: 6,
    marca: 'Peugeot',
    modelo: '208',
    imagem: 'images/pegeout208.jpg',
    descricao: 'PEUGEOT 208 ALLURE 1.5 FLEX COMPLETO',
    ano: '2020',
    km: '28.000',
    preco: 'R$ 68.000'
  },
  {
    id: 7,
    marca: 'Chevrolet',
    modelo: 'Agile',
    imagem: 'images/agile1.jpg',
    descricao: 'CHEVROLET AGILE LT 1.4 FLEX',
    ano: '2017',
    km: '65.000',
    preco: 'R$ 45.000'
  },
  {
    id: 8,
    marca: 'Volkswagen',
    modelo: 'Gol',
    imagem: 'images/golg5.jpg',
    descricao: 'VOLKSWAGEN GOL G5 TREND 1.0 FLEX',
    ano: '2016',
    km: '80.000',
    preco: 'R$ 35.000'
  },
  {
    id: 9,
    marca: 'Citroen',
    modelo: 'C4',
    imagem: 'images/c4.jpg',
    descricao: 'CITROEN C4 LOUNGE 1.6 TURBO AUT.',
    ano: '2018',
    km: '50.000',
    preco: 'R$ 65.000'
  },
  {
    id: 10,
    marca: 'Fiat',
    modelo: 'Toro',
    imagem: 'images/toro.jpg',
    descricao: 'FIAT TORO FREEDOM 2.0 4X4 TURBO DIESEL',
    ano: '2021',
    km: '20.000',
    preco: 'R$ 135.000'
  },
  {
    id: 11,
    marca: 'Fiat',
    modelo: 'Strada',
    imagem: 'images/strada.jpg',
    descricao: 'FIAT STRADA 1.4 FLEX COMPLETA',
    ano: '2020',
    km: '35.000',
    preco: 'R$ 70.000'
  },
  {
    id: 12,
    marca: 'Chevrolet',
    modelo: 'Montana',
    imagem: 'images/montana.jpg',
    descricao: 'CHEVROLET MONTANA LS 1.4 FLEX',
    ano: '2018',
    km: '55.000',
    preco: 'R$ 58.000'
  },
  {
    id: 13,
    marca: 'Volkswagen',
    modelo: 'Up',
    imagem: 'images/up.jpg',
    descricao: 'VW UP 1.0 TSI TURBO',
    ano: '2019',
    km: '32.000',
    preco: 'R$ 48.000'
  },
  {
    id: 14,
    marca: 'Chevrolet',
    modelo: 'Onix Sedan',
    imagem: 'images/onixsedan.jpg',
    descricao: 'CHEVROLET ONIX SEDAN LTZ 1.0 TURBO AUT.',
    ano: '2021',
    km: '18.000',
    preco: 'R$ 78.000'
  },
  {
    id: 15,
    marca: 'Renault',
    modelo: 'Sandero',
    imagem: 'images/sandero.jpg',
    descricao: 'RENAULT SANDERO AUTH 1.0 FLEX',
    ano: '2019',
    km: '40.000',
    preco: 'R$ 52.000'
  }
];

// DOM Elements
const elements = {
  cookiesBox: document.getElementById('cookiesBox'),
  acceptBtn: document.getElementById('acceptBtn'),
  declineBtn: document.getElementById('declineBtn'),
  contactBtn: document.getElementById('btnTelefone'),
  searchInput: document.getElementById('searchInput'),
  brandDropdown: document.getElementById('brandDropdown'),
  searchButton: document.getElementById('searchButton'),
  clearButton: document.getElementById('clearButton'),
  carCards: document.getElementById('carCards'),
  whatsappMessage: document.getElementById('whatsapp-message')
};

// Cookie Management
class CookieManager {
  static init() {
    if (!localStorage.getItem('cookiesAccepted')) {
      elements.cookiesBox.classList.add('show');
    }

    elements.acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'true');
      elements.cookiesBox.classList.remove('show');
    });

    elements.declineBtn.addEventListener('click', () => {
      elements.cookiesBox.classList.remove('show');
    });
  }
}

// Car Catalog Management
class CarCatalog {
  constructor(cars) {
    this.cars = cars;
    this.filteredCars = cars;
  }

  renderCards(cars = this.filteredCars) {
    elements.carCards.innerHTML = '';

    if (cars.length === 0) {
      elements.carCards.innerHTML = `
        <div class="no-results">
          <p>Nenhum veículo encontrado com os critérios de busca.</p>
        </div>
      `;
      return;
    }

    cars.forEach(car => {
      const cardElement = this.createCardElement(car);
      elements.carCards.appendChild(cardElement);
    });
  }

  createCardElement(car) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card-item';
    cardDiv.innerHTML = `
      <img src="${car.imagem}" alt="${car.marca} ${car.modelo}" loading="lazy" />
      <div class="card-content">
        <h3>${car.marca} ${car.modelo}</h3>
        <p class="car-description">${car.descricao}</p>
        <div class="car-details">
          <span class="car-year">Ano: ${car.ano}</span>
          <span class="car-km">KM: ${car.km}</span>
        </div>
        <div class="car-price">${car.preco}</div>
        <button type="button" class="details-btn" data-car-id="${car.id}">
          Ver Detalhes
        </button>
      </div>
    `;

    // Add click event for details button
    const detailsBtn = cardDiv.querySelector('.details-btn');
    detailsBtn.addEventListener('click', () => this.showCarDetails(car));

    return cardDiv;
  }

  showCarDetails(car) {
    const whatsappMessage = `Olá! Tenho interesse no ${car.marca} ${car.modelo} ${car.ano}. Poderia me dar mais informações?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5543988674226&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  }

  filterByBrand(brand) {
    if (!brand || brand.trim() === '') {
      this.filteredCars = this.cars;
    } else {
      this.filteredCars = this.cars.filter(car => 
        car.marca.toLowerCase().includes(brand.toLowerCase())
      );
    }
    this.renderCards();
  }

  clearFilter() {
    elements.searchInput.value = '';
    this.filteredCars = this.cars;
    this.renderCards();
  }
}

// Search Functionality
class SearchManager {
  constructor(catalog) {
    this.catalog = catalog;
    this.init();
  }

  init() {
    // Search input events
    elements.searchInput.addEventListener('click', () => {
      elements.brandDropdown.classList.toggle('show');
    });

    elements.searchInput.addEventListener('input', (e) => {
      const value = e.target.value;
      this.catalog.filterByBrand(value);
    });

    // Dropdown brand selection
    elements.brandDropdown.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        e.preventDefault();
        const brand = e.target.getAttribute('data-brand');
        elements.searchInput.value = brand;
        elements.brandDropdown.classList.remove('show');
        this.catalog.filterByBrand(brand);
      }
    });

    // Search button
    elements.searchButton.addEventListener('click', () => {
      const searchValue = elements.searchInput.value;
      this.catalog.filterByBrand(searchValue);
    });

    // Clear button
    elements.clearButton.addEventListener('click', () => {
      this.catalog.clearFilter();
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        elements.brandDropdown.classList.remove('show');
      }
    });
  }
}

// WhatsApp Integration
class WhatsAppManager {
  static init() {
    // Show/hide WhatsApp message
    setTimeout(() => {
      elements.whatsappMessage.style.visibility = 'visible';
    }, 5000);

    setTimeout(() => {
      elements.whatsappMessage.style.visibility = 'hidden';
    }, 10000);

    setTimeout(() => {
      elements.whatsappMessage.style.visibility = 'visible';
    }, 20000);

    // Hide message on click
    elements.whatsappMessage.addEventListener('click', () => {
      elements.whatsappMessage.style.visibility = 'hidden';
    });
  }
}

// Navigation
class Navigation {
  static init() {
    // Contact button
    elements.contactBtn.addEventListener('click', () => {
      window.location.href = 'tel:+5543988674226';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  CookieManager.init();
  WhatsAppManager.init();
  Navigation.init();

  // Initialize car catalog
  const catalog = new CarCatalog(carData);
  catalog.renderCards();

  // Initialize search
  new SearchManager(catalog);
});