let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;

    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart-items');
    cartElement.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - PKR${item.price}`;
        cartElement.appendChild(li);
    });

    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = cartTotal.toFixed(2);
}
