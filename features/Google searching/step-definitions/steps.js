import { Given } from '@cucumber/cucumber';

Given('web browser is at the Google home page', async function() {
    await browser.url("/");
})
