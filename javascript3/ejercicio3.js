num1 = prompt('Digita un numero')
num2 = prompt('Digita un numero')

resul = num1/num2
console.log(resul)
if (num1 == 0 && num2 == 0){
    console.log("Los dos numeros son ceros")
} else if(num1==0){
    console.log("El dividendo es cero")
} else if(num2==0){
console.log("El divisor es cero" )
} else{
    console.log("El resultado es: "+ resul)
}

