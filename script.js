// Replace with your numeric Discord Application ID
const clientId = "1405381148707651604"; // your actual client ID as a string
const redirectUri = encodeURIComponent("https://zaneioio.github.io/zaneioio.github.io"); // your GitHub Pages URL
const scope = encodeURIComponent("identify guilds");
const responseType = "token";

const authUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

document.getElementById('discord-login').addEventListener('click', () => {
    window.location.href = authUrl;
});
