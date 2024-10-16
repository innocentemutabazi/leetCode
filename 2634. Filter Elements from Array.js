arr = [1,2,3], 
fn = firstIndex= (n, i) =>{ return i === 0; }
const filter = (arr , fn )=> {
  let filteredArr =[]
  for (let i=0 ; i<arr.length ;i++){
      if (fn(arr[i],i)) {
          filteredArr.push(arr[i])
      }
  }
  return filteredArr
}
console.log(filter(arr,fn))
