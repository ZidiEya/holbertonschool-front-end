const stock = {
  macbook: 2,
  iphone: 4,
};

function processPayment(itemName) {
  stock[itemName.toLowerCase()]--;
  console.log(`Payment is being processed for item ${itemName}`);
}

function processError(itemName) {
  console.log(`No more ${itemName} in stock`);
  console.log('Payment is not being processed');
}

function processOrder(itemName, callbackPayment, callbackError) {
  const item = itemName.toLowerCase();

  console.log(`Verifying the stock of ${itemName}`);

  if (stock[item] === undefined) {
    console.log(`Item ${itemName} is not available`);
    return;
  }

  if (stock[item] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}

// Prompt user
const userInput = prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
if (userInput) {
  processOrder(userInput, processPayment, processError);
}
