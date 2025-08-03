// Data Attributes
// console.log("=== Data Attributes ===");

// const customPic = document.querySelector('.custom');
// console.log('Dataset of custom image:', customPic.dataset);

// Using Data Attributes for Interaction
console.log("=== Data Attributes Interaction ===");

const customPic = document.querySelector('.custom');

customPic.addEventListener('click', function() {
  alert(`Welcome ${customPic.dataset.name} ${customPic.dataset.last}!`);
});

console.log('Click the first image to see the alert!');



// Adding a class
// console.log("=== Removing a Class ===");

// const pic = document.querySelector(".nice");
// pic.classList.remove("cool");
// console.log('ClassList after removed:', pic.classList);

// Working with classList
// console.log("=== Working with ClassList ===");

// const pic = document.querySelector('.nice');
// console.log('Initial ClassList:', pic.classList);

// console.log("textCont vs InnerText");
// const mainHeaadingWithSpan = document.querySelector('h1');
// console.log('textContent: ', mainHeaadingWithSpan.textContent);
// console.log('InnerText: ', mainHeaadingWithSpan.innerText);

//console.log("=== Getters and setters ===");
//select the main heading
//const mainHeading = document.querySelector('h1');

// Using textContent as a getter (reading the value)
//console.log('Original Main Heading Text:',mainHeading.textContent);

// Using textContent as a setter (updating the value)
//mainHeading.textContent = 'My Dynamic Portfolio!';
// Log the updated value to confirm
//console.log('Updated Main Heading Text:', mainHeading.textContent);


// Accessing Element Properties
// console.log("=== Element Properties ===");
// const projectTitle = document.querySelector('.project-item h2');
// console.log('Project Title Element:', projectTitle);

// Get the parent element
// const projectContainer = projectTitle.parentElement;
// console.log('Parent Container of Project Title:', projectContainer);

// Get and log text content
//console.log('Project Title Text:', projectTitle.textContent);

// Get and log inner HTML
//console.log('Project Title Inner HTML:', projectTitle.innerHTML);

// Get and log outer HTML
//console.log('Project Title Outer HTML:', projectTitle.outerHTML);

// Get and log classes
//console.log('Project Container Classes:', projectContainer.classList);


// Selecting the first h2 element
// console.log("=== Inspecting Elements ===");
// const firstHeading = document.querySelector('h2');

// console.log('Using console.log():', firstHeading);
// console.dir('Using console.dir():', firstHeading);


// Selecting a div with the class 'skill-item'
// console.log("=== Specific Selectors ===");
// const skillSection = document.querySelector('div.skill-item');
// console.log('Skill Section:', skillSection);

// Selecting an image inside a 'project-item'
// const projectImage = document.querySelector('.project-item img');
// console.log('First Project Image:', projectImage);

// Selecting the specific project by its ID
// const betaProject = document.querySelector('#portfolio-project-beta');
// console.log('Beta Project:', betaProject);


// console.log('=== Selecting All Element ==');
// const allProjectItems = document.querySelectorAll('.project-item');
// console.log('All project Items(NodeList): ', allProjectItems);
// You can access individual elements by index
// console.log('First Project Item:', allProjectItems[0]);
// console.log('Second Project Item:', allProjectItems[1]);


// console.log('===Selecting First Element==')
// const firstParagraph = document.querySelector('p');
// console.log('First Paragraph: ', firstParagraph);


// console.log("=== DOMContentLoaded Experiment ===") 

// function initializePortfolio(){
//     const mainHeading = document.querySelector('h1');
//     console.log('Main Heading(DOMContentLoaded): ', mainHeading);

// }

//Listen for the DOMContentLoaded event before running the function
// document.addEventListener('DOMContentLoaded', initializePortfolio);



//THE DOM TREE STRUCTURE
// DOM Exploration
// console.log("=== DOM Exploration ===");

//  Document information
// console.log("Document title:", document.title);
// console.log("Document URL:", window.location.href);

//  Browser information
// console.log("Browser width:", window.innerWidth);
// console.log("Browser height:", window.innerHeight);

//  Navigator information
// console.log("Browser:", navigator.userAgent);
// console.log("Platform:", navigator.platform);























// Closures
// function outer() {
//     let count = 0;

//     function inner () {
//         count++;
//         console.log(count);

//     }
//     return inner;
// }
// const counter = outer();
// counter();
// counter();
// counter();
// counter();


//Call-backs
// setTimeout(function () {
//   console.log("Portfolio loaded! Ready to showcase your projects.");
// }, 1000); // Runs after 1 second


//Arrow functions
// const  formatProjectTitle = (title) => {
//     return `project:  ${title}`;
// }
// console.log(formatProjectTitle("Arrow Portfolio"))


// Calling the function before it's defined
// console.log(formatProjectTitle("Portfolio Hoisting"));

// function formatProjectTitle(title) {
//   return `Project: ${title}`;
// }

//Ananymous functions
// const formatSkill = function(skill){
//     return `skill: ${skill}`;
// }

// console.log(formatSkill('JavaScript'))



// function calculateBill(){
//     const total = Math.round(100 * 1.13);
//     return total
// }
// const myTotal = calculateBill() 
// console.log(`Your total is $${myTotal}`);



/**
 * 
 * An object is a way to group related data together. Instead of having lots of 
 * separate variables, you can put them all in one object. This
 * makes the  code easier to manage and understand.
 */

// const project = {
//     title: "JS portfolio",
//     description: "A personal website to showcase my projects and skills.",
//     stars: 42,
//     featured: true
// };
// console.log(project.title);
// console.log(project.stars)
// console.log(typeof project)


