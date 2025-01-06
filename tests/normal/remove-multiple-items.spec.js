//tests/normal/remove-multiple-items.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Cart - Remove multiple items', () => {
  test('Add items and then remove all', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    const products = [
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Sauce Labs Bolt T-Shirt'
    ];

    for (let item of products) {
      await inventoryPage.addItemToCart(item);
    }

    let cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe(products.length.toString());

    for (let item of products) {
      await inventoryPage.removeItemFromCart(item);
    }

    cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('0');
  });
});
