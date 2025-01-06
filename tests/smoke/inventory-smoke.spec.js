//tests/smoke/inventory-smoke.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Smoke - Inventory', () => {
  test('Inventory page is accessible and items load', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.verifyOnInventoryPage();
    const itemCount = await page.locator('.inventory_item').count();
    expect(itemCount).toBeGreaterThan(0);
  });
});
