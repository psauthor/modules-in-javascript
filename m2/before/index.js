// Rounds to two digits
function roundMoney(value) {
  return Math.round(value * 100) / 100; // round to 2 places
}

// Tax Rates
const lowRate = .05;
const highRate = .095;

// Calculates taxes based on price
function calcuateTax(totalPrice) {
  let taxRate = 0;
  
  if (totalPrice >= 10 && totalPrice < 100) {
    taxRate = lowRate;
  } else {
    taxRate = highRate;
  }

  const preTax = roundMoney(totalPrice);
  const postTax = roundMoney((preTax * taxRate) + preTax);

  return {
    preTax,
    postTax,
    taxRate
  };
}

// Create ten examples and use the 
// calc function
for(let x = 0; x < 10; ++x) {
  const invoiceTotal = Math.random() * 1000;
  const { postTax, taxRate } = calcuateTax(invoiceTotal); 
  console.log(`Total: $${roundMoney(invoiceTotal)} X ${taxRate} =  $${postTax}`);
}
