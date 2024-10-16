export default function showLogin() {
    const body = document.querySelector('body');
    const modal = document.querySelector('.login-modal');
    const closeButton = modal.querySelector('#fechar');
    const accessButton = modal.querySelector('#acessar');
    const loginButton = document.querySelector('#login');

    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.dataset.exibir = true;
        body.style.overflow = 'hidden';
    });

    accessButton.addEventListener('click', (event) => {
        event.preventDefault();
    });

    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        modal.dataset.exibir = false;
        body.style.overflow = '';
    });

    modal.addEventListener('click', (event) => {
        event.preventDefault();
        if(event.target === event.currentTarget) {
            modal.dataset.exibir = false;
            body.style.overflow = '';
        }
    });
}