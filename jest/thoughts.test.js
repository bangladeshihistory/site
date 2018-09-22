const server = require('./jest-puppeteer.config').server
jest.setTimeout(30000)
const puppeteer = require('puppeteer')

describe('Thoughts | http://thoughts.metaterran.com', () => {
  it('should have a #mainNav element', async (done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(server.baseUrl)
    await page.waitForSelector('#mainNav')
    await browser.close()
    done()
  })
  it('should have a #siteContent element', async (done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(server.baseUrl)
    await page.waitForSelector('#siteContent')
    await browser.close()
    done()
  })
  it('should have a #featured element', async (done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(server.baseUrl)
    await page.waitForSelector('#featured')
    await browser.close()
    done()
  });
  it('should have a #spotlight element', async (done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(server.baseUrl)
    await page.waitForSelector('#spotlight')
    await browser.close()
    done()
  });
  it('should have a #postsList element', async (done) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(server.baseUrl)
    await page.waitForSelector('#postsList')
    await browser.close()
    done()
  });
})
