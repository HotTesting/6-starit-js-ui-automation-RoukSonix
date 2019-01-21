import { expect } from "chai"

describe('Customer Service form', () => {

	beforeEach(() => {
		browser.url('/customer-service-s-0');
		browser.pause(1000);
	});

	it('should send Customer Service request', () => {

		const nameField = $('.form-control[name="name"]');
		const emailField = $('.form-control[name="email"]:not([placeholder="Email Address"])');
		const subjectField = $('.form-control[name="subject"]');
		const messageField = $('.form-control[name="message"]');
		const sendButton = $('.btn[name="send"]');
		const successMessage = $('.alert-success');

		nameField.setValue('Andrey_01');
		emailField.setValue('i@i.ua');
		subjectField.setValue('StartIT Help');
		messageField.setValue('StartIT another Help');
		sendButton.click();
		expect(successMessage.isVisible()).to.be.true;
	});
});
