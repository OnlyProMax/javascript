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

/******************************************************/

//Object.is() para comparar

console.log( +0 == -0);
console.log( +0 === -0);
console.log( Object.is (+0, -0));
console.log('===');
console.log( NaN == NaN );
console.log( NaN === NaN );
console.log( Object.is (NaN, NaN));
console.log('===');
console.log( 5 == 5);
console.log( 5 == '5');
console.log( 5 === 5);
console.log( 5 === '5');
console.log('===');
console.log( Object.is (5, 5));
console.log( Object.is (5, '5'));

/******************************************************/

//Object.assign() 
//Nos permite tomar las props de un objeto y heredarlas a otra.

//ES5
function mezclar(objReceptor, objDonador){
    Object.keys(objDonador).forEach(function(key){
        objReceptor[key] = objDonador[key];
    });
    return objReceptor;
}
var objReceptor = {};
var objDonador = {
    nombre: 'mi archivo js'
};
console.log( mezclar( objReceptor, objDonador ) );

console.log(Object.assign(objReceptor, objDonador ) );
console.log( objDonador );

/******************************************************/
//Orden de enumeración de los objetos.
/**
 * - Todas las llaves van en orden ascendente.
 * - Todas las llaves tipos string, van ordenadas en la manera
 * que fueron agregadas al objeto.
 * - Todos los símbolos en el orden que fueron agregados al objeto.
 * 
 */

var objeto = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
};
objeto.d = 1;
objeto['2'] = 1;
objeto['a'] = 1;

console.log( Object.getOwnPropertyNames( objeto ).join(',') );
console.log( Object.keys( objeto ) ); //Ordenado
console.log( JSON.stringify( objeto )); //Ordenado

for (i in Object.keys( objeto )) {
    console.log( Object.keys( objeto )[i] ); //Ordenado
}

/******************************************************/
//Prototypes
/**
 * Los prototypes son un conjunto de normas para integrar
 * POO en JS, pero con los PROTOTYPES, nosotros somos capaces 
 * de realizar tareas como:
 * - Herencia.
 * - Encapsulamiento.
 * - Abstracción.
 * - Polimorfismo.
 */

 let gato = {
     sonido(){
         console.log('miau!');
     },
     chillido(){
         console.log('MIAU!!');
     },
 };
 let perro = {
     sonido(){
         console.log('guau!');
     }
 };
let angora = Object.create(gato);
console.log(Object.getPrototypeOf( angora ) === gato);
angora.sonido();
angora.chillido(); //Hasta acá es un gato

Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf( angora ) === gato ); //Acá es un perro
angora.sonido();
angora.chillido();//Acá rompe

/******************************************************/

//Acceso al propotipo con la referencia SUPER.
/*
- Acceder a los métodos de los objetos que estan siendo heredados de otro objeto.
*/
let personaSaludo = {
    saludar(){
        return 'Hola';
    }
};
let amigoSaludo = {
    saludar(){
        return super.saludar() + ', saludos desde ES6!!'; //Accedemos al prototype de 'personaSaludo' y lo concatenamos con 'amigo'.
    }
};
console.log( amigo.saludar() );

/******************************************************/
//Desestructuración de objetos
let ajustes = {
    nombre: 'Maximiliano Gomez',
    email: 'maxi.r.gomez@gmail.com',
    facebook: 'maximiliano.dev',
    google: 'maxi.r.gomez@gmail.com',
    premium: 'true'
};

//ES5
let nombreDes = ajustes.nombre, //Destructuración del objeto en ES5
    emailDes = ajustes.email,
    facebookDes = ajustes.facebook,
    googleDes = ajustes.google,
    premiumDes = ajustes.premium;

console.log( 
    nombreDes,
    emailDes,
    facebookDes,
    googleDes,
    premiumDes
);

//ES6
let { nombre, email, facebook, google, premium } = ajustes; //Destructuración del objeto en ES6
console.log(nombre, email, facebook, google, premium);

let { nombre, email, facebook, google, premium, twitter='tuitDeMaxi' } = ajustes; //Agregamos una variable a la destructuración
console.log(twitter);

