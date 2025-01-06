//tests/normal/checkout-flow.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');
const { CartPage } = require('../../pages/cartPage');
const { CheckoutPage } = require('../../pages/checkoutPage');

test.describe('Checkout - Full Flow', () => {
  test('Add two items, checkout, and verify completion', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');

    //Go to cart
    await page.click('.shopping_cart_link');
    await cartPage.verifyOnCartPage();

    //Checkout
    await cartPage.goToCheckout();
    await checkoutPage.fillCheckoutDetails('Altan Beyza', 'Abdullah', '064234');
    await checkoutPage.finishCheckout();

    await checkoutPage.verifyOrderComplete();
    expect(await page.locator('.complete-header').innerText()).toBe('Hvala ti za kupovinu!');
  });
});
