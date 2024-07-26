var canConstruct = function (ransomNote, magazine) {
let ransomObj = {};
  let magazineObj = {};
  for (let char of ransomNote) {
    console.log(char)
    if (!ransomObj[char]) {
      ransomObj[char]=0;
    }
    ransomObj[char]++;
  }
  console.log(ransomObj)
  for (let char of magazine) {
    if (!magazineObj[char]) {
      magazineObj[char]=0;
    }
    magazineObj[char]++;
  }
  console.log(magazineObj)
  for (key in ransomObj) {
    console.log(key)
    if (ransomObj[key] != magazineObj[key]){
    return false;}
  }
  return true;
};
console.log(canConstruct('aa','aab'))