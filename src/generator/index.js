function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
///////////////////////////////////
function* interate(array){
    for(let value of array){
        yield value
    }
}
const it = interate(['oscar', 'ana','lucia','juan'])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);