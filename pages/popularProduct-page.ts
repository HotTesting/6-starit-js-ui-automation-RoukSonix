import { MainPage } from './../pages';

export class PopularProductPage extends MainPage {

	public readonly productName = '#box-popular-products .product[data-name="{productName}"]';

	public selectProductName(productName: string): void {
		const selectedProductLocator = this.productName.replace('{productName}', productName);
		browser.waitUntil(() => {
			return $(selectedProductLocator).isVisible()
		}, 5000, 'Product not found. Set correct product name or select another product')
		$(selectedProductLocator).click();
	}
}
