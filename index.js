let provider = new ethers.providers.Web3Provider(window.ethereum);
let signer 

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