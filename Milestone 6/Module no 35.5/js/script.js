const addProduct = () => {
  const productField1 = document.getElementById("product-name");
  const product = productField1.value;

  const productField2 = document.getElementById("product-quantity");
  const quantity = productField2.value;

  productField1.value = "";
  productField2.value = "";

  console.log(product, quantity);
  displayOnUl(product,quantity);
  saveProductToLocalStorage(product,quantity);
};


const displayOnUl = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerHTML = `${product}: ${quantity}`
    ul.appendChild(li)
}


const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}


const saveProductToLocalStorage = (product, quantity) => {
 const cart = getStoredShoppingCart();
 cart[product] = quantity;
 const cartStringified = JSON.stringify(cart)
 localStorage.setItem('cart', cartStringified)
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product, quantity);
        displayOnUl(product,quantity)
        
    }
}

displayProductsFromLocalStorage();