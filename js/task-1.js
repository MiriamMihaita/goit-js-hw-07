// Get a reference to the list of categories
const categoriesList = document.querySelector("#categories");

// Count and log the number of categories
const categoryItems = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItems.length}`);

// Loop through each category and log its details
categoryItems.forEach((item) => {
  // Get the category title (h2 text)
  const categoryTitle = item.querySelector("h2").textContent;

  // Count the number of elements in the category
  const elementsCount = item.querySelectorAll("ul li").length;

  // Log the details
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});