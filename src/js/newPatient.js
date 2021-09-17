function openTab(evt, datos) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	document.getElementById(datos).style.display = 'block';
	evt.currentTarget.className += ' active';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();
const allPacientes = [];
const patientList = {};

function guardarDatos(seccion, datos) {
	patientList[seccion] = datos;
	console.log(patientList);

	localStorage.setItem('Pacientes', JSON.stringify(patientList));
}
document
	.querySelector('#btnSaveGenerales')
	.addEventListener('click', saveDatosGen);

function saveDatosGen() {
	let sName = document.querySelector('#fullName').value,
	    sLastName = document.querySelector('#lastName').value,
		sAge = document.querySelector('#age').value,
		sGender = document.querySelector('#gender').value,
		sAddress = document.querySelector('#address').value,
		sPlaceOfBirth = document.querySelector('#placeOfBirth').value,
		sDateOfBirth = document.querySelector('#dateOfBirth').value;

	guardarDatos('datosGenerales', {
		sName,
		sLastName,
		sAge,
		sGender,
		sAddress,
		sPlaceOfBirth,
		sDateOfBirth,
	});
}

document
	.querySelector('#btnSaveAntecedentes')
	.addEventListener('click', saveAntecedentes);

function saveAntecedentes() {
	let sAntecedentesFamiliares = document.querySelector(
			'#antecedentesFamiliares'
		).value,
		sMotivoConsulta = document.querySelector('#motivoConsulta').value,
		sDolor = document.querySelector('#dolor').value,
		sControl = document.querySelector('#control').value,
		sSangradoEncias = document.querySelector('#sangradoEncias').value,
		sRestauracionProtesica = document.querySelector(
			'#restauracionProtesica'
		).value,
		sOtro = document.querySelector('#otro').value,
		sAspectoPaciente = document.querySelector('#aspectoPaciente').value,
		sCara = document.querySelector('#cara').value,
		sLabios = document.querySelector('#labios').value,
		sPalpacion = document.querySelector('#palpacion').value,
		sGanglios = document.querySelector('#ganglios').value,
		sAtm = document.querySelector('#atm').value,
		sPresionAlta = document.querySelector('#alta').value,
		sPresionBaja = document.querySelector('#baja').value,
		sTratamientoMedico = document.querySelector('#tratamientoMedico').value,
		sTomaMedicamentos = document.querySelector('#tomaMedicamentos').value,
		sCirugias = document.querySelector('#cirugias').value,
		sConsumeDrogas = document.querySelector('#drogas').value,
		sReaccionPenicilina = document.querySelector('#penicilina').value,
		sReaccionAnestecia = document.querySelector('#anestecia').value,
		sReaccionAspirina = document.querySelector('#aspirina').value,
		sReaccionYodo = document.querySelector('#yodo').value,
		sReaccionMerthiolate = document.querySelector('#merthiolate').value,
		sOtrasAlergias = document.querySelector('#otrasAlergias').value,
		sPadeceAnemia = document.querySelector('#anemia').value,
		sPadeceLeucemia = document.querySelector('#leucemia').value,
		sPadeceHemofilia = document.querySelector('#hemofilia').value,
		sPadeceDeficitVit = document.querySelector('#deficitVit').value,
		sSangradoExcesivo = document.querySelector('#sangradoExcesivo').value,
		sVIH = document.querySelector('#vih').value,
		sRetrovirales = document.querySelector('#retrovirales').value,
		sEmbarazada = document.querySelector('#embarazada').value,
		sAnticonceptivos = document.querySelector('#anticonceptivos').value,
		sHabitoMorderse = document.querySelector('#morderse').value,
		sHabitoFumar = document.querySelector('#fumar').value,
		sHabitoCitricos = document.querySelector('#citricos').value,
		sHabitoMorderObjetos = document.querySelector('#morderObjetos').value,
		sHabitoApretamiento = document.querySelector('#apretamiento').value,
		sHabitoRespiracionBucal = document.querySelector('#respiracionBucal').value,
		sEnfermedadesVenereas = document.querySelector('#venereas').value,
		sEnfermedadesCorazon = document.querySelector('#corazon').value,
		sEnfermedadesHepatitis = document.querySelector('#hepatitis').value,
		sEnfermedadesFiebreReumaticas =
			document.querySelector('#fiebreReumatica').value,
		sEnfermedadesAsma = document.querySelector('#asma').value,
		sEnfermedadesDiabetes = document.querySelector('#diabetes').value,
		sEnfermedadesUlcera = document.querySelector('#ulcera').value,
		sEnfermedadesTiroides = document.querySelector('#tiroides').value,
		sLimitacionAbrirBoca = document.querySelector('#limitacionBoca').value,
		sRuidoMandibular = document.querySelector('#ruidoMandibular').value,
		sHerpes = document.querySelector('#herpes').value;
	guardarDatos('antecedentesClinicos', {
		sAntecedentesFamiliares,
		sMotivoConsulta,
		sDolor,
		sControl,
		sSangradoEncias,
		sRestauracionProtesica,
		sOtro,
		sAspectoPaciente,
		sCara,
		sLabios,
		sPalpacion,
		sGanglios,
		sAtm,
		sPresionAlta,
		sPresionBaja,
		sTratamientoMedico,
		sTomaMedicamentos,
		sCirugias,
		sConsumeDrogas,
		sReaccionPenicilina,
		sReaccionAnestecia,
		sReaccionAspirina,
		sReaccionYodo,
		sReaccionMerthiolate,
		sOtrasAlergias,
		sPadeceAnemia,
		sPadeceLeucemia,
		sPadeceHemofilia,
		sPadeceDeficitVit,
		sSangradoExcesivo,
		sVIH,
		sRetrovirales,
		sEmbarazada,
		sAnticonceptivos,
		sHabitoMorderse,
		sHabitoFumar,
		sHabitoCitricos,
		sHabitoMorderObjetos,
		sHabitoApretamiento,
		sHabitoRespiracionBucal,
		sEnfermedadesVenereas,
		sEnfermedadesCorazon,
		sEnfermedadesHepatitis,
		sEnfermedadesFiebreReumaticas,
		sEnfermedadesAsma,
		sEnfermedadesDiabetes,
		sEnfermedadesUlcera,
		sEnfermedadesTiroides,
		sLimitacionAbrirBoca,
		sRuidoMandibular,
		sHerpes,
	});
}
document
	.querySelector('#btnSaveExamen')
	.addEventListener('click', saveExamenClinico);

