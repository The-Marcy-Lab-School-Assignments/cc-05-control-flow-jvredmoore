//1
function absoluteValue(number){
  console.log(typeof number)
  if(typeof number === "number"){
    if(number < 0){
        return number * -1
    }  
  }else{
     return number
    }
  }else{
      return null
}

absoluteValue(20)



