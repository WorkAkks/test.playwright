import { test, expect, type Page } from '@playwright/test';

test.describe('Live Codding Solutions', () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test.afterAll(async () => {
    await page.close();
  });

  // Задание 1 было выполнено в beforeAll для подготовки состояния
  test('Task 1: Authorization', async () => {
    // Этот тест можно оставить пустым или добавить дополнительную проверку,
    // так как основная логика авторизации вынесена в beforeAll
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  // Задание 2: Добавление товара в корзину
  test('Task 2: Add item to cart', async () => {
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  // Задание 3: Проверка корзины
  test('Task 3: Check cart', async () => {
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

  // Задание 4: Оформление заказа
  test('Task 4: Checkout', async () => {
    await page.locator('[data-test="checkout"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    await page.locator('[data-test="firstName"]').fill('Test');
    await page.locator('[data-test="lastName"]').fill('User');
    await page.locator('[data-test="postalCode"]').fill('12345');
    await page.locator('[data-test="continue"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    await page.locator('[data-test="finish"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
  });
});
