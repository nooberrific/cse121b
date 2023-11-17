/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
};

function addNumbers (){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    
    document.querySelector('#sum').value = add(addNumber1, addNumber2);

}


document.querySelector('#addNumbers').addEventListener('click', addNumbers) ;  


/* Function Expression - Subtract Numbers */

function subtract (number1, number2) {
    return number1 - number2;
};

function subtractNumbers (){

    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtract1, subtract2);

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers) ;


/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {

    let multiply1 = Number(document.getElementById('factor1').value);
    let multiply2 = Number(document.getElementById('factor2').value);

    document.querySelector('#product').value = multiply(multiply1, multiply2);
    };


document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {

    let divide1 = Number(document.getElementById('dividend').value);
    let divide2 = Number(document.getElementById('divisor').value);

    document.querySelector('#quotient').value = divide(divide1, divide2);
    };


document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', calculateTotal)

function calculateTotal() {
    const subtotalInput = document.getElementById('subtotal');
    const subtotal =  Number(subtotalInput.value);

    const memberCheck = document.getElementById('member')
    const addDiscount = memberCheck.checked;

    let totalAmount;

    if (addDiscount) {
        const discountMultiply = .85
        totalAmount = subtotal * discountMultiply;

    }   
    else {
    totalAmount = subtotal;
    }
    document.getElementById('total').textContent = totalAmount.toFixed(2);
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').textContent = numbersArray.join(',');

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.getElementById('sumOfArray').textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.getElementById('multiplied').textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
numbersArray = document.getElementById('sumOfMultiplied').textContent = numbersArray.map(number => number * 2);
document.getElementById('sumOfMultiplied').textContent = numbersArray.reduce((sum, number) => sum + number);