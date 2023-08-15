

function Calcular(){
/*definición de variables*/
    let oper1 = document.getElementById("operando1").value;
    let oper2 = document.getElementById("operando2").value;
    let operando1 = Number(oper1); /*convierte la entrada de texto a numero flotane*/
    let operando2 = Number(oper2);
    let operador = document.getElementById("opciones").value;
    let res = 0;
/* valída el ingreso de a:numeros y espacios; b:verifica división por cero; y c:verifica campos vacios */
    if (isNaN(operando1) || isNaN(operando2) || oper1.indexOf(" ") != -1 || oper2.indexOf(" ") != -1) {
            alert("Debe ingresar números flotante válidos, sin espacios");
    }   else if (operando2==0 && operador=='/'){
            alert("No se permite la división por cero");
    }   else if (oper1=="" || oper2==""){
            alert("Debe ingresar números en todos los campos");
/* sentecia condicional para la selección del calculo de las funciones matematicas basicas*/
    }   else {
            switch (operador) {
                    case "+":
                        res = operando1 + operando2;
                        break;
                    case "-":
                        res = operando1 - operando2;
                        break;
                    case '*':
                        res = operando1 * operando2;
                        break;
                    case '/':
                        res = operando1 / operando2;
                        break;
                    case '%': /*caso extra, calculo de porcentajes*/
                        res = operando1 * (operando2/100);
                        break;
                }
            /*valida si el resultado es demasiado grande o pequeño para ser mostrado sin notación de exp*/    
            if (99999999999999999999 < Math.abs(res)) {
                alert("El resultado es demasiado grande para ser mostrado");
            } else if (0.0000001 > Math.abs(res)) {
                alert("El resultado es demasiado pequeño para ser mostrado");
            } else {
                document.getElementById("resultado").innerHTML = res;
            }    
    }
}
/*función para borrar los campos de texto tanto de las entradas como salida*/
function Limpiar(){
    document.getElementById("operando1").value = "";
    document.getElementById("operando2").value = "";
    document.getElementById("resultado").innerHTML = "";
}
