import { expect } from 'chai';

describe ('Login section module', () => {

	beforeEach(() => {
		browser.url('/create_account');
		browser.pause(1000);
	});

	it ('should register new user', () => {

		function randomValue() {
			return Math.random().toString(10)
		}

		const firstNameFieldSelector = $('.form-control[name="firstname"]');
		const lastNameFieldSelector = $('.form-control[name="lastname"]');
		const country_codeFieldSelector = $('.form-control[name="country_code"]');
		const emailFieldSelector = $('.form-control[name="email"]:not([placeholder="Email Address"])');
		const passwordFieldSelector = $('.form-control[name="password"]:not([placeholder="Password"])');
		const confirmed_passwordFieldSelector = $('.form-control[name="confirmed_password"]');
		const createAccountButtonSelector = $('.btn[name="create_account"]');
		const successSelector = $('.alert-success');

		firstNameFieldSelector.setValue(randomValue() + 'Andrey_01');
		lastNameFieldSelector.setValue(randomValue() + 'Lazarev_01');
		country_codeFieldSelector.selectByValue('US');
		emailFieldSelector.setValue(randomValue() + 'i@i.ua');
		passwordFieldSelector.setValue('12345');
		confirmed_passwordFieldSelector.setValue('12345');
		createAccountButtonSelector.click();
		browser.pause(2000);
		expect(successSelector.isVisible()).to.be.true;
	});
});
