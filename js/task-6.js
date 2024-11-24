// Function to generate a random hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  // Select DOM elements
  const controls = document.getElementById("controls");
  const input = controls.querySelector("input");
  const createButton = controls.querySelector("[data-create]");
  const destroyButton = controls.querySelector("[data-destroy]");
  const boxesContainer = document.getElementById("boxes");
  
  // Function to create boxes
  function createBoxes(amount) {
    // Clear existing boxes if any
    boxesContainer.innerHTML = "";
  
    // Initialize the size of the first box
    let boxSize = 30;
  
    // Create the specified number of boxes
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = "5px";
      box.style.display = "inline-block";
      boxesContainer.appendChild(box);
  
      // Increase the size for the next box
      boxSize += 10;
    }
  }
  
  // Function to clear boxes
  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }
  
  // Add event listeners
  createButton.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
  
    // Validate the input value
    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100.");
      input.value = ""; // Clear the input field
      return;
    }
  
    // Create boxes and clear the input field
    createBoxes(amount);
    input.value = "";
  });
  
  destroyButton.addEventListener("click", destroyBoxes);
  