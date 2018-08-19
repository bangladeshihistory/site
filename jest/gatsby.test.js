const server = require('./jest-puppeteer.config').server;
import puppeteer from 'puppeteer'

let browser
let page

describe('Gatsby installation', () => {
  it('should have a #___gatsby element', async () => {
    browser = await puppeteer.launch(
      {
        headless: true,
        slowMo: 100,
      }
    )
    page = await browser.newPage()

    await page.goto(server.baseUrl)
    await page.waitForSelector('#___gatsby')
    await browser.close();
  })
})
