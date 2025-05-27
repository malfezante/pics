function checkPassword() {
  const input = document.getElementById('password').value;
  const message = document.getElementById('message');

  const correctPassword = "Puckissocute:3"; 

  if (input === correctPassword) {
    window.location.href = "secret.html"; // ← Le nom de la page secrète (si tu changes le nom du fichier)
  } else {
    message.textContent = "wrong"; // 
  }
}
