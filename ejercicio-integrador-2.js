const usuarios = [
  ["0", "Carla", "1545628984", "carla@gmail.com"],
  ["1", "Pedro", "1545251245", "pedro@gmail.com"],
  ["2", "Lucas", "1523357849", "lucas@gmail.com"],
  ["3", "Ana", "15789456", "ana@gmail.com"]
];

let accion = "";
let realizarNuevamente = ""; 

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
    let usuarioAAgregar = [`${usuarios.length}`, nombreIngresado, telefonoIngresado, emailIngresado];
    let confirmacionUsuarioAAgregar = prompt(`Nuevo usuario ingresado: 
      - ${nombreIngresado} 
      - ${telefonoIngresado} 
      - ${emailIngresado} 
      ¿Desea confirmar la operación?`);
    if (confirmacionUsuarioAAgregar.toUpperCase() === "SI") {
      usuarios.push(usuarioAAgregar);
      console.log(usuarios)
      alert("La operación ha sido exitosa");
    }
    if (confirmacionUsuarioAAgregar.toUpperCase() === "NO") {
      alert("La operación se ha cancelado");
    }
    realizarNuevamente = prompt("¿Desea realizar esta operación nuevamente?")
  }
}
while (realizarNuevamente.toUpperCase() !== "NO")

  if (accion.toUpperCase() === "SALIR") {
    alert("¡Gracias por visitarnos!");
    break;
  
}
}