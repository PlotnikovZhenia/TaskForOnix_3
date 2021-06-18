 //4 *) Write a function that compares two objects
 let user ={
    name: "Иван",
    sizes: 50,
    width:15
};
let user_2={
    name:"Виктор"
};
let user_3={
    name:"Дмитрий",
    sizes: 50,
    width:15
};
let user_4={
    surname:"Дмитрий",
    sizes: 50,
    width:15
}
let clone = Object.assign({}, user);
let comapreObjects=function(obj1,obj2) {
    let resultOfCompare=true;
    let array_keys=Object.keys(obj1);
    let array_keys_2=Object.keys(obj2);
    let array_values=Object.values(obj1);
    let array_values_2=Object.values(obj2);
    if(array_keys.length===array_keys_2.length) {
        for(let i=0; i<array_keys.length; i++) {
            if(array_keys[i]!=array_keys_2[i]) {
                resultOfCompare=false;
            }
        }
    } else {
            resultOfCompare=false;
    }
    if((array_values.length===array_values_2.length)&&(resultOfCompare===true)) {
        for(let j=0; j<array_values.length; j++) {
            if(array_values[j]!=array_values_2[j]) {
                resultOfCompare=false;
            }
        }
    } else {
            resultOfCompare=false;
    }
    console.log(resultOfCompare);
}
comapreObjects(user,clone);
comapreObjects(user,user_2);
comapreObjects(user,user_3);
comapreObjects(user,user_4);