console.log("here");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value;
  const password = document.querySelector("#password-signup").value;

  console.log(username, password);
  if (username && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/api/logs");
    } else {
      alert("Failed to signup.");
    }
  }
};

document.querySelector("#signup").addEventListener("click", signupFormHandler);
