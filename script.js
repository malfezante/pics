function checkPassword() {
  const input = document.getElementById('password').value;
  const message = document.getElementById('message');

  const correctPassword = "Puckissocute:3"; // 

  if (input === correctPassword) {
    window.location.href = "secret.html"; // 
  } else {
    message.textContent = "wrong"; // 
  }
}


