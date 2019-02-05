import { expect } from 'chai';
import { RegistrationPage } from './../pages';
import { CustomerFormBuilder } from '../src/customerFormBuilder';

describe ('Sign Up module', () => {

	let registrationPage: RegistrationPage;

	before(() => {
		registrationPage = new RegistrationPage();
		registrationPage.openPage();
	});

	it ('should register new user', () => {

		registrationPage.fillRegistrationForm(new CustomerFormBuilder().build());
		registrationPage.submitRegistrationForm();
		expect($(registrationPage.success).isVisible()).to.be.true;
	});
});
