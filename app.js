const algosdk = require('algosdk');
const MyAlgoConnect = require('@randlabs/myalgo-connect');

// MyAlgo wallet instance
const myAlgoWallet = new MyAlgoConnect();

document.getElementById('connectWallet').onclick = async () => {
    try {
        const accounts = await myAlgoWallet.connect();
        const address = accounts[0].address;
        document.getElementById('walletAddress').innerText = `Address: ${address}`;
        await displayBalance(address);
    } catch (err) {
        console.error(err);
    }
};

async function displayBalance(address) {
    try {
        const algodClient = new algosdk.Algodv2('YOUR_API_TOKEN', 'https://testnet-algorand.api.purestake.io/ps2', '');
        const accountInfo = await algodClient.accountInformation(address).do();
        const balance = accountInfo.amount / 1e6; // Convert microAlgos to Algos
        document.getElementById('balance').innerText = `Balance: ${balance} Algos`;
    } catch (err) {
        console.error(err);
    }
}

// Handle token distribution
document.getElementById('requestTokens').onclick = async () => {
    // Implement the token distribution logic here
    // This typically involves calling a smart contract or using a faucet service
};
