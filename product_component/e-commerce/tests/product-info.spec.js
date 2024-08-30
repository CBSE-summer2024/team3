// tests/product-info.spec.js
import { test, expect } from '@playwright/test';

test.describe('Product Info Component', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should display product details correctly', async ({ page }) => {
        const productName = await page.locator('h2').textContent();
        expect(productName).toBe('Bell Nude Foundation');

        const price = await page.locator('.price').textContent();
        expect(price).toBe('50₪');

        const rating = await page.locator('.rating').textContent();
        expect(rating).toContain('⭐ 4.6 / 5.0');

        const description = await page.locator('.description').textContent();
        expect(description).toBe(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`);
    });

    test('should add product to cart', async ({ page }) => {
        await page.click('.add-to-cart');
    });

    test('should add product to wishlist', async ({ page }) => {
        await page.click('.add-to-wishlist');
    });
});
