function resetearTextarea() {
    document.getElementById("textarea").value = "";
  }

emailjs.init("Yp9B5u-2aHaXMIKli");

  document.getElementById("my-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_fptsx6q", "template_7dvfbbs", this)
      .then(() => alert("Correo enviado correctamente"), 
            (err) => alert("Error: " + JSON.stringify(err)));
  });
