// Prototipo de la función
function funcionEjemplo(){
    // document.getElementById() es una función que permite tomar elementos del documento (HTML) para 
    // leer y modificar su contenido y/o propiedades. 
    textoParrafo = document.getElementById("texto").innerHTML;
    textoResultado = document.getElementById("palabrasResultado");

    /* La letra g al último de la expresión regular signigica "global" y es para que busque 
    coincidencias con la expresión regular en todo el texto, si no se usa solo buscará en el 
    primer renglón del texto. */
    const expresionRegular = /\b[aA]\w*[^aeiouAEIOU\s]\b/g;
    /* console.log() es para imprimir en consola. Usar F12 y seleccionar la pestaña "Console" 
    para ver la consola de JavaScript en Firefox y Chrome*/
    arregloPalabras = textoParrafo.match(expresionRegular);
    console.log(arregloPalabras);
    arregloPalabras.forEach(function (item) {
        textoResultado.innerHTML = textoResultado.innerHTML + item + ", ";
    });
}

// Ejecutar función
funcionEjemplo();