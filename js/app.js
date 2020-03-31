/*

El ámbito de una variable es la zona del programa en la que 
se define la variable  (A ESTO SE LO CONOCE COMO SCOPE).
JS define dos ámbitos para las variables, GLOBAL y FUNCIÓN.

*/

var mensaje = 'Hola mundo'; /* Acá trabajamos en GLOBAL */
/* 
Si no estamos trabajando en una FUNCIÓN, estamos trabajando 
en el objeto GLOBAL.
*/
console.log(mensaje); /* Acá trabajamos en función */

/******************************************************/

console.log(mensaje2);
let mensaje2 = 'Hello world';
/*
Esto da undefined porque en ES6 tenes que pasar la variable
primero antes que llamar la función, que no tiene parametros para
cumplir su ciclo de vida.
*/

/******************************************************/

if(1 === 3){
    var mensaje = 'Hola mundo';
}
console.log(mensaje);
// ¿Que muestra este console.log? 

let mensaje3 = '123';
if( 1 === 2){
    mensaje3 = 'hola mundo';
}
console.log(mensaje3);
// ¿Que muestra este console.log? 

/******************************************************/

/*
En ES6 no puedo tener dos variables llamadas de la misma forma.
por ej:
var mensaje
let mensaje
---------->Esto de error
*/

let mensaje4 = 'hola';
if(true){
    let mensaje4 = 'que tal';
    console.log(mensaje4);
    // ¿Que muestra este console.log? 
}
console.log(mensaje4);
// ¿Que muestra este console.log? 

/******************************************************/
//DECLARACIÓN DE CONSTANTES
/*
- Hay que iniciarlas al momento de crearlas. 
- No se puede tener dos constantes llamadas de la misma forma,
a menos que tenga dentro otro SCOPE.

*/
const IMPUESTO_SV = 15.25; 
if(true){
    const IMPUESTO_SV = 10.25; 
    console.log(IMPUESTO_SV);    
    // ¿Que muestra este console.log? 
}
console.log(IMPUESTO_SV);
// ¿Que muestra este console.log? 



const PERSONA = {
    name: 'Maximiliano',
    lastName: 'Gomez'
};
console.log(PERSONA.name);
// ¿Que muestra este console.log? 
PERSONA.name = 'Juan Alfonzo'; 
console.log(PERSONA.name);
// ¿Que muestra este console.log? 

/******************************************************/
//DECLARACION DE VARIABLES EN CICLOS

for (let i = 0; i <= 10 ; i++) { 
    //Con el SCOPE vacio, que devuelve este FOR?
}
console.log(i) 
// ¿Que muestra este console.log? 


/******************************************************/
//DECLARACION DE FUNCIONES EN CICLOS

var funciones = [];
for (let i = 0; i < 10 ; i++) {
    funciones.push( 
        function() { console.log(i); }
        );    
}
funciones.forEach(function(func){
    func();
});

/******************************************************/
//Segmentos de caracteres (startsWith - endsWith - includes )

var saludo = 'Hola Mundo!';

//ES5
console.log( saludo.substr(0,1)=== 'H');

console.log( saludo.substr(0,1)=== 'h');

//ES6
console.log( saludo.startsWith('Hola'));
console.log( saludo.endsWith('Mundo!'));

//ES5
console.log( saludo.indexOf('x')); //Revisa si tiene una x, si la tiene devuelve un entero, caso contrario devuelve -1.

//ES6
console.log( saludo.includes('x')); //Devuelve un boolean si esta o no el string.

console.log( saludo.startsWith('Mu', 5) ); //A partir de la posición 5, revisa si esta MU.

console.log( saludo.includes('a', 5) ); //¿Que devuelve?


/******************************************************/
//Repeticiones de strings

let texto = 'Hola mundo';
console.log( texto.repeat() );
console.log( texto.repeat(2) );
console.log( '0'.repeat(6) );


//ES6
const ESPACIOS = 12;
let nombres = ['Fernando', 'Melisa', 'Juan'];
let telefonos = ['12332111', '12332222', '12332333'];

for ( i in nombres) {
    let dif = ESPACIOS - nombres[i].length;
    console.log( nombres[i] + ' '.repeat(dif) + '|' + telefonos[i] );
}

