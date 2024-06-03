const connectWalletBtn = document.getElementById("connect-wallet-btn");

connectWalletBtn.addEventListener("click", async () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("Connected to wallet:", signer.getAddress());
        // Redirect to admin page if connected successfully
        window.location.href = "admin.html";
    } catch (error) {
        console.error("Error connecting to wallet:", error);
    }
});