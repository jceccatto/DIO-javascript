// o que sao vetores ou arrays

//como declarar um array
// let array = ['string', 1, true];
// console.log(array);

// // pode guardar varios tipos de dados
// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
// console.log(array[3]);

// //manipulação de array em javascript [Metodos:forEach(), push(), pop(), shift(), unshift(), indexOf(), splice(), slice()]

// //forEach itera
// array.forEach(function(item, index){console.log(item,index)});

// //push add no fim
// array.push('novo item');
// console.log(array)

// //pop remove no fim
// array.pop();
// console.log(array);
// //shift remove no inicio
// array.shift();
// console.log(array);

// //unshift add no inicio
// array.unshift('novo item');
// console.log(array);

// //indexOf retorna o indice de um valor
// console.log(array.indexOf(true));

// //splice remove ou substitui um item pelo indice
// array.splice(0, 3);
// console.log(array);
 
// //slice retorna uma parte de um array existente
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: { objectInterno:'objeto interno'}};

console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var{ string, boolean, objectInterno} = object;
console.log(string,boolean,objectInterno);
