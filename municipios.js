const municipiosJaen = [
      "Albanchez de Mágina", "Alcalá la Real", "Alcaudete", "Aldeaquemada", "Andújar", "Arjona",
      "Arjonilla", "Arquillos", "Baeza", "Bailén", "Baños de la Encina", "Beas de Segura",
      "Begíjar", "Bélmez de la Moraleda", "Benatae", "Cabra del Santo Cristo", "Cambil",
      "Campillo de Arenas", "Canena", "Carboneros", "Cárcheles", "Carolina (La)", "Castellar",
      "Castillo de Locubín", "Cazalilla", "Cazorla", "Chiclana de Segura", "Chilluévar",
      "Escañuela", "Espeluy", "Frailes", "Fuensanta de Martos", "Fuerte del Rey",
      "Génave", "Guardia de Jaén (La)", "Guarromán", "Higuera de Calatrava", "Hinojares",
      "Hornos", "Huelma", "Huesa", "Ibros", "Iruela (La)", "Iznatoraf", "Jabalquinto",
      "Jaén", "Jamilena", "Jimena", "Jódar", "Larva", "Linares", "Lopera", "Lupión",
      "Mancha Real", "Marmolejo", "Martos", "Mengíbar", "Montizón", "Navas de San Juan",
      "Noalejo", "Orcera", "Peal de Becerro", "Pegalajar", "Porcuna", "Pozo Alcón",
      "Puente de Génave", "Puerta de Segura (La)", "Quesada", "Rus", "Sabiote",
      "Santa Elena", "Santiago de Calatrava", "Santiago-Pontones", "Santisteban del Puerto",
      "Santo Tomé", "Segura de la Sierra", "Siles", "Sorihuela del Guadalimar", "Torreblascopedro",
      "Torredelcampo", "Torredonjimeno", "Torreperogil", "Torres", "Valdepeñas de Jaén",
      "Vilches", "Villacarrillo", "Villanueva de la Reina", "Villanueva del Arzobispo",
      "Villardompardo", "Villares (Los)", "Villarrodrigo", "Villatorres"
    ];

    function verificarMunicipio() {
      const input = document.getElementById("municipio").value.trim().toLowerCase();
      const resultado = document.getElementById("resultado");
      const encontrado = municipiosJaen.some(m => m.toLowerCase() === input);

      if (encontrado) {
        resultado.innerHTML = '<span class="icono">✅</span> ¡Es correcto! El municipio pertenece a Jaén.';
        resultado.className = "resultado correcto";
      } else {
        resultado.innerHTML = '<span class="icono">❌</span> Incorrecto. El municipio no pertenece a Jaén.';
        resultado.className = "resultado incorrecto";
      }

      setTimeout(() => {
        resultado.textContent = "";
        resultado.className = "resultado";
      }, 3000);
    }

    function resetFormulario() {
      document.getElementById("municipio").value = "";
      const resultado = document.getElementById("resultado");
      resultado.textContent = "";
      resultado.className = "resultado";
    }