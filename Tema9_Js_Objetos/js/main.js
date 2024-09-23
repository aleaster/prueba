// for (let index = 0; index < array.length; index++) {
//     console.log(index);
// }

let arr1 = [1,2,3,4,5,6,7,8,9,"pene","Hola"];

for (const element of arr1) {
    console.log(element)
}

const obj1={key1:"valor_1", key2:2,key3:true};

for (const key in obj1) {
    console.log(key+": "+obj1[key]);
}    

function suma(x,y){
    let z=x+y;
    console.log(z)
}

suma(20,5)