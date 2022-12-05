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
      for (i = 0; i < d.length; i++) {
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
      setTimeout(() => trae(), 300);
    },
  });
}
function repintaTodo() {
  t = "";
  // recorro todos los tweets en memoria y los pongo cmo divs
  for (i = 0; i < tweets.length; i++) {
    t += "<div class='styloTweet'>" + tweets[i].text + "</div>";
  }
  // los ingreso en el div con id #posts
  $("#posts").html(t);
}
// ejecuto la funcion ni bien carga la pagina
$(document).ready(() => {
  trae();
});
