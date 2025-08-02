

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


