//tests/normal/cart-actions.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Cart - Add/Remove', () => {
  test('Add and remove item in inventory list', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addItemToCart('Sauce Labs Bolt T-Shirt');
    let cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');

    await inventoryPage.removeItemFromCart('Sauce Labs Bolt T-Shirt');
    cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('0');
  });
});
