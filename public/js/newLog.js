// // workout form auto-fill options
// const workoutFormAFOptions = [
//   {
//     emoji: "🚴‍♀️",
//     workout_type: "bike",
//     units: "miles",
//   },
//   {
//     emoji: "🏋️",
//     workout_type: "gym",
//     units: ["minutes", "hours"],
//   },
//   {
//     emoji: "🏃‍♀️",
//     workout_type: "run",
//     units: ["minutes", "hours", "miles"],
//   },
//   {
//     emoji: "🥾",
//     workout_type: "hike",
//     units: ["minutes", "hours", "miles"],
//   },
// ];

// var emojiContainer = document.querySelector(".emoji-container");
// // var formSelect = document.querySelector(".form-select");
// function workoutInputOptions() {
//   for (let index = 0; index < workoutFormAFOptions.length; index++) {
//     let eachObj = workoutFormAFOptions[index];
//     var aTag = document.createElement("a");
//     var newOption = document.createElement("li");
//     newOption.textContent = eachObj.emoji;
//     aTag.append(newOption);
//     emojiContainer.append(aTag);
//   }
// }

//TODO: add input areas based on workout_type selection. For example, if biking is chosen, an input should appear that says x miles, x hours
//TODO: Fix functionality to handle form submission

//TODO: change select options to circle icons of emojis, they carry a "value" attribute = workout_type

// emojiContainer.addEventListener("click", (e) => {
//   console.log(e.target.value);
//   if (e.target.localName === "li") {
//     e.target.parentElement.style.backgroundColor = "black";
//   }

//   // only allow for one to be selected at a time radio ???
// });

// I have access to the selected workout_type during MOUSEOUT
// formSelect.addEventListener("mouseout", () => {
//   console.log(formSelect.options[formSelect.selectedIndex].value);
// });

// workoutInputOptions();
// console.log(workoutFormAFOptions);
const newFormHandler = async function (event) {
  //TODO: rewrite this function to handle the additional inputs I'm writing above

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