/******************************************************/
//Template Literals
let nombre = 'Maximiliano';
let apellido = 'Gomez';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

let nombreCompleto2 = `El nombre completo es Maria Perez`;
console.log(nombreCompleto2);
let nombreCompleto3 = `El nombre completo es ${nombre} ${apellido}`;
console.log(nombreCompleto3);

function obtenerNombre(){
    return 'Maria Perez';
}

let nombreCompleto4 = `El nombre completo es ${obtenerNombre()}`;
console.log(nombreCompleto4);

let multilinea = `<h1 class="algo">${nombre}</h1>
<p>Hola mundo, soy ${apellido}</p>
Soy programador.`;
console.log(multilinea);

/******************************************************/
//Template literals con tags
function etiqueta(literales, ...substituciones){

    let resultado = "";
    console.log( arguments ); //Me devuelve un array de los argumentos de la funcion etiqueta que esta siendo utilizada en mensaje.
    console.log(literales);
    console.log(substituciones);

    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales [i];
        resultado += substituciones[i];
        //Acá controlamos los resultados en el template literal -> MENSAJE.
    }

    return 'sin el return no funciona la etiqueta, ni la misma function';
}

let unidades = 5,
    costo_unitario = 10;
let mensaje = etiqueta`${unidades} lapices cuestan ${unidades * costo_unitario} pesos.`;
console.log(mensaje);


/******************************************************/
//Usando valores RAW en templates literals
let mensaje5 = 'Hola \nMundo \\',
    mensaje6 = String.raw`Hola \nMundo\\`;
/*
Devuelve en crudo el template literal, no funciona si se pasa dentro de un string.
*/
console.log(mensaje5);
console.log(mensaje6);

/******************************************************/
//Parametros por defecto
function saludar ( fn = fnTemporal ){ //Si la funcion fn no esta definida, corre fnTemporal
    console.log( typeof fn); //Mostramos lo que tiene fn    

    if ( typeof fn === "undefined" ){ 
        console.error('No es una función');
        return;
    }
    fn();
}
function fnTemporal() { //Funcione que corre cuando no esta inicalizada fn
    console.log('Hola mundo desde FN');
}
saludar(); //Corre saludar 

var persona = {
    name: 'Maximiliano'
}
saludar(fnTemporal, persona);

/******************************************************/

//Como afentan los valores a ARGUMENTS
function sumarDos(a, b){
    console.log(arguments);
}
sumarDos(1, 2);
sumarDos();
function sumarTres(a = 1, b = 2){
    console.log(arguments);
}
sumarTres();
//Los argumentos con parametros opcionales, son afectados.

/******************************************************/

//Parametros REST
/*
Es indicado con tres puntos, seguido del nombre del parámetro.
*/

//ES6
function agregar_alumno( arr_alumnos, ...alumnos){ //Alumnos pasa a ser el argumento que vamos a recorrer
    console.log( arguments );
    for (let i = 0; i < alumnos.length; i++) {
       arr_alumnos.push(alumnos[i]); //Metemos dentro del array, un arreglo y N alumnos.
    }
    return arr_alumnos;
}
var alumnos_arr = ['Fernando'];
var alumnos_arr2 = agregar_alumno( alumnos_arr, 'Maria', 'Pedro', 'Susana', 'Juan', 'Fernando');
console.log( alumnos_arr2 );

/******************************************************/

//Restricciones parametros REST
/*
1- Solo puede tener un parametro REST en la función.
2- El parametro REST tiene que estar como ultimo parametro.

//Porque es un arreglo indefinido como conclusión, para darle ciclo de vida a los parametros.
*/

/******************************************************/

//Operador SPREAD
//ES5

let numero = [1, 5, 10, 20, 100, 234];
//var max = Math.max.apply( Math, numeros);

//ES6
let max = Math.max(  ...numeros ); //Paso un SPREAD con un Array así envia a la funcion MAX argumentos o números independientes.
console.log(max);

/******************************************************/

//Romper la relación de referencia de los objetos
let persona1 = {
    nombre: 'Fernando',
    edad: 33
}
let persona2 = { ...persona1 };
persona2.nombre = 'Juan';
console.log( persona1 ); //¿que devuelve este?
console.log( persona2 ); //¿que devuelve este?

/*
Con el spread tomo el objeto creado y la posibilidad de modificarlo sin afectar al padre.
*/

