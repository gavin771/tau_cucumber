import { Given, When, Then } from '@wdio/cucumber-framework';
import gotoURL from '../support/actions/gotoURL';
import homePage from '../pages/Home';
import googleSearch from '../support/actions/search';
import verifyLinksContain from '../support/assertions/verifyLinksContain';

Given('web browser is at the Google home page', async () => {
    await gotoURL(homePage.url);
});

When(/^The user enters "(.*)" into the search bar$/, async (keyword) => {
    await googleSearch(keyword);
});

Then(/^Links related to "(.*)" are shown on the results page$/, async (keyword) => {
    await verifyLinksContain(keyword);
});
