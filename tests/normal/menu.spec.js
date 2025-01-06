//tests/normal/menu.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Menu Tests', () => {
  test('Open menu and verify menu items', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    //1. Navigate & Login
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.verifyOnInventoryPage();

    //2. Click the burger menu button (#react-burger-menu-btn)
    await page.click('#react-burger-menu-btn');

    //3. Wait for the menu item list to appear
    await page.waitForSelector('.bm-item-list');

    //The sidebar menu typically has these items with uppercase text:
    //"ALL ITEMS", "ABOUT", "LOGOUT", "RESET APP STATE"
    const menuItems = ['All Items', 'About', 'Logout', 'Reset App State'];

    //4. Check each menu item for visibility
    for (const item of menuItems) {
      const locator = page.locator('.bm-item-list a').filter({ hasText: item });
      await expect(locator).toBeVisible();
    }
  });
});
