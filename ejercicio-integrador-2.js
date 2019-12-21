let usuarios = [
  ["0", "Carla", "1545628984", "carla@gmail.com"],
  ["1", "Pedro", "1545251245", "pedro@gmail.com"],
  ["2", "Lucas", "1523357849", "lucas@gmail.com"],
  ["3", "Ana", "15789456", "ana@gmail.com"],
];

let accion = "";
let realizarNuevamente = "";
let usuarioAAgregar = "";
let usuarioModificado = "";


while (accion !== "SALIR") {
  accion = prompt(`¡Bienvenido!
Por favor, elija una de las siguientes operaciones:
- AGREGAR un usuario
- OBTENER un usuario
- LISTAR todos los usuarios
- MODIFICAR un usuario
- ELIMINAR un usuario
- SALIR del programa`);
  do {
    if (accion.toUpperCase() === "AGREGAR") {
      let nombreIngresado = prompt("Por favor ingrese el nombre");
      let telefonoIngresado = prompt("Por favor ingrese el número de teléfono");
      let emailIngresado = prompt("Por favor ingrese el e-mail");
      usuarioAAgregar = [
        `${usuarios.length}`,
        nombreIngresado,
        telefonoIngresado,
        emailIngresado
      ];
      let confirmacionUsuarioAAgregar = prompt(`Nuevo usuario ingresado: 
      - ${nombreIngresado} 
      - ${telefonoIngresado} 
      - ${emailIngresado} 
      ¿Desea confirmar la operación?`);
      if (confirmacionUsuarioAAgregar.toUpperCase() === "SI") {
        usuarios.push(usuarioAAgregar);
        alert("La operación ha sido exitosa");
      }
      if (confirmacionUsuarioAAgregar.toUpperCase() === "NO") {
        alert("La operación se ha cancelado");
        break;
      }
      realizarNuevamente = prompt("¿Desea realizar esta operación nuevamente?");

    }

    if (accion.toUpperCase() === "OBTENER") {
      let datoABuscar = prompt(`Selecciona una opción de búsqueda
    - ID
    - NOMBRE
    - TELEFONO
    - EMAIL
    `);
      if (datoABuscar.toUpperCase() === "ID") {
        let idABuscar = prompt("Ingrese el ID a buscar");
        for (let i = 0; i < usuarios.length; i++) {
          for (let j = 0; j < usuarios[i].length; j++) {
            if (idABuscar === usuarios[i][j]) {
              alert(`Los datos del usuario son:
            - ID: ${usuarios[i][0]}
            - NOMBRE: ${usuarios[i][1]}
            - TELÉFONO: ${usuarios[i][2]}
            - EMAIL: ${usuarios[i][3]}`);
            }
          }
        }
      } else if (datoABuscar.toUpperCase() === "NOMBRE") {
        let nombreABuscar = prompt("Ingrese el NOMBRE a buscar");
        for (let i = 0; i < usuarios.length; i++) {
          for (let j = 0; j < usuarios[i].length; j++) {
            if (nombreABuscar === usuarios[i][j]) {
              alert(`Los datos del usuario son:
            - ID: ${usuarios[i][0]}
            - NOMBRE: ${usuarios[i][1]}
            - TELÉFONO: ${usuarios[i][2]}
            - EMAIL: ${usuarios[i][3]}`);
            }
          }
        }
      } else if (datoABuscar.toUpperCase() === "TELEFONO") {
        let telefonoABuscar = prompt("Ingrese el TELEFONO a buscar");
        for (let i = 0; i < usuarios.length; i++) {
          for (let j = 0; j < usuarios[i].length; j++) {
            if (telefonoABuscar === usuarios[i][j]) {
              alert(`Los datos del usuario son:
            - ID: ${usuarios[i][0]}
            - NOMBRE: ${usuarios[i][1]}
            - TELÉFONO: ${usuarios[i][2]}
            - EMAIL: ${usuarios[i][3]}`);
            }
          }
        }
      } else if (datoABuscar.toUpperCase() === "EMAIL") {
        let emailABuscar = prompt("Ingrese el EMAIL a buscar");
        for (let i = 0; i < usuarios.length; i++) {
          for (let j = 0; j < usuarios[i].length; j++) {
            if (emailABuscar === usuarios[i][j]) {
              alert(`Los datos del usuario son:
            - ID: ${usuarios[i][0]}
            - NOMBRE: ${usuarios[i][1]}
            - TELÉFONO: ${usuarios[i][2]}
            - EMAIL: ${usuarios[i][3]}`);
            }
          }
        }
      } else {
        alert("El dato ingresado no existe");
        break;
      }
      realizarNuevamente = prompt("¿Desea realizar esta operación nuevamente?");
    }

    if (accion.toUpperCase() === "LISTAR") {
      for (let i = 0; i < usuarios.length; i++) {
        alert(`
        - ID: ${usuarios[i][0]}
        - NOMBRE: ${usuarios[i][1]}
        - TELÉFONO: ${usuarios[i][2]}
        - EMAIL: ${usuarios[i][3]}
        ---------------------------------
        `);
      }
      realizarNuevamente = prompt("¿Desea realizar esta operación nuevamente?");
    }

    if (accion.toUpperCase() === "MODIFICAR") {
      let idAModificar = prompt("Por favor, ingrese el ID a modificar");
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i][0] === idAModificar) {
          let nombreNuevo = prompt(
            "Por favor ingrese el nuevo nombre del usuario"
          );
          let telefonoNuevo = prompt(
            "Por favor ingrese el nuevo teléfono del usuario"
          );
          let emailNuevo = prompt("Por favor ingrese el nuevo email del usuario");

          usuarioModificado = [
          idAModificar,
          nombreNuevo,
          telefonoNuevo,
          emailNuevo          
        ];

          let confirmacionUsuarioAModificar = prompt(`
       Estos son los nuevos datos del usuario:
      - ID: ${idAModificar}
      - NOMBRE: ${nombreNuevo}
      - TELÉFONO: ${telefonoNuevo}
      - EMAIL: ${emailNuevo}
       ------------------------------------------------------
        ¿Desea confirmar esta operación?
       `);

          if (confirmacionUsuarioAModificar.toUpperCase() === "SI") {
            usuarios[i] = usuarioModificado;
            alert("La operación ha sido exitosa")
            console.log(usuarios)
          }

          if (confirmacionUsuarioAModificar.toUpperCase() === "NO") {
            alert("La operación se ha cancelado")
          }
        }
      }
      realizarNuevamente = prompt("¿Desea realizar esta operación nuevamente?");
    }

    if (accion.toUpperCase() === "SALIR") {
      alert("¡Gracias por visitarnos!");
    }
  } while (realizarNuevamente.toUpperCase() !== "NO");
}
