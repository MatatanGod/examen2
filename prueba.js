

let lista=[1,3,5,10,22,12]
let suma= 0

for (let i = 0; i < lista.length; i++){
    suma=lista[i]+suma
}
let mayor=0

for (let i = 0; i < lista.length; i++){
if (lista[i] > mayor) {
    mayor = lista[i]; 
  }
}
console.log(suma)
console.log(mayor)


const colores=["roj0000o","morado","amar","plata","azul"]
indiceDelMayor=0
    
    for (let i = 1; i < colores.length; i++) {
    
    if (colores[i].length > colores[indiceDelMayor].length) {
       
        indiceDelMayor = i; 
    }
}
console.log(indiceDelMayor); 


console.log(colores[indiceDelMayor]);