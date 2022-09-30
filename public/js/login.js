const username = document.querySelector("#username-login");
const rememberUser = document.getElementById("rememberMe");

const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const password = document.querySelector("#password-login").value;

  console.log(username, password);
  if (username && password) {
    // Send a POST request to the API endpoint
    lsRememberMe();

    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username: username.value, password: password }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/dashboard");
    } else {
      console.log("oof");
      alert(response.statusText);
    }
  }
};

// if there's a value in localstorage, display in the username area on pageload
function lsSavedUser() {
  let savedData = JSON.parse(localStorage.getItem("workoutUser"));
  if (savedData) {
    username.value = savedData;
    rememberUser.checked = true;
  }
}

lsSavedUser();
// if (localStorage.checkbox && localStorage.checkbox !== "") {
//   rememberUser.setAttribute("checked", "checked");
//   username.value = localStorage.username;
// } else {
//   rememberUser.removeAttribute("checked");
//   username.value = "";
// }

function lsRememberMe() {
  // if the remember me check is checked
  if (rememberUser.checked && username.value !== "") {
    // then save the username to localstorage
    localStorage.setItem("workoutUser", JSON.stringify(username.value));

    // localStorage.checkbox = rememberUser.value;
    // } else {
    //   localStorage.username = "";
    //   localStorage.checkbox = "";
  } else if (!rememberUser.checked) {
    localStorage.clear();
  }
}

document.querySelector("#login").addEventListener("click", loginFormHandler);
