//tests/smoke/checkout-smoke.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');
const { CartPage } = require('../../pages/cartPage');
const { CheckoutPage } = require('../../pages/checkoutPage');

test.describe('Smoke - Checkout', () => {
  test('Basic checkout flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    //Login and add item to cart
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    //Go to cart
    await page.click('.shopping_cart_link');
    await cartPage.verifyOnCartPage();
    await cartPage.goToCheckout();

    //Checkout
    await checkoutPage.fillCheckoutDetails('Altan Beyza', 'Abdullah', '064234');
    await checkoutPage.finishCheckout();
    await checkoutPage.verifyOrderComplete();

    expect(await page.locator('.complete-header').innerText()).toBe('Thank you for your order!');
  });
});
