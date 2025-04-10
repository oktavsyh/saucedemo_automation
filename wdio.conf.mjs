import { join } from 'path';

export const config = {
    runner: 'local',
    specs: ['./features/**/*.feature'],
    maxInstances: 2,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [
                '--incognito',
                '--disable-blink-features=AutomationControlled',
                '--disable-features=PasswordManagerEnabled,AutofillServerCommunication',
                '--disable-save-password-bubble'
            ]
    }   
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'https://www.saucedemo.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'spec'
    ],
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        timeout: 60000,
    },
};