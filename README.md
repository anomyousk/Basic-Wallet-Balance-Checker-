# Basic-Wallet-Balance-Checker-
A simple dApp that allows users to check their Algorand wallet  balance.
<h1>Install Algorand SDK</h1>
<code>npm install algosdk</code>
<h1>Install MyAlgo Connect</h1>
<code>npm install @randlabs/myalgo-connect</code>
<h1>Create a simple HTML file for UI:</h1>
<code><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Algorand Wallet Balance Checker</title>
</head>
<body>
    <h1>Algorand Wallet Balance Checker</h1>
    <button id="connectWallet">Connect Wallet</button>
    <div id="walletAddress"></div>
    <div id="balance"></div>
    <button id="requestTokens">Request Tokens</button>

    <script src="https://unpkg.com/algosdk/dist/browser/algosdk.min.js"></script>
    <script src="https://unpkg.com/@randlabs/myalgo-connect"></script>
    <script src="app.js"></script>
</body>
</html></code>
<h1>For the wallet integration and token distribution logic:</h1>
<h2>app.js</h2>
<code>const algosdk = require('algosdk');
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
</code>
<h1>Token Distribution</h1>
<h2>Main.java</h2>
<code>async function requestTestnetAlgos(address) {
    try {
        const response = await fetch('https://faucet.testnet.algorand.network/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address: address })
        });
        const data = await response.json();
        console.log(data);
        alert('Tokens requested successfully!');
    } catch (err) {
        console.error(err);
    }
}

document.getElementById('requestTokens').onclick = async () => {
    const address = document.getElementById('walletAddress').innerText.split(' ')[1];
    await requestTestnetAlgos(address);
};
</code>
<h1>Run dApp</h1>
1. Serve your HTML file using a simple HTTP server. You can use the http-server package from npm:
<code>npm install -g http-server
http-server
</code>
2. Open your browser and navigate to http://localhost:8080 (or the port specified by http-server).
<a href="https://ibb.co/hmVyVrw"><img src="https://i.ibb.co/yQqXqK7/Screenshot-2024-07-31-174341.png" alt="Screenshot-2024-07-31-174341" border="0"></a>
Now, users should be able to connect their Algorand wallets, view their balance, and request tokens.
<h1>Screenshot</h1>
<a href="https://ibb.co/4JFZw3D"><img src="https://i.ibb.co/x32SKdc/Dapp-ss.png" alt="Dapp-ss" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload image</a><br />


