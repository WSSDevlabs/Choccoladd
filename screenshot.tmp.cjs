const { chromium } = require("playwright");

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  const shots = [
    { url: "http://localhost:3000/", file: "home.png", waitFor: "text=Pure Cacao" },
    { url: "http://localhost:3000/all-products", file: "all-products.png", waitFor: "text=All Products" },
    { url: "http://localhost:3000/products/80pct-cocoa-chocolate-praline", file: "product-detail.png", waitFor: "text=80% Cocoa Chocolate Praline" },
  ];

  for (const s of shots) {
    await page.goto(s.url, { waitUntil: "networkidle" });
    await page.waitForSelector(s.waitFor.replace("text=", "text="), { timeout: 10000 }).catch(() => {});
    await page.waitForTimeout(800);

    // Scroll through the whole page to trigger whileInView animations before capturing
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0; y < height; y += 400) {
      await page.evaluate((y) => window.scrollTo(0, y), y);
      await page.waitForTimeout(120);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);

    await page.screenshot({ path: `C:/Users/rxzal/AppData/Local/Temp/claude/d--CHOCCOLADD/8abf0564-4ac7-4683-a92c-cfc7a1257d7a/scratchpad/${s.file}`, fullPage: true });
    console.log("captured", s.file);
  }

  console.log("CONSOLE_ERRORS:", JSON.stringify(errors));
  await browser.close();
}

run();
