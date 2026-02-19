const pass1 = document.querySelector("#newPassword");
const pass2 = document.querySelector("#confirmPassword");
const show = document.querySelector("#showPassword");
const form = document.querySelector("form");

show.addEventListener("change", () => {
  const type = show.checked ? "text" : "password";
  pass1.type = type;
  pass2.type = type;
});

form.addEventListener("submit", (e) => {

  if(pass1.value.length < 6){
    e.preventDefault();
    alert("Password must be at least 6 characters");
    return;
  }

  if(pass1.value !== pass2.value){
    e.preventDefault();
    alert("Passwords do not match");
  }

});
