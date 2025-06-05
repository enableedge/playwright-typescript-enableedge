import { test, expect } from '@playwright/test';
import axios from 'axios';

test.describe('API Tests', () => {
    const BASE_URL = 'https://www.automationexercise.com/api';

    test('should get all products', async () => {
        const response = await axios.get(`${BASE_URL}/getProductsList`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.products)).toBe(true);
    });

    test('should search products by name', async () => {
        const productName = 'Summer';
        const response = await axios.get(`${BASE_URL}/searchProduct`, {
            params: { search_product: productName }
        });
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.products)).toBe(true);
    });

    test('should add product to cart', async () => {
        const response = await axios.post(`${BASE_URL}/addToCart`, {
            product_id: '1',
            quantity: '1'
        });
        expect(response.status).toBe(200);
        expect(response.data.status).toBe('success');
    });

    test('should delete product from cart', async () => {
        const response = await axios.post(`${BASE_URL}/deleteProduct`, {
            product_id: '1'
        });
        expect(response.status).toBe(200);
        expect(response.data.status).toBe('success');
    });

    test('should get cart details', async () => {
        const response = await axios.get(`${BASE_URL}/getCart`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.cart)).toBe(true);
    });

    test('should get categories', async () => {
        const response = await axios.get(`${BASE_URL}/getCategories`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.categories)).toBe(true);
    });

    test('should get brands', async () => {
        const response = await axios.get(`${BASE_URL}/getBrands`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.data.brands)).toBe(true);
    });

    test('should get product details', async () => {
        const response = await axios.get(`${BASE_URL}/getProduct`, {
            params: { id: '1' }
        });
        expect(response.status).toBe(200);
        expect(response.data.product).toBeDefined();
    });
});
