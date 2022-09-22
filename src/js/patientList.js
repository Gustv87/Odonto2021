// const url = 'https://dentalgroup-hn-api.herokuapp.com/api/';
const url = 'http://localhost:8081/api/';

let contenido = document.querySelector('#contenido');
let resultados = '';

// Funcion para mostrar los resultados
const mostrar = (pacientes) => {
	pacientes.forEach((paciente) => {
		resultados += `
		<tr>
		<td style="display:none">${paciente.id}</td>
		<td>${paciente.nombre}</td>
		<td>${paciente.apellidos}</td>
		<td>${paciente.edad}</td>
		<td class="text-center"><button href=() class="btnEditar btn btn-primary">Editar </button></td>
		<td class="text-center"><a class="btnEliminar btn btn-danger">Eliminar </a></td>		
		</tr>`;
	});
	contenido.innerHTML = resultados;
};
//Mostrar pacientes
fetch(`${url}pacientes`)
	.then((response) => response.json())
	.then((data) => mostrar(data))
	.catch((error) => console.log(error));

const on = (element, event, selector, handler) => {
	element.addEventListener(event, (e) => {
		if (e.target.closest(selector)) {
			handler(e);
		}
	});
};

//Actualizar Pacientes
let idForm = 0

on(document, 'click', '.btnEditar', e => {
	const fila = e.target.parentNode.parentNode
	const idForm = fila.children[0].innerHTML
	console.log(idForm);
	window.location.href= `../../editPatient.html?id=${idForm}`
})

//Eliminar paciente

on(document, 'click', '.btnEliminar', (e) => {
	const fila = e.target.parentNode.parentNode;
	const id = fila.firstElementChild.innerHTML;
	alertify.confirm(
		'Quere eliminar este paciente de la base de datos?',
		function () {
			fetch(`${url}pacientes/` + id, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then(() => location.reload());
			// alertify.success('Ok');
		},
		function () {
			alertify.error('Cancel');
		}
	);
});

