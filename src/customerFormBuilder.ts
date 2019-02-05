import * as faker from 'faker';
import { ICustomerForm } from '../pages/base-page';

export class CustomerFormBuilder {


	/**
	 * Не знаю нахера мне тут overriden, но пусть пока будет
	 */

	private overriden = {

	}

	private default = {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		address1: faker.address.streetAddress(),
		address2: faker.address.streetAddress(),
		city: faker.address.city(),
		email: faker.internet.email(),
		subject: 'StartIT Help',
		message: 'StartIT another Help',
		postalCode:  faker.address.zipCode(),
		phone: faker.phone.phoneNumberFormat(),
		password: 'ЙЦУКЕН!QWERTY',
		countryCode: 'US',
	}

	build(): ICustomerForm {
		return Object.assign({}, this.default, this.overriden)
	}
}
