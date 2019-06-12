const assert = require('assert')
const retail = require('./retail.js');
console.log(indentifyUser)


it('should return true', () => {
  const employee = retail.indentifyUser('employee');
  assert.equal(employee.getInvoice(1000), 665)
})
it('should return true', () => {
  const affiliate = retail.indentifyUser('affiliate');
  assert.equal(affiliate.getInvoice(1000), 855)
})
it('should return true', () => {
  const oldCustomer = retail.indentifyUser('oldCustomer');
  assert.equal(oldCustomer.getInvoice(1000), 905)
})
it('should return true', () => {
  const customer = retail.indentifyUser();
  assert.equal(customer.getInvoice(1000), 950)
})

