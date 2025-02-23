const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Get absolute path to your HTML file
    const filePath = `file://${path.resolve(__dirname, 'index.html')}`;
    
    await page.goto(filePath, { waitUntil: 'networkidle2' });

    // Take a full-page screenshot
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    console.log('Screenshot saved as screenshot.png');

    await browser.close();
})();
