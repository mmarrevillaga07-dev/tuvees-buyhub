if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service worker registered!'))
            .catch(err => console.log('Service worker registration failed: ', err));
    });
}
/* ==========================================
   TUVEES BUYHUB LIGHT/DARK INTERACTIVITY ENGINE
   ========================================== */

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeIcon = document.getElementById('theme-icon');

// Vector blueprints for minimal icons
const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
const sunIcon = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;

// Read what preference was previously saved by the visitor
const savedTheme = localStorage.getItem('tuvees-theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

// Toggle execution hook
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('tuvees-theme', targetTheme); // Lock memory state
    updateToggleIcon(targetTheme);
});

function updateToggleIcon(theme) {
    // If the theme is light, show the moon icon (to switch to dark), and vice versa
    themeIcon.innerHTML = theme === 'light' ? moonIcon : sunIcon;
}

/* ==========================================
   TUVEES BUYHUB CLIENT-SIDE FILTER ENGINE
   ========================================== */

const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // 1. Remove 'active' highlight from all buttons, add it to the clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const targetCategory = button.getAttribute('data-target');

        // 2. Loop through all cards and hide/show them based on selection
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (targetCategory === 'all' || cardCategory === targetCategory) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
