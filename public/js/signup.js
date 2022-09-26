console.log("here");

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (password && username) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ password, username }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to signup.");
    }
  }
};

document.querySelector("#signup").addEventListener("submit", signupFormHandler);
