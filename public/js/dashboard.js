// Select the HTML element that we want to attach our event listener too.
const deleteButtons = document.querySelectorAll("[data-id]");

const clickHandler = function () {
  // return an inner function which creates closure.
  return async function () {
    var id = this.dataset.id;

    if (id) {
      const response = await fetch(`/api/logs/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("response good");
        // If successful, redirect the browser to the profile page
        document.location.reload();
      } else {
        console.log("oof");
        alert(response.statusText);
      }
    }
  };
};

// Instead of attaching the event listener to the container holding our buttons, we loop through our buttons and attach an event listener to each one.
// Now each button has a backpack with its own reference to `count` instead of a reference to a global variable or attribute.
// Instead of doing a costly reads on the DOM, we now only mutate the private `count` variable.

if (deleteButtons) {
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", clickHandler());
  }
}
