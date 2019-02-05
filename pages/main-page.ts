import { BasePage, CheckoutPage } from './';

export class MainPage extends BasePage {

	public readonly signImButton = '.dropdown-toggle .fa.fa-user';
	public readonly navigationTabs = '.nav.nav-tabs';
	public readonly campainProductTab = '.nav-tabs [href="#campaign-products"]'
	public readonly popularProductTab = '.nav-tabs [href="#popular-products"]'
	public readonly latestProductTab = '.nav-tabs [href="#latest-products"]'
	public readonly cartQuantity = '#cart .quantity';
	public readonly shoppingCart = '#cart';

	public getCheckoutPage(): CheckoutPage {
		return new CheckoutPage();
	}

	public openPage() {
		browser.url('/')
		$(this.signImButton).waitForVisible();
		$(this.navigationTabs).waitForVisible();
	}

	public pageLoaded() {
		$(this.signImButton).waitForVisible();
		$(this.shoppingCart).waitForVisible();
	}

	public openShoppingCart() {
		$(this.shoppingCart).waitForVisible();
		$(this.shoppingCart).click();
		$(this.getCheckoutPage().itemsList).waitForVisible();
	}

	public checkCartIsNotEmpty() {
		browser.waitUntil(() => {
			return $(this.cartQuantity).getText() != '0';
		}, 5000, 'The shopping cart is empty');
	}

	public selectProductTab(Tab: 'Campaign Products' | 'Popular Products' | 'Latest Products') {
		switch (Tab) {
			case 'Campaign Products':
				$(this.campainProductTab).click();
				break;
			case 'Popular Products':
				$(this.popularProductTab).click();
				break;
			case 'Latest Products':
				$(this.latestProductTab).click();
				break;
		}
	}
}
