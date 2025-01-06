//tests/smoke/logout-smoke.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Smoke - Logout', () => {
  test('Logout from inventory page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.verifyOnInventoryPage();

    await inventoryPage.openMenu();
    await inventoryPage.logout();

    expect(await page.url()).toContain('saucedemo.com');
    const loginButtonVisible = await page.isVisible('#login-button');
    expect(loginButtonVisible).toBe(true);
  });
});
