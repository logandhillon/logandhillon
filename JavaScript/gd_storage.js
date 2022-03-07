// Get a NodeList of all .demo elements
const demoClasses = document.querySelectorAll('.QdYI6c');

// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
  element.textContent = 'All demo classes updated.';
});

// Access the first element in the NodeList
demoClasses[0];
