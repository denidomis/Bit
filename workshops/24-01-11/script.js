const empty = "";
const uCase = "ASDEFGHIJKLMNOPRSTUVYZ";
const lCase = "abcdefghijklmnoprstuvyz";
const number = "1234567890";
const symbols = "!@#$%^&*_+-{}|:?<>";

const pLength = document.getElementById("p-length");
const pUpper = document.getElementById("p-uppercase");
const pLower = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-numbers");
const pSymbol = document.getElementById("p-symbols");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

submit.addEventListener("click", () => {
  let initialPassword = empty;

  pUpper.checked ? (initialPassword += uCase) : "";
  pLower.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbols) : "";

  password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(length, initialPassword) {
  let pass = "";
  for (let i = 0; i < length; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(password.value);
  alert("Password Copied");

  //   if (password.value === empty) {
  //     alert("Please enter your password");
  //   } else {
  //     password.select();
  //     document.execCommand("copy");
  //     alert("Password Copied");
  //   }
});
