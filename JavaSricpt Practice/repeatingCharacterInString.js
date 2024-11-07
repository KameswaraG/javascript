
let fullName='kamessswararaogandru'

let obj={}

for(let char of fullName)
{
    if(char in obj)
    {
        obj[char]+=1
    }
    else
    {
        obj[char]=1
    }
}
console.log(obj)

let duplicateChar=[]
for(key in obj)
{
    if(obj[key]>1)
    {
        duplicateChar.push(key)
        
    }
    else
    {
       // delete obj[key]
       continue
    }
}
console.log(duplicateChar)