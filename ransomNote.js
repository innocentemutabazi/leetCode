var canConstruct = function (ransomNote, magazine) {
    let ransomObj = {};
      let magazineObj = {};
      for (let char of ransomNote) {
        if (!magazine.includes(char)) return false
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
      for (key in ransomObj) {
        console.log(key)
        if (ransomObj[key]>magazineObj[key]){
        return false;}
      }
      return true;
    };
console.log(canConstruct('aa','aab'))
// second way
const canConstruct =(ransomNote,magazine)=>{
    for (let char of magazine){
   ransomNote = ransomNote.replace(char,'')
    }
    return ransomNote ? false : true
}