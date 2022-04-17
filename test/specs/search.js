//const waitForTextChange = require('../../utilities/helper');
//import { waitForTextChange } from '../utilities/helper';
import allureReporter from '@wdio/allure-reporter'


const { default: resources } = require("../resources");
const { waitForTextChange } = require("../utilities/helper");


describe("Ebay Product Search Allure Ind1", () => {
  it("should open the main url and verify the title11", async () => {
    await browser.url("https://www.ebay.com/");
    allureReporter.addFeature("Open brwoser Ind");
    await expect(browser).toHaveTitle(
      resources.homeTitle
    );
  });

  it("should search for a product and verify the search text value11", async () => {
    const searchinp = $("#gh-ac");
    const searchbtn = $("#gh-btn");
    allureReporter.addFeature("Search Ind");

    await searchinp.addValue("Laptop");
    await searchbtn.click();
    expect(searchinp).toHaveValue("Laptop");
  });

//   it("should redirect to a new page and verify the title", async () => {
//     await expect(browser).toHaveTitle("Laptop | eBay");
//   });

  it("should update the search category11", async () => {
    // await waitForTextChange(SearchPage.category, "PC Laptops & Netbooks", 10000);
    const cat= $('#gh-cat option:nth-child(1)');
    allureReporter.addFeature("Search category Ind");
    allureReporter.addSeverity("Critical");
    await browser.waitUntil(
        async () => (await cat.getText()) === "PC Laptops & Netbooks",
        {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        }
    );

    //or the below line
    await waitForTextChange(cat, "PC Laptops & Netbooks", 3000);
    await expect(cat).toHaveText("PC Laptops & Netbooks");
  });

  //   it("should open the main url and verify the title", async () => {
  //     await browser.url("http://automationpractice.com/index.php");

  //     const searchinp = $(".login");
  //     expect(searchinp).toBeDisplayed();
  //     const a= $(".login");
  //     await a.click();

  //     const e =$("#email");
  //     const p= $("#passwd");
  //     const s =$("#SubmitLogin");

  //     await e.setValue("ind@gmail.com");
  //     await p.setValue("ind@123");
  //     await s.click();

  //   });
});

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });
