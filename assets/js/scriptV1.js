let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
days.sort();
let nbDays = days.length; 
for(let i = 0; i < nbDays; i++){
  console.log('mon index' + i);
  //permet de visualiser la numérotation des jours
  let p =  document.createElement('p');
  p.innerHTML= days[i];
  if( days[i] == 'Samedi' || days[i] == 'Dimanche' ) {
    p.style.fontWeight = 'bold';
  }
  document.body.appendChild(p);
   // ajoute l'élement P crée ci dessus dans le html
}