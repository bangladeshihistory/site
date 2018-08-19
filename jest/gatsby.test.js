const server = require('./jest-puppeteer.config').server;
import puppeteer from 'puppeteer'

describe('Gatsby installation', () => {
  it('should have a #___gatsby element', () => {
    jest.setTimeout(30000);

    const browser = puppeteer.launch();
    const page = browser.newPage();

    page.goto(server.baseUrl)
    page.waitForSelector('#___gatsby')

    browser.close();
  })
})
