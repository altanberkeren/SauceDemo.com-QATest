//pages/cartPage.js
class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItem = '.cart_item';
      this.checkoutButton = '[data-test="checkout"]';
    }
  
    async verifyOnCartPage() {
      await this.page.waitForSelector(this.cartItem);
    }
  
    async goToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  module.exports = { CartPage };
  