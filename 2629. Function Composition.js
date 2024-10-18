const compose =(functions) => {
  return  function fn (x){
       return functions.reverse().reduce((acc,curr)=>curr(acc),x)
    }
}

