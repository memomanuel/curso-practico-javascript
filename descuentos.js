//const precioOriginal= 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento= 100- descuento;

    const precioConDescuento= (precio* porcentajePrecioConDescuento)/100;  
    return precioConDescuento;
}

function onClickButtonPrice(){
    const inputPrice= document.getElementById("InputPrice");
    const priceValue= inputPrice.value;

    const inputDescuento= document.getElementById("InputDescuento");
    const descuentoValue= inputDescuento.value;

    const precioConDescuento= calcularPrecioConDescuento(priceValue, descuentoValue);

    const resultP=document.getElementById("ResultP");
    resultP.innerText= "El precio con descuento es: "+ precioConDescuento;

}
//console.log({
//    precioOriginal,
//   descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento

//});