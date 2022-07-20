//Funcion del calulo del prestamo
function compute()
{
    //Recuperar el monto
    var principal = document.getElementById("principal").value;
    //Controlar que sea positivo
    if(principal>0)
    {
        //Recuperar los datos
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        
        //Calcular el monto
        var amount = Number(principal) * Number(years) * Number(rate) /100;
       //Calcular el anio
        var year = new Date().getFullYear()+parseInt(years);
        //Mostrar el mensaje
        document.getElementById("result").innerHTML="If you deposit <span class='marcador'>"+principal+"</span><br\>at an interest rate of <span class='marcador'>"+rate+"%</span><br/>You will receive an amount of <span class='marcador'>"+amount+"</span>,<br>in the year <span class='marcador'>"+year+"</span><br/>"
    }
    else{
        //Avisarmos que el ingreso no es valido
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}
//Actualizar la vista del porcentaje
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}
