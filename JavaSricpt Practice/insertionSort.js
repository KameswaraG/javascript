
var unsorterArray=[ 5, 10, 20,15, 3, 8 ]

const arrayLength=unsorterArray.length

for(var i=1;i<arrayLength;i++){
    temp=unsorterArray[i]
    var j=i-1;
    while(j>=0 && unsorterArray[j]>temp)
    {
        unsorterArray[j+1]=unsorterArray[j]
        j--
    }
    unsorterArray[j+1]=temp
    console.log(unsorterArray)
}

