const once=(fn)=>{
  let count=0
  return (...args)=>{
    count++
   return count > 1 ? undefined : fn(...args)
  }
}