const puppeteer = require('puppeteer');

function keywordCaliGrabber(keywordOption) {

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://leginfo.legislature.ca.gov/faces/billSearchClient.xhtml');
  // other actions...
  await page.type('#keyword', keywordOption);

  const [response] = await Promise.all([
    page.waitForNavigation(), // The promise resolves after navigation has finished
    await page.click('#attrSearch'), // Clicking the link will indirectly cause a navigation
  ]);

  await page.screenshot({path: 'screenshots/results.png', fullPage: true});

  await browser.close();
})();

}

keywordCaliGrabber('\"climate change\"')