//tests/normal/add-multiple-items.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Cart - Add multiple items', () => {
  test('Add multiple items without checking out', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    const productsToAdd = [
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
      'Test.allTheThings() T-Shirt (Red)'
    ];

    for (let item of productsToAdd) {
      await inventoryPage.addItemToCart(item);
    }

    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe(productsToAdd.length.toString());
  });
});
