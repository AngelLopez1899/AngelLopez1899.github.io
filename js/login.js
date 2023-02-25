function login() {
    // recupera los valores del campo de entrada de usuario y contraseña
    var email = document.getElementById("correo").value;
    var password = document.getElementById("contrasena").value;
  
    // compara los valores con los valores de usuario y contraseña almacenados en algún lugar
    if (email === "al189916@alumnos.uacj.mx" && password === "Kontras123") {
      // si los valores son correctos, devuelve true y permite el envío del formulario
      window.location.href = "bienvenida.html?correo=" + correo.value;
      return false;
    } else {
      // si los valores son incorrectos, muestra un mensaje de error y no permite el envío del formulario
      alert("Correo o contraseña incorrectos.");
      return false;
    }
  }
  