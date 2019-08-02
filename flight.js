const vols = [{
  destination: 'Martinique',
  date_depart: '01/25/2019',
  compagnie_aerienne: 'Ryanair',
  numVol: 'xxxxx',
  prix: '350',
  dureeTrajet: '6'
},
{
  destination: 'Londres',
  date_depart: '07/25/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '150',
  dureeTrajet: '2'
},
{
  destination: 'Paris',
  date_depart: '08/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '50',
  dureeTrajet: '1'
},
{
  destination: 'Mexico',
  date_depart: '09/03/2019',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '1350',
  dureeTrajet: '8'
},
{
  destination: 'Tokyo',
  date_depart: '05/12/2019',
  compagnie_aerienne: 'Air france',
  numVol: 'xxxxx',
  prix: '750',
  dureeTrajet: '14'
},
{
  destination: 'Tokyo',
  date_depart: '02/12/2020',
  compagnie_aerienne: 'Lufthansa',
  numVol: 'xxxxx',
  prix: '850',
  dureeTrajet: '14'
}
];


//Affichez tous les vols (destination - Date de départ- compagnie aérienne -
//numero de vol - prix - durée du trajet)

//Afficher tous les vols dont le trajet est inférieur à 7h. (idem)

//Afficher les vols à destination de Tokyo et qui voyagent avec Air france (idem)

//Afficher tous les vols dont le tarif est inférieur à 700 euros et qui
//voyagent avec Air france

//Afficher tous les vols par date :
//à partir de la date d'aujourd'hui

//Afficher tous les vols par date :
//avant la date d'aujourd'hui

//Appliquer une reduc de 20% sur chaque vol organiser après 2019 et les afficher

//Fonction permettant de comparer deux date et renvoie 'true' si date1 est supérieur à date2
const date1SupDate2 = (date1, date2) => {
  // L'objet 'Date' permet de pouvoir comparer deux dates.
  date1 = new Date(date1);
  date2 = new Date(date2);
  if(date1 > date2){
    return true;
  }else{
    return false;
  };
};

vols.forEach((vol) => {
  if(date1SupDate2(vol.date_depart, '01/01/2020')){
    //si la comaraison renvoie 'true' on affiche les destinations
    console.log(`Le vol à destination de ${vol.destination} est désormais à ${vol.prix * 0.8} euro au lieu de ${vol.prix} euros`);
  };
});

//Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".

//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures





//Allez voir ce qu'est un JSON !
//https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON




// const tasse1 = {
//   poignet: 'oui',
//   couleur: 'bleu',
//   taille: '10cm',
//   marque: 'maison du monde'
// }

// const tasse2 = {
//   poignet: 'oui',
//   couleur: 'jaune',
//   taille: '10cm',
//   marque: 'conforama'
// }

// const tasse3 = {
//   poignet: 'oui',
//   couleur: 'jaune',
//   taille: '10cm',
//   marque: 'maison du monde'
// }

//const tasses = [tasse1, tasse2, tasse3];

//format de données JSON


const tasses = [
{
  poignet: 'oui',
  couleur: 'bleu',
  taille: '10cm',
  marque: 'maison du monde'
},
{
  poignet: 'oui',
  couleur: 'jaune',
  taille: '10cm',
  marque: 'conforama'
},
{
  poignet: 'oui',
  couleur: 'jaune',
  taille: '10cm',
  marque: 'maison du monde'
}
]


// tasses.forEach((tasse) => {
//   if(tasse.marque === 'maison du monde'){
//     console.log(tasse)
//   }
// });








