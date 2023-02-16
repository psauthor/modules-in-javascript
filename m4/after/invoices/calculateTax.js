const { round } = require("lodash");

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

module.exports.calculateTax = calculateTax;
module.exports.highRate = highRate;
module.exports.lowRate = lowRate;