//tests/normal/login-invalid.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

test.describe('Login - Invalid', () => {
  test('Should display an error for incorrect credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('AminaSeferagic', 'Happy2025');

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Username and password do not match');
  });
});
