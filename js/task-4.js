// Select the form element
const loginForm = document.querySelector(".login-form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", (event) => {
  // Prevent the default page reload
  event.preventDefault();

  // Get the form elements
  const { email, password } = event.target.elements;

  // Validate that both fields are filled in
  if (!email.value.trim() || !password.value.trim()) {
    alert("All form fields must be filled in.");
    return;
  }

  // Collect field values into an object
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  // Log the object to the console
  console.log(formData);

  // Reset the form fields
  loginForm.reset();
});

