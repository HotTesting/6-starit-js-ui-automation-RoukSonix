import { expect } from 'chai';

describe ('Sign Up module', () => {

	before(() => {
		browser.url('/create_account');
		browser.pause(1000);
	});

	it ('should register new user', () => {

		const randomValue = Math.random().toString(10)

		const firstNameFieldInput = $('.form-control[name="firstname"]');
		const lastNameFieldInput = $('.form-control[name="lastname"]');
		const country_codeFieldInput = $('.form-control[name="country_code"]');
		const emailFieldInput = $('.col-md-6 .form-control[name="email"]');
		const passwordFieldInput = $('.col-md-6 .form-control[name="password"]');
		const confirmed_passwordFieldInput = $('.form-control[name="confirmed_password"]');
		const createAccountButtonInput = $('.btn[name="create_account"]');
		const successInput = $('.alert-success');

		firstNameFieldInput.setValue(`${randomValue} Andrey_01`);
		lastNameFieldInput.setValue(`${randomValue} Lazarev_01`);
		country_codeFieldInput.selectByValue('US');
		emailFieldInput.setValue(`${randomValue}rsxtest@r.ua`);
		passwordFieldInput.setValue('12345');
		confirmed_passwordFieldInput.setValue('12345');
		createAccountButtonInput.click();
		browser.pause(1000);
		expect(successInput.isVisible()).to.be.true;
	});
});
