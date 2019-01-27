import { BasePage } from "./base-page";

export class CustomerServicePage extends BasePage {

	public nameField()			{return browser.$('form[name="contact_form"] [name="name"]')}
	public emailField()			{return browser.$('form[name="contact_form"] [name="email"]')}
	public subjectField()		{return browser.$('form[name="contact_form"] [name="subject"]')}
	public messageBox()			{return browser.$('form[name="contact_form"] [name="message"]')}
	public sendButton()			{return browser.$('.btn[name="send"]')}
	public successMessage()		{return browser.$('.alert-success')}

	public openPageUrl() {
		browser.url('/customer-service-s-0')
		this.sendButton().waitForVisible(5000)
	}

	/*
	public waitForPageLoaded() {
		this.sendButton().waitForVisible(2000)
	}
	*/

}
