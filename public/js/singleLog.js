// Select the HTML element that we want to attach our event listener too.
const deleteToggle = document.querySelector("[data-id]");

const clickHandler = function () {
  // return an inner function which creates closure.
  return async function () {
    var id = deleteToggle.dataset.id;

    if (id) {
      const response = await fetch(`/api/logs/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("response good");
        // If successful, redirect the browser to the profile page
        document.location.replace("/api/logs");
      } else {
        console.log("oof");
        alert(response.statusText);
      }
    }
  };
};
deleteToggle.addEventListener("click", clickHandler());