/******************************************************/

//Añadir propiedades a objetos a partir de otros objetos.
let persona1 = {
    nombre: 'Fernando',
    edad: 33
};
let persona2 = {
    nombre: 'Juan',
    edad: 18,
    direccion: 'Avenida invisible 123',
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado:false
};

persona1 = {
    ...persona2, //Le estoy pasando todas las propiedades de PERSONA2 a PERSONA1
    ...persona1 //Le estoy diciendo que quiero mantener los valores de PERSONA1, en el nuevo objeto que es con los parametros de PERSONA2.
};

/******************************************************/

//Diferencias entre SPREAD y REST
// REST -> Junta los elementos de una arreglo
// SPREAD -> Esparce los elementos como si fueran enviados de forma separada.

function saludarRest( saludo, ...nombres ){
    for (i in nombres) {
        console.log(`${saludo} ${nombres[i]}`);
    }
}
function saludarSpread( saludo, ...nombres ){
    console.log(`${saludo} ${nombres}.`);
}

saludarRest('Hola', 'Fernando', 'Maria', 'Marcela');
let personas= ['Martin', 'Marcelo', 'Maxi'];
saludarSpread('¿como estas?', personas);

//Forma más común de utilizar el SPREAD
let partes = ['brazos','piernas'];
let cuerpo = ['cabeza', 'cuello', ...partes, 'pies', 'dedos'];

console.log( cuerpo );

/******************************************************/

/******************************************************/
//Arrow functions
//ES5
var miFuncion2 = function( valor ){
    return valor;
}
//Arrow
let miFuncion1 = valor => valor;
//ES5
var sumarDosP = function(num1, num2){
    return num1 + num2;
}
//Arrow
let sumar1 = (num1, num2) => num1 + num2;
//ES5
var saludarB = function(){
    return 'HolaMundo';
}
//Arrow
let saludarUno = () => 'Hola Mundo';
//ES5
var saludarPersona = function(nombre){
    var salida = 'Hola, '+nombre;
    return salida;
}

//Arrow
let saludarPersonaDos = nombre => `Hola, ${nombre}`;
//ES5
var obtenerLibro = function(id){
    return {
        id: id,
        nombre: 'Harry potter'
    }
}
//Arrow
let obtenerLibroDos = id => ({id: id, nombre: 'Harry Styles'}); //Los objetos literales se retornan entre parentesis y los corchetes de los objetos.

/******************************************************/

// Creando funciones anonimas
//ES5
var saludo1 = function(nombre){
    return 'Hola, '+nombre;
}('Fernando');
console.log(saludo1);

//ES6
var saludo2 = ( nombre => `Hola, ${nombre}`)('Maximiliano');
console.log(saludo2);

/******************************************************/

//No hay cambios en el objeto - THIS -

/******************************************************/

//Funciones de FLECHA y ARREGLOS

//ES5
var arreglos = [5, 10, 11, 2, 1, 9, 20];
var ordenadoES5 = arreglo.sort(function(a,b){
    return a-b;
});
console.log(ordenadoES5);

//ES6
let ordenadoES6 = arreglo.sort((a,b)=> a-b);
console.log(ordenadoES6);

/******************************************************/
//Objetos literales

//ES5
function crearPersona ( nombre, apellido, edad ){
    return{
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}
var melissa = crearPersona('Melisa', 'Suarez', 30);
console.log(melissa);

//ES6
//Cuando tenemos propiedades igual que values, podemos simplificar código. Parametros de funciones === objetos .
function crearPersona ( nombre, apellido, edad ){
    return{
        nombre,
        apellido,
        edad
    }
}
var melissaES6 = crearPersona('MelisaES6', 'Suarez', 30);
console.log(melissaES6);

/******************************************************/

//Métodos consisos
var personaES5 = {
    nombre: 'Fernando',
    getNombre: function(){ //Método para traer el nombre
        console.log(this.nombre);
    }
}
persona.getNombre();
var personaES6 = {
    nombre: 'Fernando',
    getNombre(){ //Método para traer el nombre
        console.log(this.nombre);
    }
}
persona.getNombre();

/******************************************************/
//Nombre de propiedades computadas o procesadas.

var persona = {

};
var apellido = 'apellido';










