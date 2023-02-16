class Invoice {

  subtotal = 0;
  taxRate = 0;
  tax = 0;
  total = 0;

  constructor(subtotal) {
    this.subtotal = round(subtotal, 2);
  }
}

// Tax Rates
const lowRate = 0.05;
const highRate = 0.095;

// Calculates taxes based on price
function calculateTax(invoice) {
  try {
    if (invoice.subtotal >= 10 && invoice.subtotal < 100) {
      invoice.taxRate = lowRate;
    } else {
      invoice.taxRate = highRate;
    }

    invoice.tax = round(invoice.subtotal * invoice.taxRate, 2);
    invoice.total = round(invoice.subtotal + invoice.tax);

    return true;
  } catch (e) {
    throw e;
    return false;
  }
}

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


