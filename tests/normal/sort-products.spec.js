//tests/normal/sort-products.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Inventory - Sorting', () => {
  test('Sort items by Price (low to high)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.sortProducts('Price (low to high)');

    //Validate sorting by checking first and last item price
    const prices = await page.$$eval('.inventory_item_price', els => els.map(el => parseFloat(el.textContent.replace('$',''))));
    expect(prices).toEqual(prices.slice().sort((a, b) => a - b));
  });
});
