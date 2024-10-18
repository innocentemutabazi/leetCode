let counter = createCounter(0)
function createCounter(init){
  let original = init
return {
  increment : function (){
      return init = init + 1
      
  },
  decrement : function(){
      return init = init -1
  },
  reset : function(){
      return original
  }
}   
};
console.log(counter.increment())
console.log(counter.increment());
console.log(counter.decrement()); 
console.log(counter.reset());
console.log(counter.reset()); 
