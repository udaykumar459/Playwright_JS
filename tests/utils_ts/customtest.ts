// const {test} = require('@playwright/test')
 import {test as baseTest} from '@playwright/test';

 interface ProductTestData{
    username:string,
    password:string,
    productName:string
 }



 export const customtest = baseTest.extend<{productTestData: ProductTestData}>(
    {

productTestData:{
    
    username:"testuday123@mailinator.com",
    password:"Manikyam@459",
    productName: "iphone 13 pro"
}

}

)

module.exports = {customtest};