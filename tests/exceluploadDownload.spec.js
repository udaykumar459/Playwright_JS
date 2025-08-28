import {test,expect} from '@playwright/test';
const {ExcelUtils} = require('./utils/ExcelUtils');

test('Excel download and upload test', async({page})=>{

const searchText = 'Apple';
const updatePrice = "666";
await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
const downloadPromise = page.waitForEvent('download');
await page.getByRole('button',{name:'Download'}).click();
await downloadPromise;
const excelUtils = new ExcelUtils();
await excelUtils.writeExcelTest(searchText, updatePrice,{rowChange:0,colChange:2},'D:\\uday-learn\\PW-RahulSharma\\download.xlsx');
// await page.locator('#fileinput').click();
await page.locator('#fileinput').setInputFiles('D:\\uday-learn\\PW-RahulSharma\\download.xlsx');
const textLocator = await page.getByText(searchText);
const desiredRow = await page.getByRole('row').filter({has:textLocator});
console.log(await desiredRow.locator('#cell-4-undefined').textContent());
await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updatePrice);


//fileinput

})

