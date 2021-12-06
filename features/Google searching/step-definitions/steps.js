import { Given, When, Then } from '@wdio/cucumber-framework';
import gotoURL from '../../../support/actions/gotoURL';
import search from '../../../support/actions/search';
import verifyLinksContain from '../../../support/actions/verifyLinksContain';

Given('web browser is at the Google home page', async () => {
    await gotoURL("/");
});

When(/^The user enters "(.*)" into the search bar$/, async (keyword) => {
    await search(keyword, $('//*[@id="L2AGLb"]/div'), $('.gLFyf.gsfi'), $('.aajZCb .gNO89b'));
});

Then(/^Links related to "(.*)" are shown on the results page$/, async (keyword) => {
    const links = await $$('.GyAeWb .LC20lb');
    await verifyLinksContain(links, keyword);
});