function saveExamenClinico() {
	let sCarrillos = document.querySelector('#carrillos').value,
		sMucosa = document.querySelector('#mucosa').value,
		sEncia = document.querySelector('#encia').value,
		sLengua = document.querySelector('#lengua').value,
		sPaladar = document.querySelector('#paladar').value,
		sPanoramica = document.querySelector('#panoramica').value,
		sCoronal = document.querySelector('#coronal').value,
		sPeriapal = document.querySelector('#periapal').value,
		sImagenRadio = document.querySelector('#imagenRadiografia').value,
		sLaboratorio = document.querySelector('#laboratorio').value,
		sModelo = document.querySelector('#modelo').value,
		sTensionArterial = document.querySelector('#tensionArterial').value,
		sObservaciones = document.querySelector('#observaciones').value;
	guardarDatos('examenClinico', {
		sCarrillos,
		sMucosa,
		sEncia,
		sLengua,
		sPaladar,
		sPanoramica,
		sCoronal,
		sPeriapal,
		sImagenRadio,
		sLaboratorio,
		sModelo,
		sTensionArterial,
		sObservaciones,
	});
}
document
	.querySelector('#btnSaveDiagnostico')
	.addEventListener('click', saveDiagnostico);

function saveDiagnostico() {
	let sDiagnosticoTratamiento = document.querySelector(
		'#diagnosticoTratamiento'
	).value;
	guardarDatos('diagnosticoTratamiento', { sDiagnosticoTratamiento });
}

document
	.querySelector('#btnSaveSecuencia')
	.addEventListener('click', saveSecuencia);
function saveSecuencia() {
	let sFechaTratamiento = document.querySelector('#fechaTratamiento').value,
		sDescripcionTratamiento = document.querySelector(
			'#descripcionTratamiento'
		).value;

	guardarDatos('descripcionTratamiento', {
		sFechaTratamiento,
		sDescripcionTratamiento,
	});
}
allPacientes.push(patientList);
console.log(allPacientes);

function getPatientList() {
	return patientList;
}
$(document).ready(function () {
	//Posisiona el valor del select en la posicion 0
	$('#gender').val('0');

	// Borra todo el contenido de los input cuando salvamos el documento
	function borrarInput() {
		$('.input').val('');
	}

	$('#gender').on('change', (event) => {
		esconderInputSegunGenero(event);
	});
	function esconderInputSegunGenero(event) {
		if (event.target.value === 'Masculino') {
			$('#embarazada').hide();
			$('#anticonceptivos').hide();
		} else $('#embarazada').show();
		$('#anticonceptivos').show();
	}
});
