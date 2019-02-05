import { BasePage, ICustomerForm } from './../pages';

export class CheckoutPage extends BasePage {

	public readonly itemsList = '.item';
	public readonly orderSuccess = '#box-order-success'
	public readonly firstName = 'input[name="firstname"]';
	public readonly lastName = 'input[name="lastname"]'
	public readonly phone = 'input[name="phone"]';
	public readonly email = 'input[name="email"';
	public readonly city = 'input[name="city"]';
	public readonly postcode = 'input[name="postcode"]';
	public readonly address2 = 'input[name="address2"]';
	public readonly address1 = 'input[name="address1"]';
	public readonly confirmButton = 'button[name="confirm_order"]';
	public readonly saveChangesButton = 'button[name="save_customer_details"]';

	public typePhone(phone: string): any {
		$(this.phone).waitForVisible();
		$(this.phone).setValue(phone);
	}

	public typeEmail(email: string): any {
		$(this.email).waitForVisible();
		$(this.email).setValue(email);
	}

	public typeCity(city: string): any {
		$(this.city).waitForVisible();
		$(this.city).setValue(city);
	}

	public typePostCode(postCode: string): any {
		$(this.postcode).waitForVisible();
		$(this.postcode).setValue(postCode);
	}

	public typeAddress2(address2: string): any {
		$(this.address2).waitForVisible();
		$(this.address2).setValue(address2);
	}

	public typeAddress1(address1: string): any {
		$(this.address1).waitForVisible();
		$(this.address1).setValue(address1);
	}

	public typeLastName(lastName: string): any {
		$(this.lastName).waitForVisible();
		$(this.lastName).setValue(lastName);
	}

	public typeFirstName(firstName: string): any {
		$(this.firstName).waitForVisible();
		$(this.firstName).setValue(firstName);
	}

	public confirmOrder(): any {
		browser.waitUntil(
			function () {
				return (
					browser.getAttribute('button[name="confirm_order"]', 'disabled') ==
					null
				);
			},
			5000,
			'Confirm order button should become enabled to click, make sure that all required fields are filled'
		);
		$(this.confirmButton).click();
	}

	public saveChanges(): any {
		browser.waitForEnabled(this.saveChangesButton, 5000);
		$(this.saveChangesButton).click();
	}

	public fillCheckoutForm(CheckoutForm: ICustomerForm): any {
		this.typeFirstName(CheckoutForm.firstName);
		this.typeLastName(CheckoutForm.lastName);
		this.typeAddress1(CheckoutForm.address1);
		this.typeAddress2(CheckoutForm.address2);
		this.typePostCode(CheckoutForm.postalCode);
		this.typeCity(CheckoutForm.city);
		this.typeEmail(CheckoutForm.email);
		this.typePhone(CheckoutForm.phone);
	}
}
