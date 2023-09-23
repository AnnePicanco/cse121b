/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Anne Mariáh Leal Picanço";
let currentYear = "2023";
let profilePicture = "images/profile.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `profile image of ${fullname}`);

/* Step 5 - Array */

let favFoods = ["Pasta", "Pizza", "Doce de Leite",  "Birthday Cake", "Mousse of Maracujá"];
foodElement.innerHTML = favFoods;
let oneMoreFood = "Brazilian CheeseBurger";
favFoods.push(oneMoreFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
