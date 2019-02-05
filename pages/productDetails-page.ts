export class ProductDetailsPage {

	public readonly productInfo = '#box-product';
	public readonly itemSize = 'select[name="options[Size]"]';
	public readonly quantity = '.input-group [name="quantity"]';
	public readonly addToCartBtn = 'button.btn-success';
	public readonly closeProductDetailPage = '.featherlight-close-icon';

	public pageLoaded() {
		$(this.addToCartBtn).waitForVisible();
	}

	public addProductToCart() {
		$(this.addToCartBtn).click();
	}

	public closeProductDetails() {
		$(this.closeProductDetailPage).click();
	}
}
