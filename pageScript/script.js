function resetearTextarea() {
    document.getElementById("textarea").value = "";
  }

  document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_fptsx6q', 'template_7dvfbbs', this)
    .then(function() {
      alert('Correo enviado con éxito!');
    }, function(error) {
      alert('Error al enviar: ' + JSON.stringify(error));
    });
});