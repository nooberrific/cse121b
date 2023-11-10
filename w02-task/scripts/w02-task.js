/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Mickey Nelson';
let currentYear = '2023';
const profilePicture = 'images/Suit.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);




/* Step 5 - Array */
const favoriteFoods = ['Scrambled eggs', 'waffles', 'bacon', 'onion rings', 'avocado' ];

foodElement.innerHTML += `<br>${favoriteFoods}`;

const otherFood = "hamburger";
favoriteFoods.push(otherFood);

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();

foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();

foodElement.innerHTML += `<br>${favoriteFoods}`;