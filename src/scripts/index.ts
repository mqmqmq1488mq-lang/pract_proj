export function setupSite() {
    console.log('Сайт загрузился');

    const toggle = document.querySelector<HTMLButtonElement>('.header__toggle');
    const menu = document.querySelector<HTMLElement>('.header__menu');

    if (!toggle || !menu) {
        return;
    }

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    });
}
