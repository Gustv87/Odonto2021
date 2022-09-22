const url = 'http://localhost:8081/api/';
// const url = 'https://dentalgroup-hn-api.herokuapp.com/api/';
$(document).ready(function () {
	let params = new URLSearchParams(document.location.search.substring(1));
	let id = params.get('id');

	fetch(`${url}pacientes/${id}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			//Datos generales
			document.getElementById('fullName').value = data.nombre;
			document.getElementById('lastName').value = data.apellidos;
			document.getElementById('age').value = data.edad;
			document.getElementById('gender').value = data.genero;
			document.getElementById('address').value = data.direccion;
			document.getElementById('placeOfBirth').value = data.lugarNacimiento;

			$('#dateOfBirth').val(data.fechaNacimiento.substring(0, 10));

			//Antecedentes Clinicos
			document.getElementById('antecedentesFamiliares').value = data.antecedentesFamiliares;
			document.getElementById('motivoConsulta').value = data.motivoConsulta;
			document.querySelector('#dolor').value = data.dolor;
			document.querySelector('#control').value = data.control;
			document.querySelector('#sangradoEncias').value = data.sangradoEncias;
			document.querySelector('#restauracionProtesica').value = data.restauracionProtesica;
			document.querySelector('#otro').value = data.otro;
			document.querySelector('#aspectoPaciente').value = data.aspecto;
			document.querySelector('#cara').value = data.cara;
			document.querySelector('#labios').value = data.labiosComisura;
			document.querySelector('#palpacion').value = data.palpacionGanglios;
			document.querySelector('#ganglios').value = data.ganglios;
			document.querySelector('#atm').value = data.atm;
			document.querySelector('#alta').value = data.alta;
			document.querySelector('#baja').value = data.baja;
			document.querySelector('#tratamientoMedico').value = data.tratamientoMedico;
			document.querySelector('#tomaMedicamentos').value = data.tomaMedicamento;
			document.querySelector('#cirugias').value = data.cirugias;
			document.querySelector('#drogas').value = data.consumeDrogas;
			document.querySelector('#penicilina').value = data.penicilina;
			document.querySelector('#anestecia').value = data.anestecia;
			document.querySelector('#aspirina').value = data.aspirina;
			document.querySelector('#yodo').value = data.yodo;
			document.querySelector('#merthiolate').value = data.merthiolate;
			document.querySelector('#otrasAlergias').value = data.otrasAlergias;
		})

		.catch((error) => console.log(error));
});
function actualizar() {
	let params = new URLSearchParams(document.location.search.substring(1));
	let id = params.get('id');
	fetch(`${url}pacientes/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			//Datos generales

			nombre: document.getElementById('fullName').value,
			apellidos: document.getElementById('lastName').value,
			edad: document.getElementById('age').value,
			genero: document.getElementById('gender').value,
			direccion: document.getElementById('address').value,
			lugarNacimiento: document.getElementById('placeOfBirth').value,
			fechaNacimiento: $('#dateOfBirth').val(),
			//Antecedentes Clinicos
			antecedentesFamiliares: document.getElementById('antecedentesFamiliares').value,
			motivoConsulta: document.getElementById('motivoConsulta').value,
			dolor: document.querySelector('#dolor').value,
			control: document.querySelector('#control').value,
			sangradoEncias: document.querySelector('#sangradoEncias').value,
			restauracionProtesica: document.querySelector('#restauracionProtesica').value,
			otro: document.querySelector('#otro').value,
			aspecto: document.querySelector('#aspectoPaciente').value,
			cara: document.querySelector('#cara').value,
			labiosComisura: document.querySelector('#labios').value,
			palpacionGanglios: document.querySelector('#palpacion').value,
			ganglios: document.querySelector('#ganglios').value,
			atm: document.querySelector('#atm').value,
			alta: document.querySelector('#alta').value,
			baja: document.querySelector('#baja').value,
			tratamientoMedico: document.querySelector('#tratamientoMedico').value,
			tomaMedicamento: document.querySelector('#tomaMedicamentos').value,
			cirugias: document.querySelector('#cirugias').value,
			consumeDrogas: document.querySelector('#drogas').value,
			penicilina: document.querySelector('#penicilina').value,
			anestecia: document.querySelector('#anestecia').value,
			aspirina: document.querySelector('#aspirina').value,
			yodo: document.querySelector('#yodo').value,
			merthiolate: document.querySelector('#merthiolate').value,
			otrasAlergias: document.querySelector('#otrasAlergias').value,
			anemia: document.querySelector('#anemia').value,
			leucemia: document.querySelector('#leucemia').value,
			// 	document.querySelector('#hemofilia').value,
			// 	document.querySelector('#deficitVit').value,
			// 	document.querySelector('#sangradoExcesivo').value,
			// 	document.querySelector('#vih').value,
			// 	document.querySelector('#retrovirales').value,
			// 	document.querySelector('#embarazada').value,
			// 	document.querySelector('#anticonceptivos').value,
			// 	document.querySelector('#morderse').value,
			// 	document.querySelector('#fumar').value,
			// 	document.querySelector('#citricos').value,
			// 	document.querySelector('#morderObjetos').value,
			// 	document.querySelector('#apretamiento').value,
			// 	document.querySelector('#respiracionBucal').value,
			// 	document.querySelector('#venereas').value,
			// 	document.querySelector('#corazon').value,
			// 	document.querySelector('#hepatitis').value,
			// 	document.querySelector('#fiebreReumatica').value;
			// document.querySelector('#asma').value;
			// document.querySelector('#diabetes').value;
			// document.querySelector('#ulcera').value;
			// document.querySelector('#tiroides').value;
			// document.querySelector('#limitacionBoca').value;
			// document.querySelector('#ruidoMandibular').value;
			// document.querySelector('#herpes').value,
		}),
	})
		.then((res) => res.json())
		.then((res) => {
			console.log(res);
		});
}
