function findOppositeNumber(n, inputNumber){
    let m = inputNumber + n/2;
    if(m<n){
        return m;
    }
    else{
        return m-n;
    }
}
let k = findOppositeNumber(8,6);
console.log(k);