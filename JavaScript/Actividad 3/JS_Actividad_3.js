let asignaturasPrimero = ["Lenguajes", "Sistemas", "Programacion"];
let asignaturasSegundo = ["Sistemas de Gestion", "Interfaces", "Programacion Multimedia"];

let asignaturasDAM = [asignaturasPrimero, asignaturasSegundo]; //Juntamos los array de asignaturas de Primero y Segundo

console.log("Asignaturas DAM: " + asignaturasDAM); //Muestra las asignaturas de DAM

let nuevaAsignatura = prompt("Introduce una nueva asignatura para los de primero:"); //Pedimos una nueva asignatura para primero
asignaturasPrimero.push(nuevaAsignatura);

asignaturasDAM = [asignaturasPrimero, asignaturasSegundo]; //Actualizamos el array
console.log("Las asignaturas se han actualizado al añadir la nueva asignatura: " + asignaturasDAM); //Muestra las asignaturas actualizadas


let eliminacionAsignatura = asignaturasSegundo.indexOf("Interfaces"); //Quitamos Interfaces de las asignaturas de segundo
    if (eliminacionAsignatura !== -1) {
        asignaturasSegundo.splice(eliminacionAsignatura, 1);
    }
asignaturasDAM = [asignaturasPrimero, asignaturasSegundo];
console.log("Las asignaturas se han actualizado tras eliminar la asignatura: " + asignaturasDAM); //Muestra las asignaturas actualizadas

let buscarAsignatura = prompt("Introduce el nombre de una asignatura:"); //Comprobamos si la asignatura introducida esta en el ciclo
    if (asignaturasDAM.includes(buscarAsignatura)) {
        console.log("La asignatura " + buscarAsignatura + " esta en el ciclo."); //Esta en el ciclo
    } else {
        console.log("La asignatura " + buscarAsignatura + " no esta en el ciclo."); //No esta en el ciclo
    }