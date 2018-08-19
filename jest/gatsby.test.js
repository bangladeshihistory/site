const server = require('./jest-puppeteer.config').server;
import puppeteer from 'puppeteer'

jest.setTimeout(30000);

describe('Gatsby installation', () => {
  it('should have a #___gatsby element', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(server.baseUrl)
    await page.waitForSelector('#___gatsby')

    await browser.close();
  })
})
