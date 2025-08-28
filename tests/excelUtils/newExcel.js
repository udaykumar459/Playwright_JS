const Js = require('exceljs');
//import ExcelJS from 'exceljs';




async function readExcelData(filePath, sheetName, searchText)
{   
    let cellData = {row:-1, col:-1};
    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);

    const workSheet = workbook.getWorksheet(sheetName);
    workSheet.eachRow((row, rowNum)=>{

    row.eachCell((cell, colNum)=>{

        if(cell.value===searchText){
            cellData.row = rowNum;
            cellData.col = colNum;
         return cellData;
        }
    })

});



}

async function writeExcelData(filePath, sheetName, rowNum, colNum, replaceValue)
{
    const workbook =  new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const workSheet = workbook.getWorksheet(sheetName);
    const cell = workSheet.getCell(rowNum,colNum);
    cell.value = replaceValue;
    await workbook.xlsx.writeFile(filePath);
}


await writeExcelData("D:\\uday-learn\\PW-RahulSharma\\download.xlsx", "Sheet1",3,2,'john');


// const rowColNumbers = await readExcelData("D:\\uday-learn\\PW-RahulSharma\\download.xlsx", "Sheet1", 'Yellow');



// console.log(rowColNumbers);





