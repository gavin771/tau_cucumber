import { Given, When, Then } from '@wdio/cucumber-framework';
//import assert from "assert";
import gotoURL from '../../../support/actions/gotoURL';
import search from '../../../support/actions/search';
import verifyLinksContain from '../../../support/actions/verifyLinksContain';


Given('web browser is at the Google home page', async () => {
    await gotoURL("/");
});

When(/^The user enters "(.*)" into the search bar$/, async (keyword) => {
    //Click on agreement
    //await browser.execute(() => document.querySelector("#L2AGLb > div").click());
    //const ggl_agree = await $('//*[@id="L2AGLb"]/div');
    //await ggl_agree.click();
    //console.log(await browser.getWindowHandles());
await search(keyword, $('//*[@id="L2AGLb"]/div'), $('.gLFyf.gsfi'), $('.aajZCb .gNO89b'));
});

Then(/^Links related to "(.*)" are shown on the results page$/, async keyword => {
    const links = await $$('.GyAeWb .LC20lb');
    await verifyLinksContain(await links, await keyword);
    });
