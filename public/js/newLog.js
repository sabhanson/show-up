// workout form auto-fill options
const workoutFormAFOptions = [
  {
    emoji: "🚴‍♀️",
    workout_type: "bike",
    units: "miles",
  },
  {
    emoji: "🏋️",
    workout_type: "gym",
    units: ["minutes", "hours"],
  },
  {
    emoji: "🏃‍♀️",
    workout_type: "run",
    units: ["minutes", "hours", "miles"],
  },
  {
    emoji: "🥾",
    workout_type: "hike",
    units: ["minutes", "hours", "miles"],
  },
];

var formSelect = document.querySelector(".form-select");
function workoutInputOptions() {
  for (let index = 0; index < workoutFormAFOptions.length; index++) {
    let eachObj = workoutFormAFOptions[index];
    var newOption = document.createElement("option");
    newOption.textContent = eachObj.workout_type;
    formSelect.append(newOption);
  }
}

// I have access to the selected workout_type during MOUSEOUT
formSelect.addEventListener("mouseout", () => {
  console.log(formSelect.options[formSelect.selectedIndex].value);
});

workoutInputOptions();
console.log(workoutFormAFOptions);
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

  document.location.replace("/api/logs");
};

document
  .querySelector("#new-log-form")
  .addEventListener("click", newFormHandler);
