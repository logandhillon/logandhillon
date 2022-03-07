const demoClasses = document.querySelectorAll('.QdYI6c');

var value = window. prompt("Set storage value: ");
demoClasses.forEach(element => {
  element.textContent = value + ' used';
});

demoClasses[0];
