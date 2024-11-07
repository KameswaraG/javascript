
//var sampleArray=[10,5,20,3,40]
var sampleArray=[5,10,20,30,40]
var size=sampleArray.length

for(var i=0;i<size-1;i++)
{
    var flag=false
    for(var j=0;j<size-1-i;j++)
    {
        if(sampleArray[j]>sampleArray[j+1])
        {
            var temp= sampleArray[j]
            sampleArray[j]=sampleArray[j+1]
            sampleArray[j+1]=temp
            flag=true
        }
        
    }

    console.log(sampleArray)
    if(flag==false)
        break
   
}