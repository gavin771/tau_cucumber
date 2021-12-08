import { When } from '@wdio/cucumber-framework';
import search from "../../support/actions/search";

When(/^the user searches for "(.*)"$/, async (keyword) => {
    await search(keyword);
});