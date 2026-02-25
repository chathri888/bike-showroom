/* ============================================================
   MotoVault – Premium Bike Showroom Scripts
   ============================================================ */

// ---- Bike Data ----
const bikeData = {
    classic350: {
        brand: 'Royal Enfield',
        name: 'Classic 350',
        image: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'The Royal Enfield Classic 350 is a timeless cruiser that combines retro styling with modern engineering. Its thumping 349cc single-cylinder engine delivers smooth power while the classic chrome-laden design turns heads everywhere. Perfect for long highway cruises and city commutes alike.',
        specs: [
            { label: 'Engine', value: '349cc' },
            { label: 'Power', value: '20.2 HP' },
            { label: 'Torque', value: '27 Nm' },
            { label: 'Mileage', value: '35 km/l' },
            { label: 'Weight', value: '195 kg' },
            { label: 'Top Speed', value: '120 km/h' }
        ],
        price: '₹1,99,500'
    },
    duke390: {
        brand: 'KTM',
        name: 'Duke 390',
        image: 'https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'The KTM Duke 390 is a naked streetfighter built for adrenaline junkies. Powered by a 373cc liquid-cooled single-cylinder engine, it pumps out 43 HP – making it one of the most powerful bikes in its class. Razor-sharp handling and aggressive styling make it a track-day favourite.',
        specs: [
            { label: 'Engine', value: '373cc' },
            { label: 'Power', value: '43 HP' },
            { label: 'Torque', value: '37 Nm' },
            { label: 'Mileage', value: '30 km/l' },
            { label: 'Weight', value: '167 kg' },
            { label: 'Top Speed', value: '167 km/h' }
        ],
        price: '₹3,11,000'
    },
    r15v4: {
        brand: 'Yamaha',
        name: 'YZF R15 V4',
        image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'The Yamaha R15 V4 carries MotoGP DNA in a 155cc package. Variable Valve Actuation (VVA), quickshifter assist, and traction control make this the most tech-loaded bike in its segment. Its delta-box frame and aggressive fairing scream pure sport.',
        specs: [
            { label: 'Engine', value: '155cc' },
            { label: 'Power', value: '18.4 HP' },
            { label: 'Torque', value: '14.2 Nm' },
            { label: 'Mileage', value: '40 km/l' },
            { label: 'Weight', value: '142 kg' },
            { label: 'Top Speed', value: '136 km/h' }
        ],
        price: '₹1,87,000'
    },
    ninja300: {
        brand: 'Kawasaki',
        name: 'Ninja 300',
        image: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'The Kawasaki Ninja 300 is the entry pass to the legendary Ninja lineup. Its parallel-twin 296cc engine is silky smooth and delivers effortless performance. Aerodynamic bodywork, slipper clutch, and ABS make it a perfect all-rounder for sport enthusiasts.',
        specs: [
            { label: 'Engine', value: '296cc' },
            { label: 'Power', value: '39 HP' },
            { label: 'Torque', value: '26.1 Nm' },
            { label: 'Mileage', value: '28 km/l' },
            { label: 'Weight', value: '174 kg' },
            { label: 'Top Speed', value: '160 km/h' }
        ],
        price: '₹3,40,000'
    },
    cb350: {
        brand: 'Honda',
        name: "H'ness CB350",
        image: 'https://images.pexels.com/photos/2611686/pexels-photo-2611686.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: "Honda's H'ness CB350 is a modern classic that exudes elegance. Its 348cc single-cylinder engine is paired with Honda Selectable Torque Control (HSTC) and dual-channel ABS. Bluetooth-enabled instrument cluster and subtle LED elements make it effortlessly premium.",
        specs: [
            { label: 'Engine', value: '348cc' },
            { label: 'Power', value: '21 HP' },
            { label: 'Torque', value: '30 Nm' },
            { label: 'Mileage', value: '35 km/l' },
            { label: 'Weight', value: '181 kg' },
            { label: 'Top Speed', value: '122 km/h' }
        ],
        price: '₹2,03,000'
    },
    ns200: {
        brand: 'Bajaj',
        name: 'Pulsar NS200',
        image: 'https://images.pexels.com/photos/1413413/pexels-photo-1413413.jpeg?auto=compress&cs=tinysrgb&w=800',
        description: 'The Bajaj Pulsar NS200 is a street-naked rocket that punches way above its price. A 199.5cc liquid-cooled engine with triple-spark technology delivers punchy performance. Perimeter frame, mono-shock rear, and aggressive styling make every ride thrilling.',
        specs: [
            { label: 'Engine', value: '199cc' },
            { label: 'Power', value: '24.5 HP' },
            { label: 'Torque', value: '18.5 Nm' },
            { label: 'Mileage', value: '35 km/l' },
            { label: 'Weight', value: '156 kg' },
            { label: 'Top Speed', value: '136 km/h' }
        ],
        price: '₹1,40,000'
    }
};

// ---- DOM Elements ----
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinkEls = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const bikeCards = document.querySelectorAll('.bike-card');
const bikeModal = document.getElementById('bikeModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');

