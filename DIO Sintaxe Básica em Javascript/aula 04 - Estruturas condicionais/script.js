//Estruturas condicionais

//Estruturas de decisao
//if

var jogador1 = 0;
var jogador2 = 1;
var placar;

// If ternáario
jogador1 != -1 && jogador2 != -1? console.log('Os jogadores sao validos') : console.log('Jogadores Invalidos');

// usando If
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1>jogador2;
} 

//usando else if
else if(jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2>jogador1;
} 

//usando else
else{
    console.log('Ninguem marcou ponto')
}

//usando o switch

switch(placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
        default:
        console.log('Ninguem ganhou');
}

let array = ['valor 1', 'valor 2', 'valor 3', 'valor 4', 'valor 5'];
let object = { propriedade1: 'valor 1', propriedade2: 'valor 2', propriedade3: 'valor 3'}

//estruturas de repeticao
//for - executa uma instrucao ate que ela seja falsa
for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}
//for/in - executa repeticao a partir de uma propriedade
    //com array
    for(let i in array){
        console.log(i);
    }

    //com object
    for(i in object){
        console.log(i);
    }

//for/of - executa repeticao a partir de um valor
    //com array
    for(i of array){
        console.log(i);
    }

    //com object VEJA QUE ELE IMPRIME CADA LETRA EM UMA LINHA, POR ISSO NAO SE USA FOR/OF COM OBJETOS
    for(i of object.propriedade1){
        console.log(i);
    }

var a = 0;
var b = 0;

//while - executa
    while(a < 10){
        a++;
        console.log(a);
    }

//do/while - executa 
    do{
        b++;
        console.log(b);
    }while(b < 10);
