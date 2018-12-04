function firstDuplicate(a: number[]): number {
    let obj = {};

    for(let num of a) {
        if(obj.hasOwnProperty(num)){
            return num;
        }
        obj[num] = num;
    }
    return -1
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));