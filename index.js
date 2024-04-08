var tareas = []

var botonBorrarTodo = document.getElementById("btn-borrar")
botonBorrarTodo.onclick = borrarTodasLasTareas
function agregarUnaTarea (texto) {
tareas.push(texto)
agregarTareaAlDOM(texto)
}

function borrarTodasLasTareas () {
  tareas = []
  vaciarTareasDelDOM()
}

function agregarTareaAlDOM (texto) {
  var contenedor = document.getElementById("contenedorTareas")
  var parrafoNuevo = document.createElement("p")
  parrafoNuevo.className = "tarea"
  parrafoNuevo.textContent = texto
  contenedor.appendChild(parrafoNuevo)
}

function vaciarTareasDelDOM () {
  var contenedor = document.getElementById("contenedorTareas")
  contenedor.innerHTML = ""
}