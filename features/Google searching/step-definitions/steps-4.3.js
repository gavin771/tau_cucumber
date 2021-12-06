import { Given, When, Then } from '@wdio/cucumber-framework';
import assert from "assert";

Given('web browser is at the Google home page', async () => {
    await browser.url("/");
});

When(/^The user enters "(.*)" into the search bar$/, async (keyword) => {
    //Click on agreement
    //await browser.execute(() => document.querySelector("#L2AGLb > div").click());
    const ggl_agree = await $('//*[@id="L2AGLb"]/div');
    await ggl_agree.click();
    // console.log(await browser.getWindowHandles());
    const elem1 = await $('.gLFyf.gsfi');
    await elem1.waitForDisplayed(5000);
    await elem1.click();
    await elem1.setValue(keyword);
    const elem2 = await $('.aajZCb .gNO89b');
    await elem2.waitForDisplayed(5000);
    await elem2.click();
});

Then(/^Links related to "(.*)" are shown on the results page$/, async (keyword) => {
    //try {
    const links = await $$('.GyAeWb .LC20lb')
    console.log("links.length: " + await links.length);
    //console.log(await links);
    console.log("links[0]: " + await links[0].getText());
    console.log("links[7]: " + await links[7].getText());
    
    for (const [i, link] of links.entries()) {
        const linkText = await link.getText();
        var str = await linkText.toLowerCase();
        console.log("link: " + await str);

        if (str) {
            console.log(i + " true");
            assert(
                await str.includes(keyword),
                `Link text does not include ${keyword}`
            );
        } else {
            console.log(i + " false");
        }
        //const linkText = await link.getText().ignoreCase;
        /* if (await linkText) {
            // console.log("linkText: " + await linkText);
            assert(
                await linkText.includes(keyword),
                `Link text does not include ${keyword}`
            );
        }; */
    };
    
/* const arr = [1, 2, 3];
    arr.forEach( el => {
        console.log(el);
    }); */

/*    function sumArgs() {
        console.log(arguments); // { 0: 5, 1: 6, length: 2 }
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
          sum += arguments[i];
        }
        return sum;
      }
      console.log(sumArgs(5, 6)); // => 11

      function outerFunction() {
        const outerArguments = arguments;
        return function innerFunction() {
          // outFunction arguments
          return outerArguments[0];
        };
      }
      
      console.log(outerFunction(1, 2));

      const sumArgs2 = (...numbers) => {
        console.log(numbers); // [5, 6]
        return numbers.reduce((sum, number) => sum + number);
      }
  console.log(sumArgs2(5, 6)); // => 11 */
    
      /* } catch (error) {
        console.log("Error: "  + error);
    } */
    });
