
let age =10

while(age<18)
{
    console.log('You are not Major Yet : %d',age)
    
    age++
}

do
{
console.log('We will perform an action')
}while(age>18);


for(var age1=10;age1<20;age1++)
{
    console.log(age1)
}

//Write a programm to print number commonly multipled by 2 or 5

console.log('**********************************')
for (var num=1;num<=10;num++)
{
    if(num%2==0 && num%5==0 )
    console.log(num)
}



//Write a programm to print first 3 digits commonly multiple by 2 & 5 between 1 to 100

console.log('************************************')
var counter=0

for ( var number=1;number<=100;number++)
{
    if(number%2==0 && number%5==0)
    {
        console.log(number)
        counter++
    }
    if(counter==3)
    break
}