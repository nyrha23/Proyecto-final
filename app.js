// Validacion del contact form 
(function() {

  var formulario = document.getElementsByName('form-lacapsula')[0];

  var validarNombre = function(e) {
      if (formulario.nombre.value == 0) {
          alert("Completa el campo con un nombre válido");
          e.preventDefault();
      }
  };

  var validarApellido = function(e) {
      if (formulario.apellido.value == 0) {
          alert("Completa el campo con un apellido válido");
          e.preventDefault();
      }
  };


  var validarMail = function(e) {
      var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (!email.value.match(mailformat)) {
          alert("Completa el campo con una dirección de correo válida");
          e.preventDefault();
      }
  };

  var validarTelefono = function(e) {
      var telformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      if (!telefono.value.match(telformat)) {
          alert("Por favor ingrese un número valido");
          e.preventDefault();
      }
  }

  var validarMensaje = function(e) {
      if (formulario.texto.value == 0) {
          alert("Completa el campo nombre");
          e.preventDefault();
      }
  };

  var validar = function(e) {
      validarNombre(e);
      validarApellido(e);
      validarMail(e);
      validarTelefono(e);
      validarMensaje(e);
  };
  formulario.addEventListener("submit", validar);


  //FORMSPREE API

  async function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      const response = await fetch(this.action, {
          method: this.method,
          body: form,
          headers: {
              'Accept': 'application/json'
          }
      })
      if (response.ok) {
          this.reset()
          alert('Gracias por contactarnos, te responderemos a la brevedad')
      }
  }

}())