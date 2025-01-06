//tests/smoke/cart-smoke.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');
const { CartPage } = require('../../pages/cartPage');

test.describe('Smoke - Cart', () => {
  test('Add item to cart and verify in cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addItemToCart('Sauce Labs Backpack');

    //Go to cart
    await page.click('.shopping_cart_link');
    await cartPage.verifyOnCartPage();

    const cartItems = await page.locator('.cart_item').count();
    expect(cartItems).toBe(1);
  });
});
