const toggle = document.getElementById("ToggleSenha");
const senha = document.getElementById("password");

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