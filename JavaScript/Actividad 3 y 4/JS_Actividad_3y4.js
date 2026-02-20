let asignaturasPrimero = ["Lenguajes", "Sistemas", "Programacion"]; //Array asignaturas Primer curso
let asignaturasSegundo = ["Sistemas de Gestion", "Interfaces", "Programacion Multimedia"]; //Array asignaturas Segundo curso
let asignaturasDAM = [asignaturasPrimero, asignaturasSegundo]; //Juntamos los array de asignaturas de Primero y Segundo

//Muestra las asignaturas de DAM
console.log("----INICIO----");
console.log("Primer año:", asignaturasPrimero);
console.log("Segundo año:", asignaturasSegundo);
console.log("DAM:", asignaturasDAM);

function asignaturaNueva() { //Funcion de la nueva asignatura
    let novaAssignatura = prompt("Nova Assignatura");
    asignaturasPrimero.push(novaAssignatura);
    let fecha = new Date;
    console.log("Fecha:",fecha.toLocaleString());
    console.log("Asignatura actualizada:", asignaturasPrimero);
}

function borrarAsignatura() { //Funcion de borrar asignatura
    let eliminarAsignatura = prompt("Eliminar Asignatura:");
    if (eliminarAsignatura) {
        let eliminada = false;
        for (let i = 0; i < asignaturasPrimero.length; i++) { //Asignaturas de primero
            if (asignaturasPrimero[i].toLowerCase() === eliminarAsignatura.toLowerCase()) {
                asignaturasPrimero.splice(i, 1);
                eliminada = true;
                i--; 
            }
        }

        for (let i = 0; i < asignaturasSegundo.length; i++) { //Asignaturas de segundo
            if (asignaturasSegundo[i].toLowerCase() === eliminarAsignatura.toLowerCase()) {
                asignaturasSegundo.splice(i, 1);
                eliminada = true;
                i--; 
            }
        }

        if (eliminada) {
            console.log("Asignatura eliminada perfectamente.");
        } else {
            console.log("No esta la asignatura");
        }

        console.log("Asignaturas de Primero:", asignaturasPrimero);
        console.log("Asignaturas de Segundo:", asignaturasSegundo);
    }
}

function buscarAsignatura() { //Funcion buscar asignatura
    let buscar = prompt("Buscar Asignatura:");
    if (buscar) {
        let encontrada = false;
        for (let i = 0; i < asignaturasPrimero.length; i++) { //Asignaturas de primero
            if (asignaturasPrimero[i].toLowerCase() === buscar.toLowerCase()) {
                encontrada = true;
            }
        }

        for (let i = 0; i < asignaturasSegundo.length; i++) { //Asignaturas de segundo
            if (asignaturasSegundo[i].toLowerCase() === buscar.toLowerCase()) {
                encontrada = true;
            }
        }

        if (encontrada) {
            console.log("La asignatura existe en el curso.");
        } else {
            console.log("La asignatura no exsiste en el curso.");
        }
    }
}
