// const url = 'https://dentalgroup-hn-api.herokuapp.com/api/';
const url = 'http://localhost:8080/api/'

let contenido = document.querySelector('#contenido');

function getPacientes() {
	fetch(`${url}pacientes`)
		.then((res) => res.json())
		.then((datos) => {
			tabla(datos);
		});
}
getPacientes();

function tabla(datos) {
	console.log(datos);
	contenido.innerHTML = '';
	for (let valor of datos) {
		contenido.innerHTML += `
    <tr>
                
                <td>${valor.nombre}</td>
                <td>${valor.apellidos}</td>
                <td>${valor.edad}</td>
                <td><a style=" padding-left:12px ;" href="../newPatient.html"><i class="fas fa-user-edit"></i> </a></td>
                <td><a style="color:red; padding-left:25px ;" href="../editPatient.html"><i class="fas fa-trash-alt"></i></a></td>
     </tr>`;
	}
}
