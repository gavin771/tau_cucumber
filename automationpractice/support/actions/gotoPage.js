import home from "../../pom/Home";

export default async page => {
    switch (page) {
        case "Home":
            await browser.url(home.url);
            break;
        default:
            console.log(`Invalid Page ${page}`);
    }
}