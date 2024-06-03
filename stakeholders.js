const claimTokensBtn = document.getElementById("claim-tokens-btn");

claimTokensBtn.addEventListener("click", async () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const vestingSchedule = new ethers.Contract("VestingSchedule", VestingScheduleABI, signer);
        await vestingSchedule.claimTokens();
        console.log("Tokens claimed successfully!");
    } catch (error) {
        console.error("Error claiming tokens:", error);
    }
});