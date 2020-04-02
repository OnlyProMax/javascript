//callbacks
const getUsuarioById = (id, callback) =>{
    const usuario = {
        nombre: 'Maximiliano',
        id
    };
    callback( null, usuario );
}

getUsuarioById( 1, (err, user) => {
    console.log('Usuario de base de datos', user);
} );