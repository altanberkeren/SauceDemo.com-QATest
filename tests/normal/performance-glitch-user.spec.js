//tests/normal/performance-glitch-user.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Performance Glitch User Login', () => {
  test('Login with performance_glitch_user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('performance_glitch_user', 'secret_sauce');

    //Might have a delay in loading, but eventually we should see the inventory page
    await inventoryPage.verifyOnInventoryPage();

    const itemCount = await page.locator('.inventory_item').count();
    expect(itemCount).toBeGreaterThan(0);
  });
});

