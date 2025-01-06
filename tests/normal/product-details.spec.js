//tests/normal/product-details.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Inventory - Product Details', () => {
  test('Open an item details page and verify details', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.openItemDetails('Sauce Labs Backpack');

    const title = await page.innerText('.inventory_details_name');
    expect(title).toBe('Sauce Labs Backpack');
  });
});
