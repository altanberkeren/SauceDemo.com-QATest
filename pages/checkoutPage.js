//pages/checkoutPage.js
class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.firstNameField = '[data-test="firstName"]';
      this.lastNameField = '[data-test="lastName"]';
      this.postalCodeField = '[data-test="postalCode"]';
      this.continueButton = '[data-test="continue"]';
      this.finishButton = '[data-test="finish"]';
      this.checkoutCompleteContainer = '.checkout_complete_container';
    }
  
    async fillCheckoutDetails(firstName, lastName, postalCode) {
      await this.page.fill(this.firstNameField, firstName);
      await this.page.fill(this.lastNameField, lastName);
      await this.page.fill(this.postalCodeField, postalCode);
      await this.page.click(this.continueButton);
    }
  
    async finishCheckout() {
      await this.page.click(this.finishButton);
    }
  
    async verifyOrderComplete() {
      await this.page.waitForSelector(this.checkoutCompleteContainer);
    }
  }
  
  module.exports = { CheckoutPage };
  