const {test} = require('@playwright/test')
// import {base} from '@playwright/test';

exports.customtest = test.extend(
    {

productTestData:{
    
    username:"testuday123@mailinator.com",
    password:"Manikyam@459",
    productName: "IPHONE 13 PRO"
}

}

)

// module.exports = {customtest};