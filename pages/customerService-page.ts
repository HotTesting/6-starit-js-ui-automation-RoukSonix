import { BasePage, ICustomerForm } from './';

export class CustomerServicePage extends BasePage {

	public readonly nameField = 'form[name="contact_form"] [name="name"]';
	public readonly emailField = 'form[name="contact_form"] [name="email"]';
	public readonly subjectField = 'form[name="contact_form"] [name="subject"]';
	public readonly messageBox = 'form[name="contact_form"] [name="message"]';
	public readonly sendButton = '.btn[name="send"]';
	public readonly successMessage = '.alert-success';

	public openPage() {
		browser.url('/customer-service-s-0')
		$(this.nameField).waitForVisible();
		$(this.sendButton).waitForVisible();
	}

	private typeFirstName(name: string): any {
		$(this.nameField).waitForVisible();
		$(this.nameField).setValue(name);
	}

	private typeEmail(email: string): any {
		$(this.emailField).waitForVisible();
		$(this.emailField).setValue(email);
	}

	private typeSubject(subject: string): any {
		$(this.subjectField).waitForVisible();
		$(this.subjectField).setValue(subject);
	}

	private typeMessage(message: string): any {
		$(this.messageBox).waitForVisible();
		$(this.messageBox).setValue(message);
	}

	public submitForm() {
		$(this.sendButton).click();
		$(this.successMessage).waitForVisible();
	}

	public fillCustomerServiceForm(CustomerServiceForm: ICustomerForm): any {
		this.typeFirstName(CustomerServiceForm.firstName);
		this.typeEmail(CustomerServiceForm.email);
		this.typeSubject(CustomerServiceForm.subject);
		this.typeMessage(CustomerServiceForm.message);
	}
}
