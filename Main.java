async function requestTestnetAlgos(address) {
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
