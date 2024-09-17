  // La siguiente funcion valida el elemento input
  function validar() {
    // Variable que usaremos para determinar si el input es valido
    let isValid = false;

    // El input que queremos validar
    const input = document.forms['validationForm']['letras'];

    //El div con el mensaje de advertencia:
    const message = document.getElementById('message');

    input.willValidate = false;

    // El tamaño maximo para nuestro input
    const maximo = 35;

    // El pattern que vamos a comprobar
  
    const pattern = new RegExp('^[A-Z]+$', 'i');

    // Primera validacion, si input esta vacio entonces no es valido
    if(!input.value) {
      isValid = false;
    } else {
      // Segunda validacion, si input es mayor que 35
      if(input.value.length > maximo) {
        isValid = false;
      } else {
        // Tercera validacion, si input contiene caracteres diferentes a los permitidos
        if(!pattern.test(input.value)){ 
        // Si queremos agregar letras acentuadas y/o letra ñ debemos usar
        // codigos de Unicode (ejemplo: Ñ: \u00D1  ñ: \u00F1)
          isValid = false;
        } else {
          // Si pasamos todas la validaciones anteriores, entonces el input es valido
          isValid = true;
        }
      }
    }

    //Ahora coloreamos el borde de nuestro input
    if(!isValid) {
      // rojo: no es valido
      input.style.borderColor = 'salmon'; // me parece que 'salmon' es un poco menos agresivo que 'red'
      // mostramos mensaje
      message.hidden = false;
    } else {
      // verde: si es valido
      input.style.borderColor = 'palegreen'; // 'palegreen' se ve mejor que 'green' en mi opinion
      // ocultamos mensaje;
      message.hidden = true;
    }

    // devolvemos el valor de isValid
    return isValid;
  }

  // Por último, nuestra función que verifica si el campo es válido antes de realizar cualquier otra acción.
  function verificar() {
    const valido = validar();
    if (!valido) {
      alert('El campo no es válido.');
    } else {
      alert('El campo es válido');
    }
  }