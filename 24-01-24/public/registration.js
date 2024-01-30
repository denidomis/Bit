function solve(event) {
  let flag = 1;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let firstName = document.getElementById("first").value;
  let lastName = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthDate = document.getElementById("dob").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let repassword = document.getElementById("repassword").value;
  let mobile = document.getElementById("mobile").value;
  let gender = document.getElementById("gender").value;
  let profilePhoto = document.getElementById("profilePhoto");
  event.preventDefault();
  if (!emailRegex.test(email)) {
    flag = 0;
    pass.innerText = "Please enter a valid email address.";
    setTimeout(() => {
      pass.innerText = "";
    }, 3000);
  }

  if (password !== repassword) {
    flag = 0;
    pass.innerText = "Passwords do not match. Please re-enter.";
    setTimeout(() => {
      pass.innerText = "";
    }, 3000);
  }

  let passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/;

  if (!passwordRegex.test(password)) {
    flag = 0;
    pass.innerText =
      "Password must be at least 8 characters" +
      " long and include at least one number," +
      " one alphabet, and one symbol.";
    setTimeout(() => {
      pass.innerText = "";
    }, 3000);
  }
  console.log(flag);
  if (flag) {
    (async () => {
      const data = new FormData();
      data.append("firstName", firstName);
      data.append("lastName", lastName);
      data.append("email", email);
      data.append("birthDate", birthDate);
      data.append("username", username);
      data.append("password", password);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("img", profilePhoto.files[0]);

      const promise = await fetch("http://localhost:3000/api/user/register", {
        method: "post",
        body: data,
      });

      const response = await promise.json();
      console.log(response);
      alert("Registration successfull");
    })();
  }
}
