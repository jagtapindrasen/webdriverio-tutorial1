const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
import allureReporter from '@wdio/allure-reporter'


describe('My Login application1', () => {
    it('should login with valid credentials11', async () => {
        await LoginPage.open();
        allureReporter.addFeature("Open brwoser default wala example Ind");

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should open a new tab11', async () => {
        await browser.url('https://google.com')
        console.log(await browser.getTitle()) // outputs: "Google"
    
        await browser.newWindow('https://webdriver.io')
        console.log(await browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle()) // outputs: "Google"
    });
});

// describe('My Login application', () => {
//     it('should login with valid credentials', () => {
//         browser.url('https://webdriver.io/');

//         expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
//     });
// });


