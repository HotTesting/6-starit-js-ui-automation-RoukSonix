import { BasePage, ICustomerForm } from './';

export class RegistrationPage extends BasePage {

	public readonly firstNameField = '.form-control[name="firstname"]';
	public readonly lastNameField = '.form-control[name="lastname"]';
	public readonly country_codeField = '.form-control[name="country_code"]';
	public readonly emailField = '.col-md-6 .form-control[name="email"]';
	public readonly passwordField = '.col-md-6 .form-control[name="password"]';
	public readonly confirmed_passwordField = '.form-control[name="confirmed_password"]';
	public readonly createAccountButton = '.btn[name="create_account"]';
	public readonly success = '.alert-success';

	public openPage() {
		browser.url('/create_account');
		this.pageLoaded();
	}

	public pageLoaded() {
		$(this.firstNameField).waitForVisible();
		$(this.createAccountButton).waitForVisible();
	}

	public typeFirstName(Name: string): any {
		$(this.firstNameField).waitForVisible();
		$(this.firstNameField).setValue(Name);
	}

	public typeLastName(lastName: string): any {
		$(this.lastNameField).waitForVisible();
		$(this.lastNameField).setValue(lastName);
	}

	public typeCountryCode(code: string): any {
		$(this.country_codeField).waitForVisible();
		$(this.country_codeField).selectByValue(code);
	}

	public typeEmail(email: string): any {
		$(this.emailField).waitForVisible();
		$(this.emailField).setValue(email);
	}

	public typePassword(password: string): any {
		$(this.passwordField).waitForVisible();
		$(this.passwordField).setValue(password);
	}

	public typeConfirmPassword(confPassword: string): any {
		$(this.confirmed_passwordField).waitForVisible();
		$(this.confirmed_passwordField).setValue(confPassword);
	}

	public submitRegistrationForm() {
		$(this.createAccountButton).waitForVisible();
		$(this.createAccountButton).click();
		$(this.success).waitForVisible();
	}

	public fillRegistrationForm(RegistrationForm: ICustomerForm): any {
		this.typeFirstName(RegistrationForm.firstName);
		this.typeLastName(RegistrationForm.lastName);
		this.typeCountryCode(RegistrationForm.countryCode);
		this.typeEmail(RegistrationForm.email);
		this.typePassword(RegistrationForm.password);
		this.typeConfirmPassword(RegistrationForm.password);
	}
}
