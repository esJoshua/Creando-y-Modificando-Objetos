const pacientes = [
  {
    nombre: "Franco Urra",
    edad: 47,
    rut: "12345678-9",
    diagnostico: "Hipertensión Arterial",
    consultorio: "Las Condes",
  },
  {
    nombre: "Matías Mesa",
    edad: 27,
    rut: "12345678-9",
    diagnostico: "Diabetes Mellitus 1",
    consultorio: "Ñuñoa",
  },
  {
    nombre: "Enrique Flores",
    edad: 37,
    rut: "12345678-9",
    diagnostico: "Disfunción de la vista",
    consultorio: "Providencia",
  },
  {
    nombre: "Milagros Acosta",
    edad: 17,
    rut: "12345678-9",
    diagnostico: "Hipertensión Pulmonar",
    consultorio: "Ñuñoa",
  },
  {
    nombre: "Victor Fernandez",
    edad: 47,
    rut: "12345678-9",
    diagnostico: "Diabetes Mellitus 2",
    consultorio: "Providencia",
  },
  {
    nombre: "Is Pinto",
    edad: 15,
    rut: "12345678-9",
    diagnostico: "Pancreatitis Aguda",
    consultorio: "Las Condes",
  },
  {
    nombre: "Francisco Lobos",
    edad: 2,
    rut: "12345678-9",
    diagnostico: "Neuroblastoma",
    consultorio: "Ñuñoa",
  },
  {
    nombre: "Jean Jaque",
    edad: 67,
    rut: "12345678-9",
    diagnostico: "Enfermedad de Parkinson",
    consultorio: "Las Condes",
  },
  {
    nombre: "Cesar Riveros",
    edad: 87,
    rut: "12345678-9",
    diagnostico: "Alopecia por Radiación",
    consultorio: "Las Condes",
  },
  {
    nombre: "Joshua Espinoza",
    edad: 77,
    rut: "12345678-9",
    diagnostico: "Enfermedad de Creutzfeldt-Jakob",
    consultorio: "Ñuñoa",
  },
];
const tablaConsultorioId = document.getElementById("tablaConsultorioId");
const busquedaPacienteId = document.getElementById("inputId");
const btnMostrarId = document.getElementById("btnId");
const containerPacientesId = document.getElementById("containerPacientesId");
const tablaPacientesId = document.getElementById("tablaPacientesId");

class Consultorio {
  constructor(consultorio, nombre) {
    this._consultorio = () => consultorio;
    this._nombre = () => nombre;
  }
  // Getters //
  get consultorio() {
    return this._consultorio();
  }
  get nombre() {
    return this._nombre();
  }
  // Método para imprimir //
  imprimirDatosConsultorio(id, index) {
    id.innerHTML += `
                <tr>
                <th scope="row">${index}</th>
                <td>${this.consultorio}</td>
                <td>${this.nombre}</td>
                </tr>
                `;
  }
}
// Instanciación de class Consultorio //
const consultorioLista = (listado) => {
  listado.forEach((paciente, i) => {
    const datosPaciente = new Consultorio(
      paciente.consultorio,
      paciente.nombre
    );
    datosPaciente.imprimirDatosConsultorio(tablaConsultorioId, i + 1);
  });
};
consultorioLista(pacientes);

class Paciente {
  constructor(nombre, edad, rut, diagnostico) {
    this._nombre = () => nombre;
    this._edad = () => edad;
    this._rut = () => rut;
    this._diagnostico = () => diagnostico;
  }
// Getters //
  get nombre() {
    return this._nombre();
  }
  get edad() {
    return this._edad();
  }
  get rut() {
    return this._rut();
  }
  get diagnostico() {
    return this._diagnostico();
  }
  // Setters //
  set nombre(nombre) {
    this._nombre = () => nombre;
  }
  set edad(edad) {
    this._edad = () => edad;
  }
  set rut(rut) {
    this._rut = () => rut;
  }
  set diagnostico(diagnostico) {
    this._diagnostico = () => diagnostico;
  }
  // Método para imprimir //
  imprimirDatosPaciente(id, index) {
    id.innerHTML += `
          <tr>
          <th scope="row">${index}</th>
          <td>${this.nombre}</td>
          <td>${this.edad}</td>
          <td>${this.rut}</td>
          <td>${this.diagnostico}</td>
          </tr>
          `;
  }
}
// Instanciación de class Paciente //
const pacientesLista = (listado) => {
  listado.forEach((paciente, i) => {
    const datosPaciente = new Paciente(
      paciente.nombre,
      paciente.edad,
      paciente.rut,
      paciente.diagnostico
    );
    datosPaciente.imprimirDatosPaciente(tablaPacientesId, i + 1);
  });
};
//pacientesLista(pacientes);


// Metodo addEventListener del input con metodos para filtrar las busquedas //
busquedaPacienteId.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase().trim();
  const resultadoPaciente = pacientes.filter((paciente) =>
    paciente.nombre.toLocaleLowerCase().includes(search)
  );
  const resultadoConsultorio = pacientes.filter((paciente) =>
    paciente.consultorio.toLocaleLowerCase().includes(search)
  );

  containerPacientesId.className = "";
  btnMostrarId.innerHTML = "Ocultar resultados";
  tablaPacientesId.innerHTML = "";
  pacientesLista(resultadoConsultorio);
  // tablaPacientesId.innerHTML = "";
  pacientesLista(resultadoPaciente);
  
});
// Metodo addEventListener del btn con evento click //
btnMostrarId.addEventListener("click", () => {
  if (containerPacientesId.className == "d-none") {
    btnMostrarId.innerHTML = "Ocultar resultados";
    containerPacientesId.className = "";
    return pacientesLista(pacientes);
  } else {
    btnMostrarId.innerHTML = "Mostrar Todos los Pacientes";
    containerPacientesId.className = "d-none";
    busquedaPacienteId.value = "";
  }
  tablaPacientesId.innerHTML = "";
});
