import {test, expect} from '@playwright/test';

test.describe('Smoke Infrastructure Test', () => {

    test('should load the homepage', async ({page}) => {
        await page.goto('https://vikunja.io');
        await expect(page).toHaveTitle(/Vikunja/);
    });

});