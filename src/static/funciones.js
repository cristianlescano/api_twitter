// acumulador de ids cargados
const ids = [];
// acumulador de tweets cargados en memoria
const tweets = [];

// funcion que consulta a la api
async function trae() {
  let d = await $.ajax({
    url: "/api",
    dataType: "json",
  });
  tieneNuevo = false;
  for (i = 0; i < 5; i++) {
    // solo ingresan los tweets que no esten cargados
    if (!ids.includes(d[i].id)) {
      // indico que vino un nuevo tweet}
      tieneNuevo = true;

      //pongo en memoria tanto el id como el tweet y las url
      tweets.push({ text: d[i].text, url: d[i].url});
      ids.push(d[i].id);
    }
  }

  // tiempo de consulta
  setTimeout(() => trae(), 5000);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function repintaTodo(index) {
  i = 0;
  var expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  var regex = new RegExp(expression);

  const unTweet = tweets[index];
  t = unTweet.text;
  u = unTweet.url;
  console.log(u)
  link = t.match(regex);
  texto = t;

  let te = "";
  let img = ""
  if (link) {
    for (e = 0; e < link.length; e++) {
      texto = texto.replace(link[e], "");
      te +=
        '<a class="post-link" href="https://' +
        link[e] +
        '" target="_blank">' +
        link[e] +
        "</a>";
    }
  }
  if (u != undefined){
    img +=
      '<img class="post-img" src="'+ u +'">'
  }

  $("#post-content").animate({ opacity: 0 }, 200);
  await sleep(200);
  $("#api-texto").html(texto);
  $("#image").html(img);
  $("#links").html(te);
  $("#post-content").animate({ opacity: 1 }, 200);

  await sleep(3000);
  if (index >= tweets.length - 1) {
    index = 0;
  } else {
    index++;
  }
  repintaTodo(index);
}

// ejecuto la funcion ni bien carga la pagina
$(document).ready(async () => {
  await trae();
  repintaTodo(0);
});
