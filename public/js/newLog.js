const newFormHandler = async function (event) {
  event.preventDefault();
  console.log("hello");

  const workoutType = document.querySelector(
    'input[name="workout-type"]'
  ).value;
  const workoutDetails = document.querySelector(
    'textarea[name="workout-details"]'
  ).value;

  await fetch(`/api/logs/newLog`, {
    method: "POST",
    body: JSON.stringify({
      workout_type: workoutType,
      details: workoutDetails,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/home");
};

document
  .querySelector("#new-log-form")
  .addEventListener("click", newFormHandler);
