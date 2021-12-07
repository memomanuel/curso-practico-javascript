
// Cuadrado
console.group("Cuadrados");
//const ladoCuadrado= 5;

//console.log("Los lados del cuadrado miden "+ ladoCuadrado + "Cm");

function perimetroCuadrado(lado){
    return lado*4;
}


//console.log("El perimetro del cuadrado mide "+ perimetroCuadrado + "Cm");

function areaCuadrada(lado){
    return lado*lado;
} 


//console.log("El Area del cuadrado mide "+ areaCuadrada + "Cm");
console.groupEnd();

// Triangulo
console.group("Triangulos");
//const ladoTriangulo1= 6;
//const ladoTriangulo2= 6;
//const baseTriangulo3= 4;

//console.log("Los lados del triangulo miden "+ ladoTriangulo1 + "Cm"+ ladoTriangulo2 + "Cm"+ baseTriangulo3 + "Cm");

//const alturaTriangulo1= 5.5;
//console.log("La altura del triangulo es "+ alturaTriangulo1 + "Cm");

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
} 
//console.log("El perimetro del Triangulo mide "+ perimetroTriangulo + "Cm");


function areaTriangulo(altura,base){
    return (base* altura)/2;
} 
//console.log("El Area del Triangulo mide "+ areaTriangulo + "Cm");

console.groupEnd();


// Circulos
console.group("Circulos");

//const radioCirculo= 4;
//console.log("El radio del circulo mide "+ radioCirculo + "Cm");
function diametroCirculo(radio){
    return radio* 2;
}


//console.log("El diametro del circulo mide "+ diametroCirculo + "Cm");
const PI= Math.PI;
console.log("PI es  "+ PI + "Cm");

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro*PI;
}

function areaCirculo(radio){
    return (radio*radio)*PI;
}

//console.log("El area del circulo mide "+ areaCirculo + "Cm");

console.groupEnd();



function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value= input.value;

    const perimetro= perimetroCuadrado(value);
    alert(perimetro);

}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value= input.value;

    const area= areaCuadrada(value);
    alert(area);
}