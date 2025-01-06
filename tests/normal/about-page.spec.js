//tests/normal/about-page.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');
const { InventoryPage } = require('../../pages/inventoryPage');

test.describe('Navigation - About Page', () => {
  test('Navigate to About page from the menu', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.openMenu();
    await page.click('#about_sidebar_link');

    //The "About" link takes you to the Sauce Labs site
    await page.waitForLoadState('domcontentloaded');
    expect(await page.url()).toContain('saucelabs.com');

  });
});
