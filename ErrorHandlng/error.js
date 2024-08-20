// Task 1: Add Product to Cart Function
const cart = [];

function addToCart(name, price, quantity) {
  if (!name) {
    throw new Error("Product name is required.");
  }
  if (typeof price !== 'number' || price <= 0) {
    throw new Error("Invalid product price.");
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Invalid quantity.");
  }

  cart.push({ name, price, quantity });
  console.log(`${name} added to the cart successfully!`);
}

// Task 2: Checkout Function
function checkout() {
  // Check if the cart is empty
  if (cart.length === 0) {
    throw new Error("Cart is empty. Add items before checkout.");
  }

  // Simulate checkout process
  console.log("Proceeding to checkout...");
  console.log("Cart items:", cart);
}

try {
  addToCart("Laptop", 1200, 2); 
  addToCart("", 30, 1); 
  addToCart("Mouse", -15, 3); 
  addToCart("Keyboard", 50, "abc"); 
  checkout(); 
} catch (error) {
  console.error(error.message);
}

//Task 02 Authentication module
const login=(userName,password)=>{
    if(userName===""){
            throw new Error("Username is required");
    }else if(password===""){
            throw new Error("password is required");
    }
}
try{
    login("user123","password123");
    login("","password456");
    login("user456","");
    login("invalidUser","invalidPassword");
}catch(error){
        console.log(error.message);
}

//Task 03 : Payment processing Module
function processPayment(amount, cardNo, expirationDate) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error("Invalid payment amount.");
    }
    let sanitizedCardNo = "";
    for (let char of cardNo) {
      if (char !== '-') {
        sanitizedCardNo += char;
      }
    }
    if (sanitizedCardNo.length !== 16 || isNaN(Number(sanitizedCardNo))) {
      throw new Error("Invalid card number.");
    }
    let [month, year] = expirationDate.split('/').map(Number);
    if (!month || !year || month < 1 || month > 12) {
      throw new Error("Invalid expiration date.");
    }
    const today = new Date();
    const expDate = new Date(year + 2000, month - 1); 
    if (expDate <= today) {
      throw new Error("Invalid expiration date.");
    }
  
    console.log("Payment processed successfully!");
  }
  
  try {
    processPayment(50.25, "1234-5678-9012-3456", "12/25");
    processPayment(10, "invalidCardNumber", "05/22");
    processPayment(100.75, "9876-5432-1098-7654", "01/20");
  } catch (error) {
    console.log(error.message);
  }
  