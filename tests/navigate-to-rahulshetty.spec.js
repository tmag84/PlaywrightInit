const { test, expect } = require('@playwright/test');

test('Navigate to Rahul Shetty Academy', async ({ page }) => {
  // Go to the website
  await page.goto('https://rahulshettyacademy.com');

  // Verify the page title contains "Rahul Shetty Academy"
  await expect(page).toHaveTitle(/Rahul Shetty Academy/);
});