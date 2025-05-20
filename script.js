let parola = document.getElementById("password");
let confirmareParola = document.getElementById("confirmPassword");
let mesajEroare = document.getElementById("ErrorMessage");
let buton = document.getElementById("setPasswordButton");
let mesajSucces = document.getElementById("SuccessMessage");

// console.log(parola);

parola.addEventListener("input", validareParola);
confirmareParola.addEventListener("input", (ev) => validareParola(ev));
buton.addEventListener("click", schimbaParola);

function validareParola(ev) {
  if (parola.value == confirmareParola.value) {
    // Case pentru parole corecte
    buton.disabled = false;
    mesajEroare.hidden = true;
  } else {
    // Case pentru parole gresite
    buton.disabled = true;
    mesajEroare.hidden = false;
  }
}

function schimbaParola(ev) {
  ev.preventDefault();
  console.log("test");
}
