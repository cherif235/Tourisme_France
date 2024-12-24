 
function changeImageM1(url,nom){ 
  var lina=document.body.childNodes[3].children[1].firstChild;
  lina.src = url ;

  var bTag= document.body.childNodes[3].children[0].lastChild;
  bTag.innerHTML=nom  ;
  console.log(bTag.innerHTML);
}

function changeImageM2(id_url, id_nom, url,nom) {
  console.debug(nom);
  var img=document.getElementById('id_image');
  img.src= url;
  var bTag =document.getElementById('id_quoi');
  bTag.innerHTML = nom ;
}
function changeImageM3(url, nom) {
  console.debug(nom);
  var img = document.querySelector('#id_image');
  img.src = url ;
  var bTag = document.querySelector('#id_quoi');
  bTag.innerHTML= nom;
}

function changeCouleurDeFond() {
  event.preventDefault();
  document.body.style.backgroundColor = "white";
  r = Math.floor(Math.random()*255);
     console.log(r);
  g = Math.floor(Math.random()*255);
    console.log(g);
  b=Math.floor(Math.random()*255);
  console.log(b);
  document.body.style.backgroundColor ="rgb("+r+","+g+","+b+")";

}


