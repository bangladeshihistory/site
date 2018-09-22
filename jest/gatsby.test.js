const server = require('./jest-puppeteer.config').server;
jest.setTimeout(30000)
const puppeteer = require('puppeteer')

describe('Gatsby installation', () => {
  it('should have a #___gatsby element', async (done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(server.baseUrl)
    await page.waitForSelector('#___gatsby')
    await browser.close()
    done()
  })
})
