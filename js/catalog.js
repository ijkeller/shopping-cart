/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i = 0; i < Product.allProducts.length; i++) {
    let optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl)

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  document.querySelectorAll('option');
  for (let i = 0; i < Product.allProducts.length; i++) {
    const selectElement = document.getElementById('items');
    if (selectElement.value == Product.allProducts[i].name) {
      let productName = Product.allProducts[i].name;
      return productName;
    }
  }
  // TODO: get the quantity
  let quantity = document.getElementById('quantity');
  let quantityNum = Number(quantity.value)
  // TODO: using those, add one item to the Cart
  Cart.prototype.addItem(productName, quantityNum);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCount = 0;
  for(let i = 0; i < Cart.items.length; i++) {
    itemCount += Cart.items[i].quantity;
  }
  let itemCountEl = document.getElementById('itemCount');
  itemCountEl.textContent = `${itemCount} items in your cart.`
 }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let itemsEl = document.getElementById('items');
  let quantityEl = document.getElementById('quantity');
  let itemsValue = itemsEl.value;
  let quantityValue = Number(quantityEl.value);
  // TODO: Add a new element to the cartContents div with that information
  let cartContents = document.getElementById('cartContents');
  let newCartItem = document.createElement('h3');
  newCartItem.textContent = `${quantityValue} ${itemsValue}`;
  cartContents.appendChild(newCartItem);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
