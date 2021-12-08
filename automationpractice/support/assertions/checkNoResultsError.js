import catalog from "../../pom/Catalog"
import assert from "assert";

export default async () => {
    const noResultsErrorMessage = await catalog.noResultsErrorMessage.getText();

    assert(
        await noResultsErrorMessage
            .includes("No results were found for your search"),
        "No results error message was not found"
    );
};