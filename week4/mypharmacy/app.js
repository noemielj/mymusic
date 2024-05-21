// Insert your code here
const listMedicaments = require('./data');

function getDrugDescriptionByName(drogsName) {
    const medicament = listMedicaments.find(m => m.name === drogsName);
    console.log('Morphin', medicament);
    return medicament ? medicament.description : null;
}

function getDrugTypeByName(drogsType) {
    const medicament = listMedicaments.find(m => m.name === drogsType);
    return medicament ? medicament.type : null;
}

function getDrugNamesByGroup(Investigational) {
  const drugs = listMedicaments 
      .filter(medicament => medicament.groups.includes(Investigational))
      .map(medicament => medicament.name);
      console.log(['Morphin', 'Trastuzumab', drugs]);
      return drugs.sort();
}
module.exports = { getDrugDescriptionByName, getDrugTypeByName, getDrugNamesByGroup };

