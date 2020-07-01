import catalog from "../../pages/Catalog";
import assert from "assert";

export default () => {
  const noResultErrorMessage = catalog.noResultsErrorMessage;
  assert(
    noResultErrorMessage
      .getText()
      .includes("No results were found for your search"),
    "No results error message was not found"
  );
};