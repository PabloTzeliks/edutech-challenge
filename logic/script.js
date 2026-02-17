const html = document.documentElement;

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggleDesktop = document.getElementById('theme-toggle-button-desktop');
const themeToggleMobile = document.getElementById('theme-toggle-button-mobile');

function toggleTheme() {

    var element = html;
    element.classList.toggle('dark');

    if (html.classList.contains('dark')) {

        localStorage.setItem('theme', 'dark');
    } else {

        localStorage.setItem('theme', 'light');
    }
}

themeToggleDesktop.addEventListener('click', toggleTheme);

themeToggleMobile.addEventListener('click', toggleTheme);

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
})

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark').matches)) {

    html.classList.add('dark');
} else {

    html.classList.remove('dark');
}