const clientId = "1405381148707651604";
const redirectUri = "https://zaneioio.github.io/";
const scope = "identify guilds";

document.getElementById('discord-login').addEventListener('click', () => {
  const authUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}`;
  window.location.href = authUrl;
});

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
        document.getElementById('discord-login').style.display='none';
        document.getElementById('dashboard').style.display='block';
        document.getElementById('server-name').innerText = "Server Settings for " + data.username;
        
        // Load channels and roles (placeholder, replace with API later)
        const roles = ["Admin","Mod","Member"];
        const channels = ["general","logs","leveling","automod"];
        const adminSelect = document.getElementById('admin-roles');
        roles.forEach(r => {let o=document.createElement('option'); o.value=r; o.text=r; adminSelect.add(o);});
        ["mod-log-channel","xp-channel","automod-log"].forEach(id=>{
          const sel = document.getElementById(id);
          channels.forEach(c=>{let o=document.createElement('option'); o.value=c; o.text=c; sel.add(o);});
        });
      });
    }
  }
};

// Save buttons placeholder
document.querySelectorAll('.save-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    alert(`Saved settings for ${btn.dataset.section}! (This would send to your backend)`);
  });
});
