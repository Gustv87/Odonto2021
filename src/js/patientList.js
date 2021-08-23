function drawPatientList() {
  let tbody = document.querySelector('#patientTable tbody');

  tbody.innerHTML = '';

  const aPacientes = JSON.parse(localStorage.getItem('Pacientes'));

  const aName = aPacientes.datosGenerales.sName,
    aAge = aPacientes.datosGenerales.sAge,
    aBirthday = aPacientes.datosGenerales.sDateOfBirth;

  console.log(aPacientes);

  console.log(aPacientes.datosGenerales.sName);

  document.getElementById('tbody').innerHTML = `
  <tr>
  <td>${aName}</td>
  <td>${aAge}</td>
  <td>${aBirthday}</td> 
  <td><a style=" padding-left:12px ;" href="../newPatient.html"><i class="fas fa-user-edit"></i> </a></td> 
  <td><a style="color:red; padding-left:25px ;" href="../newPatient.html"><i class="fas fa-trash-alt"></i></a></td> 
  </tr>
  `;
}

drawPatientList();
