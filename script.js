const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const clickMe = document.getElementById('clickMe');


openModalButtons.forEach(button =>  {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});

closeModalButtons.forEach(button =>  {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});

clickMe.addEventListener('click', () => {
    const modal = document.querySelector('#modal');
    openModal(modal);
})

const openModal = (modal) => {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

const closeModal = (modal) => {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

