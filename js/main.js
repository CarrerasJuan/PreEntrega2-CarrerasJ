//Carrito de compras
//Vamos a vender cursos
const cursos = [
    { nombre: "javascript", precio: 45000},
    { nombre: "python", precio: 35000},
    { nombre: "reactjs", precio: 45000},
    { nombre: "html", precio: 28000},
    { nombre: "nodejs", precio: 50000},
];

let carrito = []; //Carrito vacio

let seleccion = prompt ("Bienvenido/a CoderJauz desea contratar algun curso?"); //Generamos la bienvenida.

//En el While condicionamos al cliente para poder seleccionar el curso.
while( seleccion != "si" && seleccion != "no") {
    alert ("Por favor ingresa si o no")
    seleccion = prompt ("Bienvenido/a CoderJauz desea contratar algun curso?");
}

if (seleccion == "si") {
    alert("a continuacion nuestra lista de Cursos!");
    let todoslosCursos= cursos.map (
        (cursos) => cursos.nombre+" "+ cursos.precio+ "$"
        );
    alert (todoslosCursos.join (" - "));
} else if (seleccion == "no") {
    alert ("¡Gracias por interesarte, vuelve cuando quieras!"); //En este else if condicionamos al cliente a que si es no genere un break con una gentil despedida.
}
while(seleccion != "no"){
    let cursos = prompt ("¡Agrega al carrito el curso que desees comenzar!");
    let precio = 0

    if( cursos== "javascript" || cursos == "python" || cursos == "reactjs" || cursos == "html" || cursos == "nodejs") {
        switch (cursos) {
            case "javascript":
                precio = 45000;
                break;
            case "python":
                precio = 35000;
                break;
            case "reactjs":
                precio = 45000;
                break;
            case "html":
                precio = 28000;
                break;
            case "nodejs":
                precio = 45000;
                break;
                default:
                break;
        }
    let unidades = parseInt (prompt("¿Cuantos semestres desea realizar?"))
    carrito.push({cursos, unidades, precio})
    console.log(carrito);
    } else {
        alert("Disculpe no disponemos de ese curso")
    }

    seleccion = prompt("Desea contratar algun otro curso??")

    //Con carritoForEach le muestro por consola el recorrido del carrido en su totalidad.
    while(seleccion === "no"){
        alert("Gracias por confiar en CoderJauz hasta pronto!!")
        carrito.forEach((carritoFinal) =>{
            console.log(`producto: ${carritoFinal.cursos}, unidades: ${carritoFinal.unidades},
            Total a pagar por semestre ${carritoFinal.unidades * carritoFinal.precio}`);
        })
    break;
    }
}

//Metodo para sumar las unidades que agrega el cliente dentro del array y asi multiplicar por su precio total.
//RESULTADO FINAL LO MUESTA POR CONSOLA.
const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`Su total a pagar por su compra es: ${total}`);