let { nombre, email, facebook, google, premium:dePago } = ajustes; //Cambiamos el nombre de una variable en la destructuración
console.log(dePago);

/******************************************************/
//Destructuración de objetos anidados
let autoGuardado = {
    archivo : 'app.js',
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: 'index.html',
        cursor: {
            linea: 9,
            columna: 20
        }
    },
    otroNodo: {
        subNodo: {
            cursor: {
                linea:11,
                columna: 11
            }
        }
    }
};
let { cursor:cursorActivo } = autoGuardado;
console.log(cursorActivo);
//ES5
let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSuperNodo2);

//ES6
let { otroNodo:{ subNodo:{ cursor:otroSuperNodo } } } = autoGuardado;
console.log(otroSuperNodo);


/******************************************************/
//Destructuración de arreglos

let frutas = ['banano', 'pera', 'uva'];
let [ fruta1, fruta2 ] = frutas;
console.log(fruta1);
console.log(fruta2);

//ES6
let [ ,,frutas3 ] = frutas;
console.log(frutas3);

let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = a;

console.log(a);
console.log(b);

[a,b] = [b,a];
console.log(a);
console.log(b);

/******************************************************/
//Destructuración de arreglos anidados.
let colores1 = ['rojo', ['verde','amarillo'],'morado','naranja'];
let [ color1, [ color2 ] ] = colores1;
console.log(color1);
console.log(color2);

let colores2 = ['rojo', 'verde','amarillo','morado','naranja'];
let [ colorPrincipal, ...demasColores ] = colores2; //Toma el primer valor de mi arreglo, el spread toma el resto.
let [ colorPrincipal,colorSecundario , ...demasColores ] = colores2; //Toma el primer valor de mi arreglo, el spread toma el resto.
console.log(colorPrincipal);
console.log(colorSecundario);

/******************************************************/
//Valores por defecto en la destructuración
let frutas = ['banano'] ;
let [ fruta1 ] = frutas;
console.log(fruta1);
let [ fruta1, fruta2] = frutas; //Fruta2 da undefined
let [ fruta1, fruta2 = 'manzana' ] = frutas; //Si tiene un valor, lo pasa, sino fruta2 = manzana.
console.log(fruta2);
frutas =  ['banana', 'pera'];
console.log(fruta1);
console.log(fruta2);

/******************************************************/
//Destructuración de parámetros
//function crearJugador( nickName, opciones ) -> sin destructurar
function crearJugador( nickName, 
    { hp, sp, clase} = { hp:100, sp:50, clase:'Mago' }  //Agrego la estructura y una por defecto
    ){
    /*
    - SIN DESTRUCTURAR - 
    opciones = opciones || {};
    let hp = opciones.hp,
        sp = opciones.sp,
        clase = opciones.clase;
    */
    console.log(nickName, hp, sp, clase);
    //Código para crear el jugador        

}
crearJugador( 'Strider', {
    hp: 500,
    sp: 100,
    clase: 'Warrior'
} );

/******************************************************/
//Simbolos y propiedades
//-> Sirve para poner nombres de props y así asegurarse de que no van a tener problemas con otras librerias o códigos.
let primerNombre = Symbol();
let segundoNombre = Symbol();
let persona = {
    [segundoNombre]: 'Roberto'
};
persona[primerNombre] = 'Maximiliano';
console.log( persona[primerNombre] ); //Lo llamamos como una propiedad computada, con los corchetes del arreglo.
console.log( persona[segundoNombre] );

let primerNombre = Symbol('primer nombre');
console.log(primerNombre);
let segundoNombre = Symbol();
console.log(segundoNombre);

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log( simbolo1 == simbolo2 );
console.log( simbolo1 === simbolo2 );
console.log( Object.is(simbolo1, simbolo2) );

console.log( typeof primerNombre);
//No se puede usar como STRING el symbol

//Los simbolos son absolutamente distintos aunque tengan el mismo atributo.

/******************************************************/
//Compartiendo símbolos - Symbol.for() y Symbol.keyFor()

