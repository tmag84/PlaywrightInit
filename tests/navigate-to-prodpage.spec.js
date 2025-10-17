const { test, expect } = require('@playwright/test');

test('Navigate to prod page', async ({ page }) => {
  // Go to the website
  await page.goto('prodazuredemoapp-ccbbd9aka8cnb8ey.canadacentral-01.azurewebsites.net/webapp');

  // Verify the page title contains "Rahul Shetty Academy"
  await expect(page).toHaveTitle(/Rahul Shetty Academy/);
});