// ---- Navbar Scroll Effect ----
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ---- Active Nav Link on Scroll ----
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollY >= top && scrollY < top + height);
        }
    });
}
window.addEventListener('scroll', highlightNav);

// ---- Mobile Menu Toggle ----
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinkEls.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// ---- Bike Search ----
const bikeSearchInput = document.getElementById('bikeSearch');
const searchClearBtn = document.getElementById('searchClear');
const noResults = document.getElementById('noResults');
const bikesGrid = document.getElementById('bikesGrid');

function performSearch(query) {
    const searchTerm = query.toLowerCase().trim();

    // Show/hide clear button
    searchClearBtn.classList.toggle('visible', searchTerm.length > 0);

    let visibleCount = 0;

    bikeCards.forEach(card => {
        const name = card.querySelector('.bike-card-name')?.textContent.toLowerCase() || '';
        const brand = card.querySelector('.bike-card-brand')?.textContent.toLowerCase() || '';
        const category = (card.dataset.category || '').toLowerCase();
        const specs = card.querySelector('.bike-card-specs')?.textContent.toLowerCase() || '';
        const price = card.querySelector('.bike-price')?.textContent.toLowerCase() || '';

        const matches = searchTerm === '' ||
            name.includes(searchTerm) ||
            brand.includes(searchTerm) ||
            category.includes(searchTerm) ||
            specs.includes(searchTerm) ||
            price.includes(searchTerm);

        if (matches) {
            card.classList.remove('search-hidden');
            visibleCount++;
        } else {
            card.classList.add('search-hidden');
        }
    });

    // Show/hide no results message
    noResults.style.display = visibleCount === 0 && searchTerm.length > 0 ? 'block' : 'none';
    bikesGrid.style.display = visibleCount === 0 && searchTerm.length > 0 ? 'none' : '';

    // Reset category filter to "All" when searching
    if (searchTerm.length > 0) {
        filterBtns.forEach(b => b.classList.remove('active'));
        filterBtns[0]?.classList.add('active');
        bikeCards.forEach(card => card.classList.remove('hidden'));
    }
}

bikeSearchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
});

searchClearBtn.addEventListener('click', () => {
    bikeSearchInput.value = '';
    performSearch('');
    bikeSearchInput.focus();
});

// ---- Category Filter ----
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Clear search when switching category
        bikeSearchInput.value = '';
        searchClearBtn.classList.remove('visible');
        bikeCards.forEach(card => card.classList.remove('search-hidden'));
        noResults.style.display = 'none';
        bikesGrid.style.display = '';

        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        bikeCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.classList.remove('hidden');
                // Re-trigger animation
                card.style.animation = 'none';
                card.offsetHeight; // reflow
                card.style.animation = '';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ---- Bike Detail Modal ----
function openModal(bikeKey) {
    const bike = bikeData[bikeKey];
    if (!bike) return;

    document.getElementById('modalImage').src = bike.image;
    document.getElementById('modalImage').alt = `${bike.brand} ${bike.name}`;
    document.getElementById('modalBrand').textContent = bike.brand;
    document.getElementById('modalName').textContent = bike.name;
    document.getElementById('modalDesc').textContent = bike.description;
    document.getElementById('modalPrice').textContent = bike.price;

    const specsContainer = document.getElementById('modalSpecs');
    specsContainer.innerHTML = bike.specs.map(s => `
    <div class="modal-spec">
      <div class="modal-spec-label">${s.label}</div>
      <div class="modal-spec-value">${s.value}</div>
    </div>
  `).join('');

    bikeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    bikeModal.classList.remove('open');
    document.body.style.overflow = '';
}

// Bind "View Details" and expand buttons
document.querySelectorAll('[data-bike]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const bikeKey = btn.dataset.bike;
        // If it's the CTA inside modal, close modal & scroll to contact
        if (btn.id === 'modalCta') {
            closeModal();
            return;
        }
        openModal(bikeKey);
    });
});

modalClose.addEventListener('click', closeModal);
bikeModal.addEventListener('click', (e) => {
    if (e.target === bikeModal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ---- Animated Stat Counters ----
function animateCounters() {
    const counters = document.querySelectorAll('[data-target]');
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const update = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };
        update();
    });
}

// Trigger counters when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

heroObserver.observe(document.querySelector('.hero'));

// ---- Hero Floating Particles ----
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 1}px;
      height: ${Math.random() * 4 + 1}px;
      background: hsla(25, 100%, 55%, ${Math.random() * 0.3 + 0.05});
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: particleFloat ${Math.random() * 6 + 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 4}s;
    `;
        container.appendChild(particle);
    }

    // Inject keyframes
    const style = document.createElement('style');
    style.textContent = `
    @keyframes particleFloat {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
      50% { transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 40 + 10}px, -${Math.random() * 40 + 10}px) scale(1.5); opacity: 1; }
    }
  `;
    document.head.appendChild(style);
}
createParticles();

// ---- Contact Form ----
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    btn.style.background = 'linear-gradient(135deg, hsl(160, 90%, 40%), hsl(190, 80%, 50%))';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.disabled = false;
        contactForm.reset();
    }, 3000);
});

// ---- Hero Background Slideshow ----
(function () {
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (slides.length === 0) return;
    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);
})();
