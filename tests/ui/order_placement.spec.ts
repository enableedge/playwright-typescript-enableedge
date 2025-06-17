import { test, expect } from '@playwright/test';

test('E2E: Login, add Blue Top to cart, checkout, and verify payments page', async ({ page }) => {
  // 1. Navigate to the homepage
  await page.goto('https://www.automationexercise.com/');

  // 2. Click on "Signup / Login" link
  const signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
  await expect(signupLoginLink).toBeVisible();
  await signupLoginLink.click();

  // 3. Enter email and password, then click Login
  const emailInput = page.locator('input[data-qa="login-email"]');
  const passwordInput = page.locator('input[data-qa="login-password"]');
  const loginButton = page.locator('button[data-qa="login-button"]');

  await expect(emailInput).toBeVisible();
  await emailInput.fill('ulhas@enableedge.com');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill('ulhas@123');
  await loginButton.click();

  // 4. Click on "Products" link
  const productsLink = page.getByRole('link', { name: 'Products' });
  await expect(productsLink).toBeVisible();
  await productsLink.click();

  //5. Add Blue Top to cart 
  const blueTopCard = page.locator('.productinfo').filter({ hasText: 'Blue Top' });
  await blueTopCard.hover();
  await blueTopCard.getByText('Add to cart').click();

  //6. Navigate to cart
  await page.getByRole('link', { name: 'View Cart' }).click();

  // 7. Click on "Proceed To Checkout" button
  await page.getByText('Proceed To Checkout').click();

  // 8. Verify "Place Order" button visible
  const placeOrderBtn = page.getByText('Place Order');
  await expect(placeOrderBtn).toBeVisible();

  // 9. Add comment as "blue top comment"
 await page.locator('textarea[name="message"]').fill('blue top comment');

  // 10. Click on "Place Order" button to navigate to payments
  await placeOrderBtn.click();

  // 11. Verify user is on Payments page (by checking for payment form presence)
await expect(page).toHaveURL(/.*payment/);
  await expect(page.getByRole('heading', { name: 'Payment' })).toBeVisible();
});