// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const realPrice = parseFloat(price.innerHTML);
  const quantity = product.querySelector('input').value;
  const realQuantity = parseInt(quantity);
  const result = realPrice * quantity;
  let subtotal = product.querySelector('.subtotal span');
  return (subtotal.innerHTML = parseFloat(result));

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');

  for (let cartItem of allProducts) {
    updateSubtotal(cartItem);
  }

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
