import { expect } from "chai"

describe('Customer Service form', () => {

	before(() => {
		browser.url('/customer-service-s-0');
		browser.pause(1000);
	});

	it('should send Customer Service request', () => {

		const nameFieldInput = $('form[name="contact_form"] [name="name"]');
		const emailFieldInput = $('form[name="contact_form"] [name="email"]');
		const subjectFieldInput = $('form[name="contact_form"] [name="subject"]');
		const messageBoxInput = $('form[name="contact_form"] [name="message"]');
		const sendButton = $('.btn[name="send"]');
		const successMessage = $('.alert-success');

		nameFieldInput.setValue('Andrey_01');
		emailFieldInput.setValue('i@i.ua');
		subjectFieldInput.setValue('StartIT Help');
		messageBoxInput.setValue('StartIT another Help');
		sendButton.click();
		expect(successMessage.isVisible()).to.be.true;
	});
});
