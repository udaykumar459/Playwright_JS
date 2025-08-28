import {test, expect} from '@playwright/test';

test('caleder date selection', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    const year = "2100";
    const month = "12";
    const date = "31";

    const dateList = [month,date,year];

    await page.locator(".react-date-picker__calendar-button").click();
    await page.locator(".react-calendar__navigation__label__labelText--from").click();
    await page.locator(".react-calendar__navigation__label__labelText--from").click();



        for (let index = 0; index < await page.locator(".react-calendar__decade-view__years__year").count(); index++) {
          
            
            if(await page.locator(".react-calendar__decade-view__years__year").nth(index).textContent()===year){
                await page.locator(".react-calendar__decade-view__years__year").nth(index).click();
                break;
            }else if(index === await page.locator(".react-calendar__decade-view__years__year").count()-1){
                await page.locator(".react-calendar__navigation__next-button").click();
                index=0;

            }
            
        }

        await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click();
        await page.locator("(//abbr[text()='"+date+"'])[1]").click();


        const inputs = page.locator("react-date-picker__inputGroup__input");
        for(let i =0; i<inputs.length;i++){
            const value = await inputs[i].getAttribute("value");
            expect(value).toEqual(dateList[i]);       
        }

        await page.pause();




});