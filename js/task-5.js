// Function to generate a random hex color
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  // Select the necessary elements
  const body = document.body;
  const colorSpan = document.querySelector(".color");
  const changeColorButton = document.querySelector(".change-color");
  
  // Add click event listener to the button
  changeColorButton.addEventListener("click", () => {
    // Generate a random color
    const randomColor = getRandomHexColor();
  
    // Apply the color as the background of the body
    body.style.backgroundColor = randomColor;
  
    // Set the color value in the span element
    colorSpan.textContent = randomColor;
  });
  