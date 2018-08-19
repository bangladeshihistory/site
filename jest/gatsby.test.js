const server = require('./jest-puppeteer.config').server;
import puppeteer from 'puppeteer'

describe('Gatsby installation', () => {
  it('should have a #___gatsby element', () => {
    jest.setTimeout(30000);

    const browser = puppeteer.launch();
    const page = browser.newPage();

    await page.goto(server.baseUrl)
    await page.waitForSelector('#___gatsby')

    await browser.close();
  })
})
