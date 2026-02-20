const myArray = [1,2,3,4,5, 'Jesus', false]
console.log(myArray);
myArray.push(6)
console.log(myArray)
myArray.pop()
console.log(myArray)

const estudiante = {
    matricula: 'A001',
    nombre: 'Jesus',
    edad: 40,
    direccion: {
        ciudad: 'Monterrey',
        CP: 64800
    }
}

console.log(estudiante)
console.table(estudiante)

const estudiante2 = {...estudiante} // generar una copea
estudiante2.edad = 41

console.log(estudiante2)
console.table(estudiante2)

const arreglo = [1,2,3,4,5]
arreglo.push(7)
let arreglo2 = [...arreglo, 5]

console.log(arreglo2)
// Array.prototype.map(arreglo2)