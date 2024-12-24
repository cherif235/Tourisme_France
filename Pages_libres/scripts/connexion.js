// connexion.js
// auteurs : Nom1, Nom2

//----------------------------------------------------- Variables globales ---
let codeChiffres = "";
let capchaFormule = "";
let capchaResultat = "";
let lina ;

//--------------------------------------------------------- Initialisation ---

// appelle la fonction d'Initialisation quand la fenêtre est chargée
window.addEventListener("load", init);

function init() {

  // Code d'accès
  melangeChiffres();
  afficheCode();

  // Capcha
  genereCapcha();

}
//----------------------------------------------- Gestion de l'identifiant ---

// revoie vrai si la longueur de l'identifiant saisi est >= 8 caractères
function verifieIdentifiant() {
  let identifiant = document.getElementById("input_identifiant").value;
  return identifiant.length >= 8;
}

// modifie la couleur de l'identifiant en fonction de sa validité
function valideIdentifiant() {

  let identifiantElt = document.getElementById("input_identifiant");
  if (verifieIdentifiant() === true) {
    identifiantElt.style = "color:black;"
  } else {
    identifiantElt.style = "color:red;"
  }
}

//------------------------------------------------ Gestion du code d'accès ---

function melangeChiffres() {
  // récupère un tableau de boutons chiffres
  let divElt = document.getElementById("boutons_chiffres");
  let buttonElts = divElt.getElementsByTagName("button");

  // créer un tableau qui contient autant de chiffres que de boutons
  let tabChiffres = []; // tablean vide;
  for (let i = 0; i < buttonElts.length; i++) {
    tabChiffres[i] = i;
    //console.log(tabChiffres[i])/*ajouter*/
  }

  // mélanger ce tableau de chiffres
  melangeTableau(tabChiffres);

  // affecter ces chiffres mélangés sur les boutons
  for (let i = 0; i < buttonElts.length; i++) {
    buttonElts[i].textContent = tabChiffres[i];
  }
}

function melangeTableau(tab) {
  let i;
  let j;
  let temp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp;
  }
}

function saisieChiffre(elt){
let chiffre = elt.textContent;
  if(codeChiffres.length <=5){

 /* TODO: Quoi faire avec le chiffre saisi ?*/
     console.log("Chiffre_saisi "+ chiffre);
    
  codeChiffres = codeChiffres +chiffre; }
  console.log("ici:" +codeChiffres);
  code_affiché.textContent=codeChiffres;
  afficheCode();/* on la supprime pas sinon il affiche pas le code dans le formulaire*/
}




function afficheCode() {
  console.log("Code Ã  afficher : " + codeChiffres);
 
 document.getElementById("code_saisi").value= codeChiffres ;  

}
  // TODO: ComplÃ©tez la fonction...


// Affiche le code dans le forumulaire

function supprimeChiffre(){

 


 let chiffre=document.getElementById("code_affiché");
 
chiffre.textContent=codeChiffres.slice(0,(codeChiffres.length-1));
console.log(chiffre.textContent);
codeChiffres=codeChiffres.slice(0,(codeChiffres.length-1));

}
function videCode() {
  var lina ;
  lina=" ";
  chiffre=document.getElementById("code_affiché");
 chiffre.textContent= lina;
 codeChiffres = lina ;
  console.log(chiffre.textContent);
}

//------------------------------------------------------ Gestion du Capcha ---
function genereCapcha() {
  var operations = ['+', '-', '*'];
  var o = parseInt(Math.round(Math.random() * 2));
  
  var i= parseInt(Math.round(Math.random() * 2));
  console.log("Opération choisie pour le capcha : " + operations[o]);

  console.log( "le " + o  + operations[o] + i );

  // TODO: Modifier pour construire une formule aléatoire
  //       et le résultat correspondant 
  var formule  =  o + operations[o] + i ;
 /*   var resultat =  o + operations[o]+ i ; */
  var resultat = 0;
  // eval permert d'évaluer le code sous formed'une chaine 
  resultat += eval(o + operations[o] + i);
  capchaFormule  = formule;
  capchaResultat = resultat;

  afficheCapcha();
}

function afficheCapcha() {
  let labelElt = document.getElementById("capcha_formule");
  labelElt.textContent = capchaFormule;
  let inputElt = document.getElementById("capcha_saisi").value= "" ;
}

function verifieCapcha() {
  let  capcha = document.getElementById("capcha_saisi").value;
  console.log(capchaResultat)

  lina =parseInt(capcha);
  // annalyse une chaine fornie en argument  et la renvoie en  un entier 
  if (lina == capchaResultat){
   /*console.log("co");*/
    console.log("correct");
    return true ;
 }
  
}

function valideCapcha() {
  
    let capcha= document.getElementById("capcha_saisi");
   
    if (verifieCapcha() === true) {
      capcha.style = "color:black;"

    } 
    else {
      capcha.style = "color:red;"
     // console.log("incorrect")
    }
}
 
function valideFormulaire() {
  let ok = true;
  
  if (verifieIdentifiant()===false)  {

    console.log("L'identifiant doit comporter au moins 8 caractères !") 
    ok=false;
  }
 if ( codeChiffres.length !=6){
    console.log("le code est incorrect");
    ok=false;
  }
  if (lina !==capchaResultat){
  
    console.log("Lecapcha est un incorrect")
    ok=false;
  }
  return ok;
}