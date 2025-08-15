// Discord OAuth2 login
document.getElementById('discord-login').addEventListener('click', () => {
    const clientId = "1405381148707651604"; // Replace with your bot's client ID
    const redirectUri = encodeURIComponent("https://YOUR_GITHUB_PAGES_URL"); // Replace with your GitHub Pages URL
    const scope = encodeURIComponent("identify guilds");
    const responseType = "token";

    const authUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authUrl;
});
