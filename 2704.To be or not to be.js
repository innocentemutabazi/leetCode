var expect = function (val) {
  return {
      toBe: function (num) {
          if (val === num) {
              return true
          } else throw new Error('Not Equal')
      },
      notToBe: function(num) {
          if (val !== num) {
              return true
          } else throw new Error('Equal')
      }
  }
};
