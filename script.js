
// Part 1: Variable declarations & conditionals

let userName = "Calvine";
let age = 20;
let isStudent = true;

// Conditional statement
if (isStudent && age >= 18) {
  console.log(`${userName} is an adult student.`);
} else {
  console.log(`${userName} is not an adult student.`);
}


// Part 2: Custom Functions


// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to the assignment demo.`;
}

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Part 3: Loop Examples


// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log(`For loop iteration: ${i}`);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log(`While loop count: ${counter}`);
  counter++;
}


// Part 4: DOM Interactions


// DOM Interaction 1: Button click to display greeting
document.getElementById("greetBtn").addEventListener("click", function () {
  document.getElementById("output").textContent = greetUser(userName);
});

// DOM Interaction 2: Button click to calculate sum
document.getElementById("sumBtn").addEventListener("click", function () {
  let result = addNumbers(5, 7);
  document.getElementById("output").textContent = `5 + 7 = ${result}`;
});

// DOM Interaction 3: Button click to display a list
document.getElementById("listBtn").addEventListener("click", function () {
  let fruits = ["Apple", "Banana", "Mango"];
  let listOutput = document.getElementById("listOutput");
  listOutput.innerHTML = ""; // clear previous list
  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    listOutput.appendChild(li);
  });
});
