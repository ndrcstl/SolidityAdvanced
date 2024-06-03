const registerOrgForm = document.getElementById("register-org-form");
const registerOrgBtn = document.getElementById("register-org-btn");

registerOrgBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        const orgAddress = document.getElementById("org-address").value;
        const tokenAddress = document.getElementById("token-address").value;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const organizationRegistry = new ethers.Contract("OrganizationRegistry", OrganizationRegistryABI, signer);
        await organizationRegistry.registerOrganization(orgAddress, tokenAddress);
        console.log("Organization registered successfully!");
        // Redirect to stakeholder page if registered successfully
        window.location.href = "stakeholder.html";
    } catch (error) {
        console.error("Error registering organization:", error);
    }
});