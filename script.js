console.log(localStorage.getItem("Tema"));

localStorage.setItem("Tema", "dark");

localStorage.removeItem("tema");

//sessionStorage["tema"] = "dark";

let user = {
  nume: "Octav",
  varsta: 20,
  hobby: "programare",
  oras: "Costangeles",
};

sessionStorage["user"] = JSON.stringify(user);

console.log(sessionStorage["user"]);
