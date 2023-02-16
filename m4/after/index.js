const { sumBy } = require("lodash");
const { calculateTax, Invoice } = require("./invoices/index.js");

// Create ten examples and use the
// calc function
const invoices = [];
for (let x = 0; x < 10; ++x) {
  invoices.push(new Invoice(Math.random() * 1000));
}

function formatNumber(num) {
  let prefix = " ";
  const formatted = num.toLocaleString("us-en", { minimumFractionDigits: 2})
  return prefix.repeat(8 - formatted.length) + formatted;
}

// Show them
invoices.forEach((invoice) => {
  if (calculateTax(invoice)) {
    console.log(`Total: $${formatNumber(invoice.subtotal)} X ${formatNumber(invoice.tax)}% = $${formatNumber(invoice.total)}`);
  } else {
    console.log("Failed to calculate tax");
  }
});

console.log(`Grand Total:                   $${formatNumber(sumBy(invoices, "total"))}`);


