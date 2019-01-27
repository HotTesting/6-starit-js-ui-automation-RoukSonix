import { expect } from "chai"
import { CustomerServicePage } from '../pages/customerService-page';

let customerServicePage: CustomerServicePage;
customerServicePage = new CustomerServicePage();

describe('Customer Service form', () => {

	before(() => {
		customerServicePage.openPageUrl();
	});

	it('should send Customer Service request', () => {

		customerServicePage.nameField().setValue('Andrey_01');
		customerServicePage.emailField().setValue('i@i.ua');
		customerServicePage.subjectField().setValue('StartIT Help');
		customerServicePage.messageBox().setValue('StartIT another Help');
		customerServicePage.sendButton().click();
		expect(customerServicePage.successMessage().isVisible()).to.be.true;

	});
});
