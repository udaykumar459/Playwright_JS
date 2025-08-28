console.log('************** if  *************')


let eligible = true
if(!eligible){
    console.log("entry")
}else{
    console.log("exit")
}
console.log('*************  while ****************')

let i = 0;
while(eligible){
    console.log(i)
    i++
    if(i==10){
        eligible = false;
    }
}
console.log('*********** do while *****************')
do{
console.log(i)
i++
eligible = true;
if(i==21){
    eligible = false;
}
}while(eligible)




console.log('************  for loops *****************')

//multiple of 2 and 5

for(let j=1; j<=10;j++){
    if(j%2==0 && j%5==0)
    console.log(j)
}

console.log('*****************************')
