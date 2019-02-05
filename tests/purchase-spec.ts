import { expect } from 'chai';
import { MainPage, PopularProductPage, ProductDetailsPage, CheckoutPage } from './../pages';
import { CustomerFormBuilder } from '../src/customerFormBuilder';

describe('Purchase feature', () => {

	let mainPage: MainPage;
	let popularProductPage: PopularProductPage;
	let productDetails: ProductDetailsPage;
	let checkout: CheckoutPage;

	before(() => {
		mainPage = new MainPage();
		popularProductPage = new PopularProductPage();
		productDetails = new ProductDetailsPage();
		checkout = new CheckoutPage();
	});

	it('should purchase one item from main page', () => {

		mainPage.openPage();
		mainPage.selectProductTab('Popular Products');
		popularProductPage.selectProductName('Red Duck');
		productDetails.pageLoaded();
		productDetails.addProductToCart();
		productDetails.closeProductDetails();
		mainPage.pageLoaded();
		mainPage.checkCartIsNotEmpty();
		mainPage.openShoppingCart();
		expect($$(checkout.itemsList).length).to.be.equal(1);
		checkout.fillCheckoutForm(new CustomerFormBuilder().build());
		checkout.saveChanges();
		checkout.confirmOrder();
		expect($(checkout.orderSuccess).waitForVisible()).to.be.true;
	});
});
