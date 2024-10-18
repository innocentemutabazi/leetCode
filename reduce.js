var reduce = function (nums, fn, init) {
  let finalval = init;
  for (let num of nums) {
    finalval = fn(finalval, num);
  }
  return finalval;
};
