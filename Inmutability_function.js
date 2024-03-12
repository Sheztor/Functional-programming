//Persona Original
const personaOriginal = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Santo Domingo'
};

//Persona Modificada
const personaModificada = {
    ...personaOriginal,
    nombre: 'Juana',
    edad: 31
};

//Mostrar la persona original y la persona modificada
console.log('Persona Original', personaOriginal);
console.log('Persona Modificada', personaModificada);