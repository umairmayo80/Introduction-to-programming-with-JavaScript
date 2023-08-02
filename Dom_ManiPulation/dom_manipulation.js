// 1. Accesing DOM elements
// Example: Accessing an element by its ID
const myElement = document.getElementById("elementId");

// Example: Accessing elements using CSS selectors
const elements = document.querySelectorAll(".someClass");


// 2. Modifying Content and Attributes:
// Example: Modifying innerText (content) of an element
myElement.innerText = "New text content";

// Example: Modifying an attribute (src) of an element
const imageElement = document.getElementById("imageId");
imageElement.src = "new-image.jpg";


// 3. Creating and Removing Elements
// Example: Creating a new paragraph element and adding it to the document
const newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph.";
document.body.appendChild(newParagraph);

// Example: Removing an element from the DOM
const elementToRemove = document.getElementById("elementToRemove");
elementToRemove.remove();

// 4. Handing Events
// Example: Adding a click event listener to a button
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", () => {
  alert("Button clicked!");
});


// 5. Changing Style
// Example: Changing the background color of an element
const coloredElement = document.getElementById("coloredElement");
coloredElement.style.backgroundColor = "red";



// 6. Traversing the DOM:
const parentElement = myElement.parentNode; // Access the parent node of myElement
const firstChildElement = myElement.firstChild; // Access the first child node of myElement
const siblingElement = myElement.nextSibling; // Access the next sibling node of myElement


// 7.  Manipulating Classes:
myElement.classList.add("newClass"); // Add a class to an element
myElement.classList.remove("oldClass"); // Remove a class from an element
myElement.classList.toggle("active"); // Toggle a class on or off an element
myElement.classList.contains("active"); // Check if an element has a specific class


// 8. Creating Complex UI Interactions:
/*
You can create interactive components such as tooltips, modals, sliders, and dropdown menus by combining DOM manipulation with event handling.
*/

const tooltipElement = document.createElement("div");
tooltipElement.innerText = "Hover over me for more information";
tooltipElement.classList.add("tooltip");

tooltipElement.addEventListener("mouseenter", () => {
  // Show tooltip when the mouse enters the element
  tooltipElement.style.display = "block";
});

tooltipElement.addEventListener("mouseleave", () => {
  // Hide tooltip when the mouse leaves the element
  tooltipElement.style.display = "none";
});

document.body.appendChild(tooltipElement);

// 9. Validating and Submitting Forms:
// You can access form elements, validate user input, and handle form submissions.

const formElement = document.getElementById("myForm");
const inputElement = document.getElementById("username");

formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission to handle it manually

  const username = inputElement.value;
  if (username.length < 3) {
    alert("Username must be at least 3 characters long.");
  } else {
    // Perform form submission logic
    // ...
  }
});


// 10. Working with Events:
/*
You can attach event listeners to DOM elements and handle various user interactions, such as clicks, keyboard events, mouse events, etc.
*/
const myButton1 = document.getElementById("myButton");

myButton1.addEventListener("click", () => {
  alert("Button clicked!");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    alert("Enter key pressed!");
  }
});
// 11. Animating Elements:
const animateElement = document.getElementById("animateMe");
let position = 0;

function moveElement() {
  position += 5;
  animateElement.style.left = position + "px";
}

setInterval(moveElement, 100);
