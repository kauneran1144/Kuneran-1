document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const iconBurger = document.getElementById('icon-burger');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!button || !menu || !iconBurger || !iconClose) {
        console.error('Mobile menu elements not found in DOM.');
        return;
    }

    function toggleMobileMenu() {
        menu.classList.toggle('hidden');

        const isExpanded = menu.classList.contains('hidden') ? 'false' : 'true';
        button.setAttribute('aria-expanded', isExpanded);

        iconBurger.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
    }

    button.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!menu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
});