let userID = Symbol.for('userID'); //Si queremos verificar de que ese Symbol no esta creado o si lo esta volverlo a utilizar.
let objeto = {};

objeto[userID] = '12345';
console.log( objeto[userID] );
console.log( userID );

//"Unimos" 'userID2' con 'userID', así es que da true cuando lo validamos.
let userID2 = Symbol.for('userID'); 
console.log( userID == userID2 ); 
console.log( userID === userID2 ); 
console.log( Object.is(userID, userID2) );  //Magia

console.log(objeto[userID2]);
console.log(userID2);

let id = Symbol.for('id unico');
console.log( Symbol.keyFor( id ) ); //Comparte el alias, que es el value pasado como parametro.

let id2 = Symbol.for('id unico');
console.log( Symbol.keyFor( id2 ) );  //Comparte el alias, que es el value pasado como parametro.

let id3 = Symbol('id unico');
console.log( Symbol.keyFor( id3 ) ); //Da undefined porque no existe nada asociado en el código al id3, estamos creando uno nuevo.

/******************************************************/

// Coerción de símbolos
let id = Symbol.for('id');
let numero = 10;
let texto = '10';
let bool = true;
let notAnumber = NaN;
console.log( numero + texto );

console.log( 'Mi simbolo es: '+ String(id) );//convertimos a string el symbol

/******************************************************/

//Recuperando las propiedades de símbolo

let id = Symbol.for('id');
let activo = Symbol.for('activo')

let persona = {
    [id]: '123',
    [activo]: true,
    nombre: 'Maximiliano',
    apellido: 'Gomez',
    edad: 27
};
for( key in persona ){
    console.log( key, persona[key] ); //Me devuelve el objeto en consola.
}
let simbolos = Object.getOwnPropertySymbols(persona); //Función para traer la propiedad de symbols.
console.log(simbolos); //Medevuelve los simbolos porque los tome antes.

for (i in simbolos) {
    console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}

/******************************************************/
//Los SET 
/*
Son una lista ordenada de valores sin duplicados.
Permiten un rápido acceso a la data que contienen.
*/
//Creando sets agregando items y buscando elementos.

let items = new Set();
items.add(10);
items.add(11);
items.add(12);
items.add(13);
items.add(14);
items.add(15);
items.add(7);
items.add(7);
items.add(7);
items.add(7);
items.add(7);
items.add('7');
items.add(7);

console.log(items.size); //Me devuelve todo, excepto las repeticiones del 7. Porque no toma valores repetidos.
console.log(items);//Me devuelve el objeto de SET.

let items2 = new Set( [ 1,2,3,4,5,6,7,8,8,8,8,8,8] ); 
console.log( items.has(8) ); //Recorre el objeto de SET y me devuelve un boolean si encuentra lo que mando a buscar.

/******************************************************/
//Removiendo valores de los SETs

let items = new Set([1,2,3,4,5]);
console.log(items.size);
console.log(items);
items.delete( 3 );
console.log(items.size);
console.log(items);
items.delete( 3 ); //Si lo mando de nuevo, si existe lo borra sino, no hace nada.

items.clear(); //Borra TODO del SET

/******************************************************/
//forEach() en los SETs

let personas = new Set(['Fernando', 'Maria', 'Pedro']);
personas.forEach(function(valor, llave, setOriginal){
    console.log(valor, llave, setOriginal);
    console.log( personasl === setOriginal );
});

/******************************************************/

//Convertir un set en array

let numeros = [1,2,3,4,5,6,7];
//let numeros = [1,2,3,4,5,6,7,7,7,7,7,7,7,2,3,1];
let setNumeros = new Set(numeros);
console.log(setNumeros);
let arrayNumeros = [...setNumeros];  //Lo convierto con un SPREAD en un ARRAY.
//let arrayNumeros = eliminarDuplicados (numeros);
//console.log(arrayNumeros);

console.log(arrayNumeros);

function eliminaDuplicados( items ){
    let set = new Set(items);
    return [...set];
    // return [... new Set(items)];
}

