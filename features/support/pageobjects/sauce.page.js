class SaucePage {
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginBtn() { return $('#login-button'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }

    async login(user, pass) {
        await this.username.waitForDisplayed();
        await this.username.setValue(user);
        await browser.pause(1000);
        await this.password.setValue(pass);
        await browser.pause(1000);
        await this.loginBtn.click();
        await browser.pause(1000);
    }

    async addItemsToCart(count = 2) {
        const buttons = await $$('//button[contains(text(),"Add to cart")]');
        for (let i = 0; i < Math.min(count, buttons.length); i++) {
            await buttons[i].click();
            await browser.pause(1000);
        }
    }

    async openCart() {
        await $('#shopping_cart_container').click();
        await browser.pause(1000);
    }

    async getCartBadgeText() {
        const badge = await $('.shopping_cart_badge');
        await badge.waitForDisplayed();
        await browser.pause(1000);
        return await badge.getText();
    }

    async checkout() {
        const btn = await $('#checkout');
        await browser.execute((btn) => btn.scrollIntoView({ behavior: 'smooth', block: 'center' }), await $('#checkout'));
        await browser.pause(3000);
        await btn.click();
        await browser.pause(1000);
    }

    async fillPersonalInfo(first, last, postal) {
        await $('#first-name').setValue(first);
        await browser.pause(1000);
        await $('#last-name').setValue(last);
        await browser.pause(1000);
        await $('#postal-code').setValue(postal);
        await browser.pause(1000);
        await $('#continue').click();
        await browser.pause(1000);
    }

    async finishCheckout() {
        await $('#finish').click();
        await browser.pause(1000);
    }

    async getSuccessMessage() {
        const el = await $('.complete-header');
        await browser.pause(1000);
        return await el.getText();
    }
}

export default new SaucePage();