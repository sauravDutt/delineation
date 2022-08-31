let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer 

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

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

// Connecting MataMask with the DAPP
async function connectWallet() {
    // MataMask requires Requesting permissions to connect to user's wallets.
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();

    const balance = await signer.getBalance();
    const convertToEach = 1e18; 

    console.log("Public Key : ", await signer.getAddress());
    console.log("Balance : ", balance.toString() / convertToEach);
}