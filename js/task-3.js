// Select the input and output elements
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Add an event listener to listen for the input event
nameInput.addEventListener("input", (event) => {
  // Get the trimmed value of the input field
  const inputValue = event.target.value.trim();

  // If the input is empty, display "Anonymous", otherwise display the input value
  nameOutput.textContent = inputValue || "Anonymous";
});
