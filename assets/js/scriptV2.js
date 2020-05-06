let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
days.forEach(function(day){
  let p =  document.createElement('p');
  p.innerHTML= day;
  if( day == 'Samedi' || day == 'Dimanche' ) {
    p.style.fontWeight = 'bold';
  }
  document.body.appendChild(p);
});