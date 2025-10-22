
let idioma = "es";

    function cambiarIdiomaIndex() {
      if (idioma === "es") {
        document.getElementById("titulo1").textContent = "Neutral soap";
        document.getElementById("slogan").textContent = "More than cleanliness, it is protection and health.";
        document.getElementById("contacto").textContent = "Contact us";
        document.getElementById("button").textContent = "Translate";
        document.getElementById("inicio").textContent = "Home";
        document.getElementById("proyecto1").textContent = "Proyect";
        document.getElementById("modelo").textContent = "Business model";
        document.getElementById("productos").textContent = "Products";
        document.getElementById("contactos").textContent = "Contacts";
        document.getElementById("analisis").textContent = "Analysis";
        document.getElementById("justificacion").textContent = "Justification";
        // document.getElementById("").textContent = "";
 
        
        idioma = "en";
      } else {
        document.getElementById("titulo1").textContent = "Jabón neutro";
        document.getElementById("slogan").textContent = "Más que limpieza, es protección y salud";
        document.getElementById("contacto").textContent = "Contactanos";
        document.getElementById("button").textContent = "Traducir";
        document.getElementById("inicio").textContent = "Inicio";
        document.getElementById("proyecto1").textContent = "Proyecto"
        document.getElementById("modelo").textContent = "Modelo de negocios";
        document.getElementById("productos").textContent = "Products"
        document.getElementById("contactos").textContent = "Contactos";
        document.getElementById("analisis").textContent = "Analysis";
        document.getElementById("justificacion").textContent = "Justificacion";
        idioma = "es";
      }
    }

    