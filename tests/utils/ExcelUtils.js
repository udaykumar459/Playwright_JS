const ExcelJs = require('exceljs');


class ExcelUtils{

    

async writeExcelTest(searchText,replaceText, change, filePath){
   
const workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile(filePath)
const workSheet = workbook.getWorksheet("Sheet1");

 let rolcolObj = {row:-1,col:-1};
workSheet.eachRow((row, rowNum)=>{
    row.eachCell((cell, colNum)=>{

        if(cell.value===searchText){
            rolcolObj.row = rowNum
           rolcolObj.col = colNum
        }
    })

})

const cell = workSheet.getCell(rolcolObj.row,rolcolObj.col+change.colChange);
cell.value = replaceText;
await workbook.xlsx.writeFile(filePath);
}




}

// writeExcelTest("Apple", "500",{rowChange:0,colChange:2},'D:\\uday-learn\\PW-RahulSharma\\download.xlsx')

module.exports = {ExcelUtils};

//update apple price value

