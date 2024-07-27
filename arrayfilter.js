var filter = function(arr, fn) {
    let filteredArr = []
    for (let i=0 ; i<arr.length;i++){
        fn(arr[i],i) ? filteredArr.push(arr[i]) : ''
    }
    return filteredArr
};