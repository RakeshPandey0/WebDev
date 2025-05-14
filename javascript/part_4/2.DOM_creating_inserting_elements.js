//Creating an HTML element in memory
const newDiv = document.createElement("div");

//Assign text or HTML content to the element.
newDiv.textContent = "I'm a new div.";

//Add class or id to the element.
newDiv.classList.add("box");
newDiv.id = "uniqueBox";

//Inserting to DOM
/**
We have many ways to insert elements to DOM:

parent.appendChild(child)
parent.prepend(child)
parent.insertBefore(newElement, referenceElement)
element.insertAdjecentHTML(position, html)
*/

document.body.appendChild(newDiv); //newDiv will be added at the end.

const container = document.getElementById("form");
const newParagraph = document.createElement("p");

newParagraph.textContent = "Dynamically added content below the form";
newParagraph.style.color = "green";

container.appendChild(newParagraph);

const form = document.getElementById("form");
const paragraph = document.createElement("p");

paragraph.textContent = "Form submitted successfully!";
paragraph.style.color = "green";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.contains(paragraph)) {
    form.appendChild(paragraph);
  }
});
