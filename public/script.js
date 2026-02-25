/* ============================================================
   MotoVault – Premium Bike Showroom Scripts
   ============================================================ */

// ---- Bike Data ----
const bikeData = {
    classic350: {
        brand: 'Royal Enfield',
        name: 'Classic 350',
        image: 'https://tse2.mm.bing.net/th/id/OIP.x3KB1XyEJKxMbq5TZ80niAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
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
        image: 'https://th.bing.com/th/id/OIP.wNwZ9zhu83OEbf0pHz87aQHaDF?w=344&h=145&c=7&r=0&o=7&pid=1.7&rm=3',
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
        image: 'data:image/webp;base64,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',
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
        image: 'https://tse2.mm.bing.net/th/id/OIP.gaqWVi-lu21PTlhRg249fAHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Honda_CB350_RS.jpg/800px-Honda_CB350_RS.jpg',
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
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bajaj_Pulsar_200_NS.jpg/800px-Bajaj_Pulsar_200_NS.jpg',
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
