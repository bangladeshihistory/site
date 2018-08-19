const server = require('./jest-puppeteer.config').server;
import puppeteer from 'puppeteer'

let browser
let page

describe('Gatsby installation', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch(
      {
        headless: false,
        slowMo: 100,
      }
    )
    page = await browser.newPage()
    await page.goto(server.baseUrl)
  })

  it('should have a #___gatsby element', async () => {
    await page.waitForSelector('#___gatsby')
    await browser.close();
  })
})
