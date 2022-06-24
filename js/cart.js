/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  if (tbody.length > 0) {
    tr.remove()
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.length; i++) {
    // TODO: Create a TR
    let tableRowEl = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    let deleteLink = document.createElement('td');
    deleteLink.textContent = 'X';
    let cartQuantity = document.createElement('td');
    cartQuantity.textContent = cart[i].quantity;
    let itemCell = document.createElement('td');
    itemCell.textContent = cart[i].item;
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tbody.appendChild(tableRowEl);
    tableRowEl.appendChild(deleteLink);
    tableRowEl.appendChild(cartQuantity);
    tableRowEl.appendChild(itemCell);
  }
}

function removeItemFromCart(event) {
  event.preventDefault()

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  for (let i = 0; i < images.length; i++) {

    if (e.target.item === cart[i].item) {
      cart[i].removeItem();
    }
  }
  // TODO: Save the cart back to local storage
  Cart.prototype.saveToLocalStorage.call();
  // TODO: Re-draw the cart table
  showCart()

}

// This will initialize the page and draw the cart on screen
renderCart();
