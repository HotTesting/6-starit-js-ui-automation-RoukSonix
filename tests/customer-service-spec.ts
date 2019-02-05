import { expect } from 'chai'
import { CustomerServicePage } from './../pages';
import { CustomerFormBuilder } from '../src/customerFormBuilder';

describe('Customer Service form', () => {

	let customerServicePage: CustomerServicePage;

	before(() => {
		customerServicePage = new CustomerServicePage();
		customerServicePage.openPage();
	});

	it('should send Customer Service request', () => {

		customerServicePage.fillCustomerServiceForm(new CustomerFormBuilder().build());
		customerServicePage.submitForm();
		expect($(customerServicePage.successMessage).isVisible()).to.be.true;
	});
});
