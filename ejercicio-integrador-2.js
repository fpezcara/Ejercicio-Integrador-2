const usuarios = [
  ["Carla", "1545628984", "carla@gmail.com"],
  ["Pedro", "1545251245", "pedro@gmail.com"],
  ["Lucas", "1523357849", "lucas@gmail.com"],
  ["Ana", "15789456", "ana@gmail.com"]
];

let accion = "";

while (accion == !"SALIR") {
  let accion = prompt(`¡Bienvenido!
Por favor, elija una de las siguientes operaciones:
- AGREGAR un usuario
- OBTENER un usuario
- LISTAR todos los usuarios
- MODIFICAR un usuario
- ELIMINAR un usuario
- SALIR del programa`);

  if (accion.toUpperCase() === "AGREGAR") {
    let nombreIngresado = prompt("Por favor ingrese el nombre");
    let telefonoIngresado = prompt("Por favor ingrese el número de teléfono");
    let emailIngresado = prompt("Por favor ingrese el e-mail");
    let usuarioAAgregar = `
      - ${nombreIngresado} 
      - ${telefonoIngresado} 
      - ${emailIngresado}`;
    let confirmacionUsuarioAAgregar = prompt(`Nuevo usuario ingresado: 
    ${usuarioAAgregar} 
      ¿Desea confirmar la operación?`);
    if (confirmacionUsuarioAAgregar.toUpperCase() === "SI") {
      usuarios.push(usuarioAAgregar);
      alert("La operación ha sido exitosa");
    }
    if (confirmacionUsuarioAAgregar.toUpperCase() === "NO") {
      alert("La operación se ha cancelado");
    }

    let realizarNuevamente = prompt("¿Desea realizar esta acción nuevamente?");
    if (realizarNuevamente.toUpperCase() === "SI") {
      for (let i = 0; i < usuarios.length; i++) {
        let nombreIngresado = prompt("Por favor ingrese el nombre");
        let telefonoIngresado = prompt(
          "Por favor ingrese el número de teléfono"
        );
        let emailIngresado = prompt("Por favor ingrese el e-mail");
        let usuarioAAgregar = `
      - ${nombreIngresado} 
      - ${telefonoIngresado} 
      - ${emailIngresado}`;
        let confirmacionUsuarioAAgregar = prompt(`Nuevo usuario ingresado: 
    ${usuarioAAgregar} 
      ¿Desea confirmar la operación?`);
        if (confirmacionUsuarioAAgregar.toUpperCase() === "SI") {
          usuarios.push(usuarioAAgregar);
          alert("La operación ha sido exitosa");
        }
        if (confirmacionUsuarioAAgregar.toUpperCase() === "NO") {
          alert("La operación se ha cancelado");
        }
        if (realizarNuevamente.toUpperCase() === "NO") {
          accion = prompt(`¡Bienvenido!
  Por favor, elija una de las siguientes operaciones:
  - AGREGAR un usuario
  - OBTENER un usuario
  - LISTAR todos los usuarios
  - MODIFICAR un usuario
  - ELIMINAR un usuario
  - SALIR del programa`);
        }
      }
    }
  }
  if (accion.toUpperCase() === "SALIR") {
    alert("¡Gracias por visitarnos!");
  }
}
