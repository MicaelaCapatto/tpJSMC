
function precioTotal() {
    let cat = parseInt(document.getElementById("categoria").value)
    let cant = parseInt(document.getElementById("cantidad").value)
    let descuento;
    let compra;
    let total;

   console.log("Cantidad "+ cant);
   console.log("categoria "+ cat);
    switch (cat) {
        case 0:{
            break;
        }
        case 1:
            {
                compra = (cant * 200);
                descuento = compra - (compra  * 80 / 100);

                break;
            }
        case 2:
            {
                compra = (cant * 200);
                descuento = compra - (compra  * 50/ 100);


                break;
            }
        case 3:
            {
                compra = (cant * 200);
                descuento = compra - (compra  * 15 / 100);


                break;
            }
           
        break;
    }

    document.getElementById("totalPagar").innerHTML = descuento;

}

function limpiar(){
    document.getElementById("categoria").value=0
    document.getElementById("cantidad").value=0
    document.getElementById("totalPagar").innerHTML=0
}


