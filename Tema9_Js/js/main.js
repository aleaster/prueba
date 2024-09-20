// el comando let es una variable
let x;
// cons es una consante
const PI=3.141516;

// let starter=0, aux=0, result=0
// for (let index = 0; index < 100; index++) {
//     if (starter==0) {
//         result=starter;
//         starter=starter+1;
//         console.log(result);
//         result=starter
//         console.log(result)
//     }else{
//         aux=starter
//         starter=result
//         result=starter+aux
//         console.log(result)
//     }
// }

for (let index = 0; index < 20; index++) {
    if (index%3==0) {
        console.log(index+" flizz");
    }else if(index%5==0) {
        console.log(index+" buzz")
    } else {
        console.log(index)
    }
    
}




// ================Estructuras de control===================
// if(true){
// }else if(false){
// }
// switch (key) {
//     case value:
//         break;
//     default:
//         break;
// }
// =======================Ciclos===========================
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
// while (condition) {
// }
// do {
// } while (condition);

// console.log("Hola mi amor");

// let dato=Number(prompt("Ingresamelo"));
// let num2=Number(prompt("num1"));
// console.log(dato+num2);
// console.log(dato);