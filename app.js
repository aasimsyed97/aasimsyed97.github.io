// -------------------------------------------------------------
// Swiss Editorial Interactive Systems
// Theme Management, Scroll Reveal, and Kinetic Typography
// -------------------------------------------------------------

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const toggleStatusEl = themeToggleBtn.querySelector('.toggle-status');

/**
 * Applies the selected theme and saves state in localStorage
 * @param {'light'|'dark'} theme
 */
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        toggleStatusEl.textContent = 'LIGHT';
        localStorage.setItem('portfolio-theme', 'dark');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        toggleStatusEl.textContent = 'DARK';
        localStorage.setItem('portfolio-theme', 'light');
    }
}

// Initial theme resolution
const savedTheme = localStorage.getItem('portfolio-theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    setTheme(isDark ? 'light' : 'dark');
});

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll(
    '.section, .stack-item-row, .impact-row, .exp-item, .project-item, .contact-box'
);

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Element animate-in once
        }
    });
}, observerOptions);

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Kinetic Typography Title Scroll Effect
const kineticTitle = document.querySelector('.kinetic-title');

if (kineticTitle) {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let lastTime = performance.now();
    let velocity = 0;
    let targetVelocity = 0;
    
    /**
     * Animation frame runner for smooth title decay
     */
    function updateKineticEffect() {
        // Linear interpolation for smooth velocity stabilization
        velocity += (targetVelocity - velocity) * 0.1;
        
        // Define maximum tilt/skew constraint
        const maxVelocity = 10;
        let clampedVelocity = Math.max(-maxVelocity, Math.min(maxVelocity, velocity));
        
        if (Math.abs(clampedVelocity) < 0.01) {
            clampedVelocity = 0;
        }
        
        // Apply responsive transforms based on speed
        // Skewing the font based on scroll velocity simulates paper drag
        kineticTitle.style.transform = `skewY(${clampedVelocity * 0.35}deg) translateY(${clampedVelocity * -0.4}px)`;
        
        // Gradual decay of velocity over time
        targetVelocity *= 0.88;
        
        requestAnimationFrame(updateKineticEffect);
    }
    
    window.addEventListener('scroll', () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const currentTime = performance.now();
        const timeDiff = Math.max(1, currentTime - lastTime); // Prevent division by zero
        const scrollDiff = currentScrollTop - lastScrollTop;
        
        // Velocity: Distance scrolled / time elapsed (multiplied by design weight)
        targetVelocity = (scrollDiff / timeDiff) * 12;
        
        lastScrollTop = currentScrollTop;
        lastTime = currentTime;
    }, { passive: true });
    
    // Fire dynamic typography render cycle
    requestAnimationFrame(updateKineticEffect);
}
