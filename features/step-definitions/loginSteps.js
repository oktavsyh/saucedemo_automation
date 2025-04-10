import { Given, When, Then } from '@wdio/cucumber-framework';
import SaucePage from '../support/pageobjects/sauce.page.js';
import { expect } from 'chai';

Given('user opens the SauceDemo site', async () => {
    await SaucePage.open();
});

When('user logs in with standard credentials', async () => {
    await SaucePage.login('standard_user', 'secret_sauce');
});

When('user adds two items to the cart', async () => {
    await SaucePage.addItemsToCart(2);
});

When('user opens the shopping cart', async () => {
    await SaucePage.openCart();
});

Then('the cart badge should display {string}', async (expected) => {
    const text = await SaucePage.getCartBadgeText();
    expect(text).to.equal(expected);
});

When('user proceeds to checkout', async () => {
    await SaucePage.checkout();
});

When('user fills out personal info', async () => {
    await SaucePage.fillPersonalInfo('Okta', 'Viansyah', '16610');
});

When('user completes the checkout', async () => {
    await SaucePage.finishCheckout();
});

Then('the thank you message should appear', async () => {
    const message = await SaucePage.getSuccessMessage();
    expect(message).to.contain('Thank you for your order!');
});