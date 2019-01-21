import { expect } from 'chai';

describe ('SignIn module', () => {

	beforeEach(() => {
		browser.url('/');
		browser.pause(1000);
	});

	it ('should login user', () => {

		const signImButtonSelector = $('.dropdown-toggle .fa.fa-user');
		const loginFieldSelector = $('.dropdown-menu .form-control[name="email"]');
		const passwordFieldSelector = $('.dropdown-menu .form-control[name="password"]');
		const submitSelector = $('.btn[type="submit"]');
		const successSelector = $('.alert-success');
		const login = 'i@yu.i';
		const password = '123';

		signImButtonSelector.click();
		browser.pause(500);
		loginFieldSelector.setValue(login);
		passwordFieldSelector.setValue(password);
		submitSelector.click();
		browser.pause(500);
		expect(successSelector.isVisible()).to.be.true;
	});
});
