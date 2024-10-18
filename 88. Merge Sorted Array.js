nums1 = [1], m = 1, nums2 = [], n = 0
const merge=(nums1, m, nums2, n)=>{
  nums1.splice((nums1.length > m  ? nums1.length-m : 1),m,...nums2.slice((nums2.length > m ? nums2.length-m : m)))
nums1.sort()
return nums1
}
console.log(merge(nums1, m, nums2, n))