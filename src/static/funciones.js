// acumulador de ids cargados
const ids = [];
// acumulador de tweets cargados en memoria
const tweets = [];

// funcion que consulta a la api
function trae() {
  $.ajax({
    url: "/api",
    dataType: "json",
    success: (d) => {
      // cada vez que ingresa seteo que no viene nuevos por default
      tieneNuevo = false;
      for (i = 0; i < 5; i++) {
        // solo ingresan los tweets que no esten cargados
        if (!ids.includes(d[i].id)) {
          // indico que vino un nuevo tweet}
          tieneNuevo = true;

          //pongo en memoria tanto el id como el tweet
          tweets.push({ text: d[i].text });
          ids.push(d[i].id);
        }
      }

      // si viene algun tweet nuevo repinta todo
      if (tieneNuevo) repintaTodo();

      // consulta de nuevo cada 300 milisegundos
      setTimeout(() => trae(), 5000);
    },
  });
}
function repintaTodo() {
  t = "";
  i = 0;
  var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  var regex = new RegExp(expression);
  
  tweets.forEach(function (item) {
    setTimeout(function () {
      t = item.text;
      link = t.match(regex)
      texto = t.replace(link, ' ')
      
      $("#api-texto").html(texto);
      $("#api-link").html(link).attr("href", link);
    }, 5000 * i++)
  })
}


// ejecuto la funcion ni bien carga la pagina
$(document).ready(() => {
  trae();
});
