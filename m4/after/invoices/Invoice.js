const { round } = require("lodash");

class Invoice {

  subtotal = 0;
  taxRate = 0;
  tax = 0;
  total = 0;

  constructor(subtotal) {
    this.subtotal = round(subtotal, 2);
  }
}

module.exports.Invoice = Invoice;
