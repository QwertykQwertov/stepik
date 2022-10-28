function same_upsidedown(x){
  const oldValue = x
  let arrNumber = []
  let pushItem = null
  while (x){
    
    pushItem = (x%10 == 6)? 9: (x%10 == 9)? 6: 0
    arrNumber.push(pushItem)
    x /= 10 
  }
  console.log(arrNumber)
  return oldValue == parseInt(arrNumber.join())
}