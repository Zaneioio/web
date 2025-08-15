const clientId = "1405381148707651604"; // Your numeric Discord client ID
const redirectUri = "https://zaneioio.github.io/"; // Your GitHub Pages URL
const scope = "identify guilds";

document.getElementById('discord-login').addEventListener('click', () => {
  const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}`;
  window.location.href = authUrl;
});

// After redirect, get the access token from URL hash
window.onload = () => {
  if(window.location.hash){
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');
    if(token){
      fetch('https://discord.com/api/users/@me', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => {
        document.getElementById('welcome-section').style.display = 'none';
        const userSection = document.getElementById('user-info');
        userSection.style.display = 'block';
        document.getElementById('username').innerText = `Username: ${data.username}#${data.discriminator}`;
        document.getElementById('userid').innerText = `ID: ${data.id}`;
      })
      .catch(err => console.error(err));
    }
  }
};
