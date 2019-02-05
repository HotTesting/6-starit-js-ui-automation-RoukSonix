export class BasePage {

	public openPage() {
		throw new Error("Not implemented!");
	}

	public randomValue () {
			return Math.random().toString(10);
	}

}

export interface ICustomerForm {
	firstName: string;
	lastName?: string;
	address1?: string;
	address2?: string;
	city?: string;
	countryCode?: string;
	email?: string;
	subject?: string;
	message?: string;
	phone?: string;
	postalCode?: string;
	password?: string;
}
