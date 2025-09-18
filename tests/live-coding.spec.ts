import { test, expect } from '@playwright/test';

test.describe('Live Codding Tasks', () => {

  // Задание 1: Авторизация
  // 1. Перейдите на страницу https://www.saucedemo.com/
  // 2. Введите "standard_user" в поле username
  // 3. Введите "secret_sauce" в поле password
  // 4. Кликните на кнопку login
  // 5. Проверьте что вы перешли на страницу https://www.saucedemo.com/inventory.html
  test('Task 1: Authorization', async ({ page }) => {
    // ваш код здесь
  });

  // Задание 2: Добавление товара в корзину
  // 1. Вы уже должны быть авторизованы (используйте state из предыдущего теста или авторизуйтесь заново)
  // 2. На странице inventory.html найдите товар с названием "Sauce Labs Backpack"
  // 3. Добавьте этот товар в корзину
  // 4. Проверьте, что иконка корзины в правом верхнем углу теперь показывает "1"
  test('Task 2: Add item to cart', async ({ page }) => {
    // ваш код здесь
  });

  // Задание 3: Проверка корзины
  // 1. Перейдите в корзину (клик по иконке корзины)
  // 2. Проверьте что вы на странице https://www.saucedemo.com/cart.html
  // 3. Проверьте, что в корзине есть товар "Sauce Labs Backpack"
  test('Task 3: Check cart', async ({ page }) => {
    // ваш код здесь
  });

  // Задание 4: Оформление заказа
  // 1. На странице корзины кликните на кнопку "Checkout"
  // 2. На странице https://www.saucedemo.com/checkout-step-one.html введите любые данные в поля First Name, Last Name, Postal Code
  // 3. Кликните на кнопку "Continue"
  // 4. На странице https://www.saucedemo.com/checkout-step-two.html проверьте что товар все еще "Sauce Labs Backpack"
  // 5. Кликните на кнопку "Finish"
  // 6. Проверьте что вы перешли на страницу https://www.saucedemo.com/checkout-complete.html
  // 7. Проверьте наличие текста "Thank you for your order!"
  test('Task 4: Checkout', async ({ page }) => {
    // ваш код здесь
  });

});
