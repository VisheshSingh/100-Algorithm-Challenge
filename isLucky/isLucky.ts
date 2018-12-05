function isLucky(n: number): boolean {
    let luckyN = n.toString();
    let half = luckyN.length / 2;

    let firstHalf = getTotal(luckyN.slice(0, half));
    let secondHalf = getTotal(luckyN.slice(half, luckyN.length));
    
    function getTotal(n: string) {
        return n.split('').map(char => parseInt(char)).reduce((a,b) => a+b);
    }
    
    return firstHalf === secondHalf;
}
console.log(isLucky(1230));
console.log(isLucky(239017));