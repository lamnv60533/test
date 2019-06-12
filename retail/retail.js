class Customer {
	constructor(name) {
    	this.name = name;
  	}
  	calculator (amount) {
  		return amount - (Math.floor(amount/100)) * 5;
  	}
  	calculatorDiscount (amount) {
  		return amount;
  	}

  	getInvoice (amount) {
  		const amountAfterDiscount = this.calculatorDiscount(amount);
  		const total = this.calculator(amountAfterDiscount);
  		return total;
  	}
}

class Employee extends Customer {
	constructor(employee) {
		super();
  	}
  	calculatorDiscount (amount) {
  		return amount - amount * 30 / 100;
  	}
}
class Affiliate extends Customer {
	constructor(affiliate) {
		super();
  	}
  	calculatorDiscount (amount) {
  		return amount - amount * 10 / 100;
  	}
}
class OldCustomer extends Customer {
	constructor(oldCustomer) {
		super();
  	}
  	calculatorDiscount (amount) {
  		return amount - amount * 5 / 100;
  	}
}
indentifyUser = (type = 'customer') => {
	const indentifyUsers = {
		employee : new Employee(),
		affiliate : new Affiliate(),
		oldCustomer : new OldCustomer(),
		customer : new Customer(),
	}
	return indentifyUsers[type];
}

module.exports.indentifyUser = indentifyUser;
