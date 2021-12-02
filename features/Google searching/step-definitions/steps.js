import { Given } from '@wdio/cucumber-framework';

Given("A web browser is at the Google home page", () => {
    browser.url("/");
})
