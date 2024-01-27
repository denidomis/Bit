async function checkSession() {
	try {
		const promise = await fetch("http://localhost/server/user/session-check", {
			credentials: "include",
		});
		const answer = await promise.json();
		if (answer.sessionValid) {
			window.location.href = "http://localhost/todos.html";
		}
	} catch (err) {
		console.log(err);
	}
}
checkSession();

const usernameField = document.querySelector("#register-username"),
	emailField = document.querySelector("#register-email"),
	passwordField = document.querySelector("#register-password"),
	registerButton = document.querySelector("#send-registration");

async function register() {
	const promise = await fetch("http://localhost/server/user/register", {
		method: "POST",
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: usernameField.value,
			email: emailField.value,
			password: passwordField.value,
		}),
	});

	const response = await promise.text();
	console.log(response);
}
registerButton.onclick = register;

const loginUsernameElement = document.querySelector("#login-username"),
	loginPasswordElement = document.querySelector("#login-password"),
	loginButton = document.querySelector("#login-button");
async function login() {
	fetch("http://localhost/server/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: loginUsernameElement.value,
			password: loginPasswordElement.value,
		}),
	})
		.then((response) => response.json())
		.then((response) => (window.location.href = response.url))
		.catch((err) => console.log(err));

	// window.location.href = "http://127.0.0.1:5500/front-end/todos.html";
}
loginButton.onclick = login;
