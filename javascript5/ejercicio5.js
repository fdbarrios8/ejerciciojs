/*Para tributar un determinado impuesto 
se debe ser mayor de 19 años y tener 
unos ingresos iguales o superiores a 
2.500.000 mensuales. Escribir un programa 
que tenga 2 variables su edad y sus 
ingresos mensuales y muestre por pantalla 
si el usuario tiene que tributar o no.*/

edad = prompt ('Digite su edad')
salario = prompt ('Digite su salario')

if((edad >= 19) && (salario >= 2500000)){
    console.log('Usted tiene que declarar')
}else{
    console.log('Usted no tiene que declarar')
}


