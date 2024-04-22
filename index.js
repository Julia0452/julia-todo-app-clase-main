var tareas = []

var botonBorrarTodo = document.getElementById("btn-borrar")
botonBorrarTodo.onclick = borrarTodasLasTareas
function agregarUnaTarea (texto) {
tareas.push(texto)
agregarTareaAlDOM(texto)
guardarEnLocalStorage()
}

var formulario = document.getElementById("formulario")
formulario.onsubmit = manejarEnviodeFormulario

function borrarTodasLasTareas () {
  tareas = []
  vaciarTareasDelDOM()
  guardarEnLocalStorage()
}

function agregarTareaAlDOM (texto) {
  var contenedor = document.getElementById("contenedorTareas")
  var parrafoNuevo = document.createElement("p")
  parrafoNuevo.className = "tarea"
  parrafoNuevo.textContent = texto
  contenedor.appendChild(parrafoNuevo)
  parrafoNuevo.onclick = manejarClickAlParrafo
}

function vaciarTareasDelDOM () {
  var contenedor = document.getElementById("contenedorTareas")
  contenedor.innerHTML = ""
}

function manejarEnviodeFormulario (event) {
event.preventDefault ()
var tarea = formulario.renglon.value
agregarUnaTarea(tarea)
formulario.renglon.value = ""
}

function manejarClickAlParrafo (event) {
var tarea = event.target.textContent
borrarItemDeLaLista(tarea)
event.target.remove()
guardarEnLocalStorage()
}

function borrarItemDeLaLista (tarea) {
var indice = tareas.indexOf(tarea)
tareas.splice(indice, 1)
}
function guardarEnLocalStorage () {
  var tareasEnTexto = JSON.stringify(tareas)
  localStorage.setItem("tareas", tareasEnTexto)
}