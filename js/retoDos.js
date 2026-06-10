const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20 },
  { id: 2, nombre: 'Juan', edad: 22 },
  { id: 3, nombre: 'María', edad: 21 },
];

function buscarId(idEstudiante) {
  return new Promise((resolve, reject)=>{

    let estudianteEncontrado = null;

    estudiantes.forEach((estudiante)=>{
      if (estudiante.id == idEstudiante) {
        estudianteEncontrado = estudiante;
      }
    });

    setTimeout(()=>{
      if (estudianteEncontrado) {
        resolve(estudianteEncontrado);
      } else {
        reject(`Error: No existe un estudiante con el ID ${idEstudiante}.`);
      }
    }, 1000);
  });
}

let id = prompt("Ingrese el ID del estudiante");

buscarId(id)
  .then(estudiante => {
    console.log(`Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}`);
  })
  .catch(error => {
    console.log(error);
  });