import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
try {
  const page = await browser.newPage();

  await page.goto('https://bun.sh');
  await page.screenshot({ path: './screenshot.png' });
} finally {
  await browser.close();
}
