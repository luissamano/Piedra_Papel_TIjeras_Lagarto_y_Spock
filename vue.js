var vue = new Vue({

  el: '#main',
  data: {

    usuario: {
      "eleccion": "",
      "imagen": "resources/notfound.gif"
    },

    computer: {
      "eleccion": "",
      "imagen": "resources/notfound.gif"
    },

    array: [
      "piedra",
      "papel",
      "tijera",
      "lagarto",
      "spock"
    ]

  },

  methods: {

    iniciar: function () {

      //Obtiene el valor del Select
      var combo = document.getElementById("selectUsuario");

      //Valida si es igual a "not"
      if (combo.options[combo.selectedIndex].value === "not") {
        M.toast({
          html: 'Valor no aceptado, selecciona otra opcion'
        })
      }

      //si no
      else {

        //Numero aleatorio, para eleccion de computadora
        var num = Math.round(Math.random() * 4);

        //Asigna los valores, al objeto computer
        this.computer.eleccion = this.array[num];
        this.computer.imagen = "resources/" + this.array[num] + ".jpg";
        document.getElementById("inputComputer").value = this.array[num].toUpperCase();


        //Asigna el valor a la propiedad imagen a apartir del valor del select del usuario
        this.usuario.imagen = "resources/" + combo.options[combo.selectedIndex].value + ".jpg";

        //Llama el metodo evaluar para connocer el ganador
        this.evaluar(combo);
      }

    },

    evaluar: function (combo) {

      var piedra = 0;
      var papel = 1;
      var tijera = 2;
      var lagarto = 3;
      var spock = 4;

      this.usuario.eleccion = combo.options[combo.selectedIndex].value.toLowerCase();

      if (this.usuario.eleccion === "piedra") {
        if (this.computer.eleccion === "piedra") {
          $("#ganador").text("¡Es un Empate!");
          $("#cardUsuario").css("background-color", "#ffffff");
          $("#cardComputer").css("background-color", "#ffffff");
        } else if (this.computer.eleccion === "papel") {
          $("#ganador").text("¡Tu Pierdes! Papel tapa a Piedra");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "tijera") {
          $("#ganador").text("¡Tu Ganas! Piendra aplasta a las Tijeras");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "lagarto") {
          $("#ganador").text("¡Tu Ganas! Piedra aplasta a Lagarto");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "spock") {
          $("#ganador").text("¡Tu Pierdes! Spock vaporiza a Piedra");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        }
      } else if (this.usuario.eleccion === "papel") {
        if (this.computer.eleccion === piedra) {
          $("#ganador").text("¡Tu Pierdes! Papel tapa a Piedra");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "papel") {
          $("#ganador").text("¡Es un Empate!");
          $("#cardUsuario").css("background-color", "#ffffff");
          $("#cardComputer").css("background-color", "#ffffff");
        } else if (this.computer.eleccion === "tijera") {
          $("#ganador").text("¡Tu Pierdes! Tijeras cortan al Papel");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "lagarto") {
          $("#ganador").text("¡Tu Pierdes! Lagarto devora Papel");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "spock") {
          $("#ganador").text("¡Tu Ganas! Papel desautoriza a Spock");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        }
      } else if (this.usuario.eleccion === "tijera") {
        if (this.computer.eleccion === "piedra") {
          $("#ganador").text("¡Tu Pierdes! Piedra aplasta las Tijeras");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "papel") {
          $("#ganador").text("¡Tu Ganas! Tijeras cortan al Papel");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "tijera") {
          $("#ganador").text("¡Es un Empate!");
          $("#cardUsuario").css("background-color", "#ffffff");
          $("#cardComputer").css("background-color", "#ffffff");
        } else if (this.computer.eleccion === "lagarto") {
          $("#ganador").text("¡Tu Ganas! Tijeras decapitan al Lagarto");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "spock") {
          $("#ganador").text("¡Tu Pierdes! Spock rompe las Tijeras");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        }
      } else if (this.usuario.eleccion === "lagarto") {
        if (this.computer.eleccion === "piedra") {
          $("#ganador").text("¡Tu Pierdes! Piedra aplasta al Lagarto");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "papel") {
          $("#ganador").text("¡Tu Ganas! Lagarto devora al Papel");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "tijera") {
          $("#ganador").text("¡Tu Pierdes! Tijeras decapitan al Lagarto");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "lagarto") {
          $("#ganador").text("¡Es un Empate!");
          $("#cardUsuario").css("background-color", "#ffffff");
          $("#cardComputer").css("background-color", "#ffffff");
        } else if (this.computer.eleccion === "spock") {
          $("#ganador").text("¡Tu Ganas! Lagarto envenena a Spock");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        }
      } else if (this.usuario.eleccion === "spock") {
        if (this.computer.eleccion === "piedra") {
          $("#ganador").text("¡Tu Ganas! Spock vaporiza la Piedra");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
          //$("#ganador").text();
        } else if (this.computer.eleccion === "papel") {
          $("#ganador").text("¡Tu Pierdes! Papel desautoriza a Spock");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "tijera") {
          $("#ganador").text("¡Tu Ganas! Spock rompe Tijeras");
          $("#cardComputer").css("background-color", "#f44336");
          $("#cardUsuario").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "lagarto") {
          $("#ganador").text("¡Tu Pierdes! Lagarto envenena a Spock");
          $("#cardUsuario").css("background-color", "#f44336");
          $("#cardComputer").css("background-color", "#64dd17");
        } else if (this.computer.eleccion === "spock") {
          $("#ganador").text("¡Es un Empate!");
          $("#cardUsuario").css("background-color", "#ffffff");
          $("#cardComputer").css("background-color", "#ffffff");
        }
      }


    }



  }

});