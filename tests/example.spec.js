// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://stage-tourism.780.ir/tourism");
  await page.getByRole("button", { name: "ورود/ ثبت نام" }).click();
  await page.locator('input[name="phoneNumber"]').click();
  await page.locator('input[name="phoneNumber"]').fill("09148918991");
  await page.getByRole("button", { name: "دریافت کد فعال سازی" }).click();
  await page.getByPlaceholder(" ").first().fill("1");
  await page.getByPlaceholder(" ").nth(1).fill("2");
  await page.getByPlaceholder(" ").nth(2).fill("3");
  await page.getByPlaceholder(" ").nth(3).fill("4");
  await page.getByPlaceholder("مبدا").click();
  await page.getByText("تهران فرودگاه بین‌المللی مهرآباد").click();
  await page.getByText("فرودگاه شهید هاشمی‌نژاد").click();
  await page.getByText("۳۰").nth(2).click();
  await page.getByRole("button", { name: "تایید" }).click();
  await page.getByRole("button", { name: "جستجوی سفر" }).click();
  await page.waitForTimeout(20000);


  await page.getByRole("button", { name: "کیشmc" }).click();

  
  // await page
  //   .locator("#accordion__heading-raa-139")
  //   .getByRole("button", { name: "انتخاب بلیط" })
  //   .click();
});
