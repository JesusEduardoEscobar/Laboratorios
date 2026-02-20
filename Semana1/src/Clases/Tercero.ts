// Esto es un tipo de template y funcion. (El regreso es template)
function saludar(name: string) : string {
    return `Hola ${name}`
}

const msg = saludar('Jesus')
console.log(msg)

// Esto es un tipo de template
const saludarFlecha = (name: string): string => {
    return `Hola ${name}`
}

const msg2 = saludar('Ivana')
console.log(msg2)

// Esto es un tipo de template
const saludar3 = (name: string) : string => `Hola ${name}`

const msg3 = saludar3('Eduardo')
console.log(msg3)