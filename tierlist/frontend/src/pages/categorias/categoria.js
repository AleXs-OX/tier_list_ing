export default function categoria(){
    var URLactual = window.location;
    var usuario = URLactual.pathname.substring( URLactual.pathname.lastIndexOf('/')+1);

    return (
        <p>Hola mundo de {usuario} </p>
    );
}