var middleNode = function (head) {
    let median = []
    if (head.length % 2 !== 0) {
        for (let i = ((head.length - 1) / 2); i < head.length; i++) {
            median.push(head[i])
        }
    } else for (let i = (head.length  / 2); i < head.length; i++) {
        median.push(head[i])
    }
    return median
};