document.getElementById('discord-login').addEventListener('click', () => {
    const clientId = "1405381148707651604"; // Your numeric Discord client ID
    const redirectUri = encodeURIComponent("https://zaneioio.github.io/"); // Matches your repo URL exactly
    const scope = encodeURIComponent("identify guilds");
    const responseType = "token";

    const authUrl = `https://discord.com/oauth2/authorize?client_id=1405381148707651604&redirect_uri=https://zaneioio.github.io/&response_type=token}&scope=${scope}`;
    window.location.href = authUrl;
});
