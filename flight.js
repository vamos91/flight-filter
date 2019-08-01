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

//Afficher tous les vols pour Paris prévus entre le "06/02/2019" et le "09/06/2019".

//Afficher tous les vols qui voyagent avec 'Lufthansa' dont le prix est inférieur à 900 euros
//et dont la durée du trajet est inférieur à 15 heures




const tasse1 = {
  nom: 'tasse provencale',
  taille: 'XL',
  couleur: 'bleu',
  poignet: 'oui',
  marque: 'maison du monde'
}

const tasse2 = {
  nom: 'tasse catalane',
  taille: 'L',
  couleur: 'rouge',
  poignet: 'non',
  marque: 'conforama'
}

const tasse3 = {
  nom: 'tasse chtit',
  taille: 'XL',
  couleur: 'bleu',
  poignet: 'oui',
  marque: 'conforama'
}

const tasses = [
{
  nom: 'tasse provencale',
  taille: 'XL',
  couleur: 'bleu',
  poignet: 'oui',
  marque: 'maison du monde'
},
{
  nom: 'tasse catalane',
  taille: 'L',
  couleur: 'rouge',
  poignet: 'non',
  marque: 'conforama'
},
{
  nom: 'tasse chtit',
  taille: 'XL',
  couleur: 'bleu',
  poignet: 'oui',
  marque: 'conforama'
}
];





let i = 0;
tasses.forEach((tasse) => {
  if(tasse.marque === 'conforama'){
    console.log(tasse.nom);
    i++;
  };
});

console.log(`il y a ${i} résultats à votre recherche`);



//Allez voir ce qu'est un JSON !
//https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON















