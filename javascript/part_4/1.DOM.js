/*
DOM is a programming interface for web documents. It represents the page as a structured tree of 
objects, which allows languages like javascript to access and manipulate elements like images, buttons, 
text, etc.

*/

//Common DOM tasks:

//1. Selecting elements

// document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("form");
  const heading = section.querySelector("h2"); //for class and id we use it like ".class" and "#id"
  const button = document.getElementById("submitButton");

  //2. event handling

  //when submit button is clicked, the heading("Form") will change to the textContent mentioned below
  button.addEventListener("click", (e) => {
    e.preventDefault();

    //3. Manipulating content
    heading.textContent = "Submit Button Clicked!";
    //   heading.innerHTML = "<strong>Submit Button Clicked!</strong>";

    //4. changing styles
    heading.style.color = "blue";
  });
// });

//Note: The commented function of event listner DOMContentLoaded ensures that the javascript runs only after the entire HTML document is parsed and all the DOM elements are available.

//In our code we used <script> in the index.html page at the end of the body. Thus we don't need that eventListner for now. Do try the other version where you put the <script> tag in the head and uncomment the eventListner.