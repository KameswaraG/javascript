
let arr=[20,25,30,45,80,22,33]

let largeNumber=arr[0]

for(let i=1;i<arr.length;i++)
{
    if(largeNumber < arr[i])
    {
        largeNumber=arr[i]
    }
}

console.log('Largest number of the given array is : %d',largeNumber)