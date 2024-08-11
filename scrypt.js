/* 1. Crear todo el código usando ES5. (1 punto)
2. Crear una función constructora para cada objeto. (2 puntos)
3. Instanciar cada objeto utilizando la instrucción new. (1 punto)
4. Implementar métodos getters y setters para poder acceder y modificar los datos de
los trabajadores. (3 puntos)
5. Crear un método mediante la propiedad prototype que permita buscar los datos de
los trabajadores por nombre y otro método que permita mostrar todos los datos de
los trabajadores registrados. (3 puntos)
Requerimiento opcional
1. Genera un formulagit rio en HTML que permita ingresar los datos del proyecto y
trabajador, para luego ser instanciados en los objetos de la función constructoras
El trabajo debe ser subido en formato zip, rar o archivo de texto con URL del repositorio
 */

class Proyecto {
  nombre_proyecto;
  trabajador;
  constructor(nombre_proyecto, trabajador) {
    this.nombre_proyecto = nombre_proyecto;
    this.trabajador = trabajador;
  }

  get nombre_proyecto() {
    return this.nombre_proyecto;
  }

  set nombre_proyecto(nombre_proyecto) {
    this.nombre_proyecto = nombre_proyecto;
  }

  get trabajador() {
    return this.trabajador;
  }

  set trabajador(trabajador) {
    this.trabajador = trabajador;
  }
}

class Trabajador {
  nombre;
  rut;
  cargo;
  constructor(nombre, rut, cargo) {
    this.nombre = nombre;
    this.rut = rut;
    this.cargo = cargo;
  }

  get nombre() {
    return this.nombre;
  }
  set nombre(nombre) {
    this.nombre = nombre;
  }

  get rut() {
    return this.rut;
  }
  set rut(rut) {
    this.rut = rut;
  }

  get cargo() {
    return this.cargo;
  }
  set cargo(cargo) {
    this.cargo = cargo;
  }
}

let trabajador1 = new Trabajador("María", "456789-9", "Gerente Gral");
let proyecto1 = new Proyecto("Proyecto1", trabajador1);

Trabajador.prototype.buscarPorNombre = function (nombre) {
  return this.nombre === nombre;
};

Trabajador.prototype.mostrarDatos = function () {
  return `Nombre: ${this.nombre}, RUT: ${this.rut}, Cargo: ${this.cargo}`;
};

function crearObjetos() {
  const nombreProyecto = document.getElementById("nombre_proyecto").value;
  const nombreTrabajador = document.getElementById("nombre_trabajador").value;
  const rutTrabajador = document.getElementById("rut_trabajador").value;
  const cargoTrabajador = document.getElementById("cargo_trabajador").value;

  let trabajador = new Trabajador(
    nombreTrabajador,
    rutTrabajador,
    cargoTrabajador
  );
  let proyecto = new Proyecto(nombreProyecto, trabajador);

  console.log(proyecto);
  console.log(trabajador.mostrarDatos());
}
