let obj={
    q: null,
    w: null,
    e: null,
    r: null,
    t: null,
    y: null
}
//the first way
let operation_with_obj=Object.keys(obj);
let result=operation_with_obj.join('');
console.log(result);

//another way
let stringOfKeys="";
for (let key in obj) {
    stringOfKeys+=key;
}
console.log(stringOfKeys);