/******************************************************/
//WeeckSets
/*
- En un weekset, ADD(), HAS(), REMOVE(), dan un error si enviamos
como parámetro algo que no sea un objeto.
- No tiene manera de hacer repeticiones o ciclos for in.
- Los weeksets no tienen keys(), values(), por lo que no hay manera
vía programación de saber cuantos elementos hay dentro.
- No tienen un for-each tampoco.
- No tiene propiedad size.
*/


/******************************************************/
//MAPS
/*
Nuevo tipo de colección de datos.
Tiene una llave y un valor. Key value pair
Tienen: 
- Has
- Delete
- Clear
- Size
- Iteraciones
*/
//Mapas y sus métodos
let mapa = new Map();
mapa.set('nombre', 'Maximiliano');
mapa.set('edad', 27);
mapa.set('apellido'); //Como no tiene nada, da undefined.
mapa.set(  ); // Tira doble undefined
mapa.set({},{},{hola:'hola mundo'}); 
console.log(mapa);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.get('nombre'));
console.log(mapa.get('edad'));
console.log(mapa.has('nombre'));//Si queremos verificar que la llave exista.
console.log(mapa.has('edad'));//Si queremos verificar que la llave exista.
mapa.delete('nombre'); //Elimino 'nombre'.
console.log(mapa.has('nombre'));
console.log(mapa.get('nombre'));

mapa.set('edad');
console.log(mapa);

mapa.clear(); //Elimina todo el mapa
console.log(mapa);

/******************************************************/

//Inicializaciones de los mapas.
let mapas = new Map( [ [ ['nombre','maximiliano'] ,['edad',27 ] ] ] ); //Así se inicializa por defecto el mapa.
// [['',''],['','']]
// Puedo pasarle un null undefined.
console.log(mapas);

let mapasDos = new Map( [ [ ['nombre','maximiliano'] ,[null, undefined ] ] ] );
console.log(mapasDos);
console.log(mapa.get(undefined));

/******************************************************/
//forEach() de los mapas
let mapa = new Map(['nombre', 'Maximiliano'], ['Edad', 27]);
mapa.forEach(function(value, llave, mapaOrigen){
    console.log(`Llave: ${llave}, valor: ${valor}, Edad: ${edad}`);
    console.log(mapaOrigen);
})
mapa.forEach( (valor, llave ) => console.log(`Llave: ${llave}, valor: ${valor}`));  //Lo mismo con arrow.

/******************************************************/
//Nuevo ciclo FOR - OF
let numeros = [100, 200, 300, 400, 500];

for (let numero of numeros) {
    console.log(numero); //Nuevo ciclo FOR
}


let personasForOf = [
    { nombre: 'Maximiliano', edad: 27 },
    { nombre: 'Fernando', edad: 26 },
    { nombre: 'Martin', edad: 25 },
    { nombre: 'Hernando', edad: 24 },
    { nombre: 'Arnando', edad: 23 }
];
for(per of personas){
    console.log(per.nombre, per.edad);
}

/******************************************************/
//Class

//ES5
function Persona( nombre ){
    this.nombre = nombre;
    this.gritarNombre = function(){
        console.log(this.nombre.toUpperCase());
    }
}
Persona.prototype.decirNombre = function(){
    console.log(this.nombre);
}
let fernando = new Persona ('Fernando');
fernando.decirNombre();
fernando.gritarNombre();

//ES6
class Persona{
    //Definición básica de una clase
    constructor(nombre){
        this.nombre = nombre;
    }
    //Persona.prototype.decirNombre es lo mismo
    decirNombre(){
        console.log(this.nombre);
    }
}
let fernando = new Persona ('Fernando'); 
fernando.decirNombre();
console.log( fernando instanceof Persona );
console.log( fernando instanceof Object );

console.log( typeof Persona ); //Devuelve que es una function.

/******************************************************/

//¿Por qué usar la sintaxis de clase?
/*
- Las clases funcionan muy parecido hasla declaración
- Todo el código dentro de una clase funciona de modo estricto -> strict mode
- Todos los metodos NO son enumerables.
- Todos los métodos internos, no tienen un constructor.
- Llamar una clase sin el new da error.
- Intentar renombrar el nombre de la clase dentro de algun método 
de la misma da error.
- Tienen metodos estaticos y privados.
*/

