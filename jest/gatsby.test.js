const server = require('./jest-puppeteer.config').server;

describe('Gatsby installation', () => {
  const puppeteer = require('puppeteer');

  it('should have a #___gatsby element', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(server.baseUrl);
    await page.waitForSelector('#___gatsby')

    await browser.close();
  });
})
