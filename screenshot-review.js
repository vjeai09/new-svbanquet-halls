const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.svbanquethalls.com/';
const SCREENSHOT_DIR = path.join(__dirname, 'screenshots');

// Helper function for delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Create screenshots directory
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function takeScreenshots() {
  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // ============================================================
    // DESKTOP SCREENSHOTS
    // ============================================================
    console.log('\n📸 Taking DESKTOP screenshots...');
    await page.setViewport({ width: 1920, height: 1080 });

    // Homepage - Full page
    console.log('  → Homepage (full page)...');
    await page.goto(SITE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000); // Let animations settle
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '01-desktop-homepage-full.png'),
      fullPage: true
    });

    // Homepage - Above fold
    console.log('  → Homepage (above fold)...');
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, '02-desktop-homepage-hero.png'),
      fullPage: false
    });

    // Scroll to each section and screenshot
    const sections = [
      { id: '#venue-highlights', name: 'venue-highlights' },
      { id: '#about', name: 'about' },
      { id: '#services', name: 'services' },
      { id: '#gallery', name: 'gallery' },
      { id: '#testimonials', name: 'testimonials' },
      { id: '#pricing', name: 'pricing' },
      { id: '#faq', name: 'faq' },
      { id: '#contact', name: 'contact' }
    ];

    let sectionNum = 3;
    for (const section of sections) {
      try {
        console.log(`  → Section: ${section.name}...`);
        await page.evaluate((selector) => {
          const element = document.querySelector(selector);
          if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, section.id);
        await delay(1000);
        await page.screenshot({
          path: path.join(SCREENSHOT_DIR, `${String(sectionNum).padStart(2, '0')}-desktop-${section.name}.png`),
          fullPage: false
        });
        sectionNum++;
      } catch (err) {
        console.log(`    ⚠️  Section ${section.name} not found`);
      }
    }

    // Planning page
    console.log('  → /planning page...');
    try {
      await page.goto(SITE_URL + 'planning', { waitUntil: 'networkidle2', timeout: 15000 });
      await delay(1500);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${String(sectionNum).padStart(2, '0')}-desktop-planning.png`),
        fullPage: true
      });
      sectionNum++;
    } catch (err) {
      console.log('    ⚠️  Planning page failed to load');
    }

    // 404 Test
    console.log('  → 404 test (non-existent page)...');
    try {
      await page.goto(SITE_URL + 'this-page-does-not-exist-xyz', { waitUntil: 'networkidle2', timeout: 15000 });
      await delay(1500);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${String(sectionNum).padStart(2, '0')}-desktop-404-test.png`),
        fullPage: true
      });
      sectionNum++;
    } catch (err) {
      console.log('    ⚠️  404 page test failed');
    }

    // ============================================================
    // MOBILE SCREENSHOTS
    // ============================================================
    console.log('\n📱 Taking MOBILE screenshots...');
    await page.setViewport({ width: 375, height: 812 }); // iPhone X

    // Homepage mobile - full
    console.log('  → Homepage (mobile, full)...');
    await page.goto(SITE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
    await delay(2000);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `${String(sectionNum).padStart(2, '0')}-mobile-homepage-full.png`),
      fullPage: true
    });
    sectionNum++;

    // Homepage mobile - above fold
    console.log('  → Homepage (mobile, hero)...');
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `${String(sectionNum).padStart(2, '0')}-mobile-homepage-hero.png`),
      fullPage: false
    });
    sectionNum++;

    // Contact section mobile
    console.log('  → Contact section (mobile)...');
    try {
      await page.evaluate(() => {
        const element = document.querySelector('#contact');
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      await page.waitForTimeout(1000);
      await page.screenshot({
        path: path.join(SCREENSHOT_DIR, `${String(sectionNum).padStart(2, '0')}-mobile-contact.png`),
        fullPage: false
      });
    } catch (err) {
      console.log('    ⚠️  Contact section not found on mobile');
    }

    console.log('\n✅ Screenshots saved to:', SCREENSHOT_DIR);
    console.log(`📊 Total screenshots: ${fs.readdirSync(SCREENSHOT_DIR).length}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  } finally {
    await browser.close();
    console.log('🏁 Browser closed\n');
  }
}

// Run the script
takeScreenshots()
  .then(() => {
    console.log('✨ Screenshot review complete!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Failed:', error);
    process.exit(1);
  });
