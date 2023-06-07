/*Los tramos impositivos para la 
declaración de la renta en un determinado 
país son los siguientes:

Renta                      Tipo impositivo
Menos de 10000€                       5%
Entre 10000€ y 20000€                15%
Entre 20000€ y 35000€                20%
Entre 35000€ y 60000€                30%
Más de 60000€                              45%

Escribir un programa que con una variable 
tenga del usuario su renta anual y muestre
 por pantalla lo que tiene que pagar.*/

 renta = parseInt (prompt ('Digite su renta'))

if (renta < 10000){
    sub = renta*0.05
    pago = sub+renta
    console.log('Su pago es de '+pago)
}
if ((renta >=10000) && (renta < 20000)){
    sub = renta*0.15
    pago = sub+renta
    console.log('Su pago es de '+pago)
}
if ((renta >= 20000) && (renta< 35000)){
    sub = renta*0.20
    pago = sub+renta
    console.log('Su pago es de '+pago)
}
if ((renta >= 35000) && (renta< 60000)){
    sub = renta*0.30
    pago = sub+renta
    console.log('Su pago es de '+pago)
}
else if(renta > 60000){
    sub = renta*0.45
    pago = sub+renta
    console.log('Su pago es de '+pago)
}