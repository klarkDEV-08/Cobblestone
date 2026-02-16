const toggle = document.getElementById("ToggleSenha");
const toggleconfirm = document.getElementById("Toggleconfirm");
const senha = document.getElementById("password");
const confirmEmail = document.getElementById("confirm-email");
const confirmPass = document.getElementById("confirm-password");
const botao = document.getElementById("button-send");
const email = document.querySelector('input[name="email"]');
const botaoBack = document.getElementById("ToggleBack");
const buttonPlus = document.getElementsByClassName("add-button");
const buttonFilter = document.getElementsByClassName("filter-button");

if (botaoBack) {
  botaoBack.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

if (toggle && senha) {
  toggle.addEventListener("click", () => {
    if (senha.type === "password") {
      senha.type = "text";
      toggle.classList.remove("fa-eye-slash");
      toggle.classList.add("fa-eye");
    } else {
      senha.type = "password";
      toggle.classList.remove("fa-eye");
      toggle.classList.add("fa-eye-slash");
    }
  });
}

if (toggleconfirm && confirmPass) {
  toggleconfirm.addEventListener("click", () => {
    if (confirmPass.type === "password") {
      confirmPass.type = "text";
      toggleconfirm.classList.remove("fa-eye-slash");
      toggleconfirm.classList.add("fa-eye");
    } else {
      confirmPass.type = "password";
      toggleconfirm.classList.remove("fa-eye");
      toggleconfirm.classList.add("fa-eye-slash");
    }
  });
}

botao.addEventListener("click", (e) => {
  e.preventDefault();
  
  if (!email.value.trim()) {
    alert("Preencha o email.");
    return;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Formato de email inválido.");
    return;
  }
  
  if (!senha.value.trim()) {
    alert("Preencha a senha.");
    return;
  }
  
  if (confirmEmail && confirmPass) {
    if (!confirmEmail.value.trim()) {
      alert("Confirme o email.");
      return;
    }
    if (confirmEmail.value !== email.value) {
      alert("Emails não coincidem.");
      return;
    }
    if (!confirmPass.value.trim()) {
      alert("Confirme a senha.");
      return;
    }
    if (confirmPass.value !== senha.value) {
      alert("Senhas não coincidem.");
      return;
    }
  }
  
  window.location.href = "content.html";
});
