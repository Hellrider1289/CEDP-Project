let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });
    document.getElementById('total').innerText = total.toFixed(2);
}

function applyPromoCode() {
    const promoCode = document.getElementById('promoCode').value;
    let discount = 0;

    if (promoCode === 'SAVE10') {
        discount = 10;
    } else if (promoCode === 'SAVE20') {
        discount = 20;
    } else {
        alert('Invalid promo code');
        return;
    }

    total -= discount;
    if (total < 0) total = 0; // Prevent negative total
    updateCart();
    showMessageBox(`Promo code applied! You saved $${discount}.`);
}

function showMessageBox(message) {
    document.getElementById('messageText').innerText = message;
    document.getElementById('messageBox').style.display = 'block';
}

function closeMessageBox() {
    document.getElementById('messageBox').style.display = 'none';
}