/******************************************************/

//Clases como expresiones
let PersonaClass = class{
    constructor(){
        this.nombre = '';
        this.edad = 30;
        this.direccion = 'lorem ';
    }
    decirNombre(){
        console.log('helloWorld');
        
    }
};

let fernandoClass = new PersonaClass();
console.log( typeof fernandoClass);
console.log( fernandoClass instanceof PersonaClass );

/******************************************************/

//Clases como parámetros
function creadorClases( definicionClase ){
    return new definicionClase();
}
let objeto = creadorClases( class{
    constructor(){
        this.nombre = undefined;
        this.edad = 30;
    }
    saludar(){
        console.log('Hola!');
        
    }
});
objeto.saludar();

class Cuadrado{
    constructor(lado){
        this.lado = lado;
    }
    getArea(){
        return this.lado * this.lado;
    }
};
function imprimirCuadrado( cuadrado ){
    if(!(cuadrado instanceof Cuadrado)){ //Le pregunto que si la definición de la clase es instancia de CUADRADO
        console.error('El parámetro enviado no es un cuadrado.');
        return;
    }
    console.log( cuadradro.getArea() );
    
}
let mesa = new Cuadrado(10);
//let mesa = new Cuadrado('1234'); -> Esto da error.
imprimirCuadrado(mesa);

/******************************************************/
//Miembros estáticos y métodos computados

let nombreMetodo = 'gritarNombre';
class Persona {
    constructor( nombre ){
        this.nombre = nombre;
    }
    decirNombre(){
        console.log( this.nombre );
        
    }
    //Computado
    /*
    Son métodos cuyo nombre se puede definir mediante una variable.
    */
    [ nombreMetodo ](){
        console.log(this.nombre.toUpperCase());
    }


    //Estático
    /*
    Es un método que nos permite a nosotros utilizar un método dentro de la misma sin instanciar la clase.
    */
   static crear( nombre ){
       return new Persona ( nombre );
   }
}
let yo = Persona.crear('Maximiliano'); //Static
console.log(yo); //Static

/******************************************************/
//Herencia de las clases
/* 
Transferir métodos y props a un hijo.  
*/
class Rectangulo{
    constructor(alto,largo){
        this.alto = alto;
        this.largo = largo;
    }
    getArea(){
        return this.alto * this.largo;
    }
}
let rectangulo = new Rectangulo(3, 2);
console.log( rectangulo.getArea() );


class Cuadrado extends Rectangulo{ //Con EXTENDS le digo que es hija de RECTANGULO
    constructor(alto){
        //super();    -> Si lo dejo así, me trae el constructor de la misma forma que lo tiene el padre.
        super( alto, alto ); //Acá solo me trae el valor de ALTO
    }
    getArea(){ 
        return this.alto * this.alto; //Así sobre escribo
        //return super.getArea(); Así uso el método del PADRE
    }
}
let cuadradoClass = new Cuadrado (3);
console.log( cuadradoClass.getArea() );
console.log( cuadrado instanceof Cuadrado ); //¿Que devuelve esto?
console.log( cuadrado instanceof Rectangulo ); //¿Que devuelve esto?

/******************************************************/
//Promesas

function tareaAsincrona(){
    let promesa = new Promise( (resolve, reject) => {
        
        setTimeout( function(){
            console.log('Proceso asincrono terminado');
            reject();
            //resolve(); me devuelve todo bien.
        },1300 )
    }) //Por convencion son así los nombres
    return promesa;
    /*
    Espera dos argumentos
    - El primero cuando todo funciona bien y lo segundo cuando algo falla.
    */
}
tareaAsincrona().then( 
    function(){ 
        console.log('todo ok!'); //primer parametro es RESOLVE
    }, 
    function(){ 
        console.log('todo mal!'); //segundo parametro es REJECT
    } 
);
/******************************************************/









