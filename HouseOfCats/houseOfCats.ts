function houseOfCats(legs: number): number[] {
    let peopleCount = [];

    if(legs === 2) {
        return [1];
    }
    while(legs >=0){
        peopleCount.unshift(legs/2);
        legs -= 4;
    }
    return peopleCount;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));