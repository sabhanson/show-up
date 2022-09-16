const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username-login").value;
  const password = document.querySelector("#password-login").value;

  console.log(username, password);
  if (username && password) {
    // Send a POST request to the API endpoint

    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log("hey it's ok");
      // document.location.replace("/");
    } else {
      console.log("oof");
      alert(response.statusText);
    }
  }
};

document.querySelector("#login").addEventListener("click", loginFormHandler);
