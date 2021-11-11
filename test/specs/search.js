import SearchPage from "../pageobjects/search.page";
import {
  getGlobalConfigFromJson,
  getGlobalConfigFromTextFile,
  getGlobalConfigFromExcel,
} from "../resource/global.config";
import {
  getConfigFromJson,
  getConfigFromTextFile,
  getConfigFromExcel,
} from "../resource/search/search.config";

describe("Ebay Product Search", async () => {
  let searchConfig;
  let globalConfig;
  before(async () => {
    //From Excel
    globalConfig = getGlobalConfigFromExcel(); // getting global config
    searchConfig = getConfigFromExcel(); //// getting search config

    //From Json
    // globalConfig = getGlobalConfigFromJson(); // getting global config
    // searchConfig = getConfigFromJson(); //// getting search config

    //From Text
    // globalConfig = getGlobalConfigFromTextFile(); // getting global config
    // searchConfig = getConfigFromTextFile(); //// getting search config

    await SearchPage.open();
  });

  it("should open the main url and verify the title", async () => {
    await expect(browser).toHaveTitle(searchConfig.title);
  });

  it("should search for a product and verify the search text value", async () => {
    await SearchPage.searchInput.addValue(searchConfig.input);
    await SearchPage.searchButton.click();

    await expect(SearchPage.searchInput).toHaveValue(searchConfig.inputResult);
  });

  it("should redirect to new page and verify the title", async () => {
    expect(browser).toHaveTitle(searchConfig.redirectTitle);
  });

  it("should update the search category", async () => {
    expect(SearchPage.category).toHaveText(searchConfig.category);
  });
});
