let receiptItems = [];

async function fetchFoods() {
    try {
        const response = await fetch('food.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        displayFoods(products);
    } catch (error) {
        console.error('Error fetching and displaying foods:', error.message);
    }
}

function displayFoods(products) {
    const foodList = document.getElementById('foodList');

    foodList.innerHTML = '';

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <label>${product.name} - $${product.price.toFixed(2)}</label>
            <input type="number" min="0" value="0" id="${product.id}">
            <button onclick="addItemToReceipt(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;

        foodList.appendChild(listItem);
    });
}

function addItemToReceipt(id, name, price) {
    const quantity = parseInt(document.getElementById(id).value);

    if (quantity > 0) {
        const existingItemIndex = receiptItems.findIndex(item => item.id === id);

        if (existingItemIndex !== -1) {
            receiptItems[existingItemIndex].quantity += quantity;
        } else {
            receiptItems.push({ id, name, price, quantity });
        }

        displayItemsInCart();
    }
}

function displayItemsInCart() {
    const itemsInCartElement = document.getElementById('itemsInCart');
    itemsInCartElement.innerHTML = '';

    receiptItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity}`;
        itemsInCartElement.appendChild(listItem);
    });
}

function calculateTotal() {
    const totalAmountElement = document.getElementById('totalAmount');
    const fridayCheckbox = document.getElementById('blackFridayCheckbox');
    const decemberCheckbox = document.getElementById('decemberCouponCheckbox');

    let totalAmount = receiptItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if (fridayCheckbox.checked) {
        totalAmount *= 0.95;
    }

    if (decemberCheckbox.checked) {
        totalAmount -= 5;
    }

    totalAmountElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
}

function clearReceipt() {
    receiptItems = [];
    displayItemsInCart();
    calculateTotal();
}

window.onload = fetchFoods;