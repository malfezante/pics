function checkPassword() {
  const input = document.getElementById('password').value;
  const message = document.getElementById('message');

  const correctPassword = "secret123"; // ← change ce mot de passe

  if (input === correctPassword) {
    window.location.href = "secret.html";
  } else {
    message.textContent = "wrong";
  }
}


