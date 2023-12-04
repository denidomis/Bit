function slaptazodzioValidacija() {
  let slaptazodis = document.getElementById("password").value;

  let minLength = 8;
  let maxLength = 28;
  let hasLetter = /[a-zA-Z]/.test(slaptazodis);
  let hasNumber = /\d/.test(slaptazodis);
  let hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(slaptazodis);

  if (
    slaptazodis.length >= minLength &&
    slaptazodis.length <= maxLength &&
    hasLetter &&
    hasNumber &&
    hasSpecialChar
  ) {
    alert("Slaptažodis teisingai įvestas");
  } else {
    alert(
      "Slaptažodis privalo būti ne trumpesnis nei 8 simboliai ir ne ilgesnis nei 28 simboliai, pridėkite prie slaptažodžio simbolių, skaičių ir didžiųjų/mažųjų raidžių"
    );
  }
}
