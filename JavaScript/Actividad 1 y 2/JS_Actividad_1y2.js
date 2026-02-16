let nota1 = parseFloat(prompt("Introduce la primera nota:")); //Pedimos las notas
let nota2 = parseFloat(prompt("Introduce la segunda nota:"));
let nota3 = parseFloat(prompt("Introduce la tercera nota:"));

let media = (nota1 + nota2 + nota3) / 3; //Media de las 3 notas

console.log("La nota media numerica es: " + media.toFixed(2)); //Muestra la nota media

let calificacion;
    if (media < 5) {
        calificacion = "Suspenso";
    } else if (media >= 5 && media < 7) {
        calificacion = "Aprobado";
    } else if (media >= 7 && media < 9) {
        calificacion = "Notable";
    } else if (media >= 9) {
        calificacion = "Excelente";
    }

console.log("Resultado final: " + calificacion); //Muestra la calificacion