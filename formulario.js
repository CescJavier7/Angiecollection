const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



  
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,10}$/, // 10 a 10 números.
    cedula: /^\d{10,10}$/,
}

const campos = {
	nombre: false,
    apellido: false,
	correo: false,
	telefono: false,
    cedula: false,
	validarPro: false,
	validarCan: false,
	validarPar: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "cedula":
			validarCampo(expresiones.telefono, e.target, 'cedula');
		break;
	}
}



const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}




inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});




formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	var valorProvincia = document.getElementById('main_menu');
	var valorCanton = document.getElementById('sub_menu');
	var valorParroquia = document.getElementById('sub_menu2');


	var optProvincias = [
		{id:1, nombre: "Azuay"},
		{id:2, nombre: "Bolivar"},
		{id:3, nombre: "Cañar"},
		{id:4, nombre: "Carchi"},
		{id:5, nombre: "Chimborazo"},
		{id:6, nombre: "Cotopaxi"},
		{id:7, nombre: "El Oro"},
		{id:8, nombre: "Esmeraldas"},
		{id:9, nombre: "Guayas"},
		{id:10, nombre: "Imbabura"},
		{id:11, nombre: "Loja"},
		{id:12, nombre: "Los Ríos"},
		{id:13, nombre: "Manabí"},
		{id:14, nombre: "Morona Santiago"},
		{id:15, nombre: "Napo"},
		{id:16, nombre: "Pastaza"},
		{id:17, nombre: "Pichincha"},
		{id:18, nombre: "Tungurahua"},
		{id:19, nombre: "Zamora Chinchipe"},
		{id:20, nombre: "Galápagos"},
		{id:21, nombre: "Sucumbios"},
		{id:22, nombre: "Orellana"},
		{id:23, nombre: "Santo Domingo de los Tsáchilas"},
		{id:24, nombre: "Santa Elena"}
			];


			

		

			var provinciaSeleccionada = valorProvincia.options[valorProvincia.selectedIndex].text;


			for (var i = 0; i < optProvincias.length; i++) {
				// Comparamos el nombre de cada provincia con la variable provinciaSeleccionada
				if (optProvincias[i].nombre === provinciaSeleccionada) {
					// Si el nombre coincide, hacemos lo que necesitemos hacer aquí
					console.log("Provincia: "+provinciaSeleccionada);
					validarPro = true;
					break; // Terminamos el bucle porque ya encontramos la provincia seleccionada

				} validarPro = false;
			}

			var cantonSeleccionado = valorCanton.options[valorCanton.selectedIndex].value;

			if(cantonSeleccionado != 0 && cantonSeleccionado != 'Haz click en la lista desplegable para seleccionar'){
				validarCan = true;
			}else{
				validarCan = false;
			}
			
			var parroquiaSeleccionado = valorParroquia.options[valorParroquia.selectedIndex].value;
			if(parroquiaSeleccionado != 0 && parroquiaSeleccionado != 'Haz click en la lista desplegable para seleccionar'){
				validarPar = true;
			}else{
				validarPar = false;
			}


	if(campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.cedula && validarPro === true && validarCan === true && validarPar === true && terminos.checked){ //Aquí podemos agregar el valro
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		
		

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		})
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		  }, 5000);
       }

	   

});


