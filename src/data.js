/* Manejo de data

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const example = () => {
  return 'example';
};

window.example = example;
*/
//Filtrando y ordenando por orden alfabetico los nombres
const filterData = (data, condition) => {
  for (var key in condition) {

    if (condition[key] === "name")
      delete condition[key]
  }

  return data.filter(function(character) {
    for (var key in condition) {
      if (character[key] === undefined || !character[key].includes(condition[key]))
        return false;
    }
    return true;
  });
};


let sortData = (data, condition) => {
  let sortCharacter = "";
  if (condition === 'A-Z') {
    sortCharacter = data.sort ((a,b) => a.name.localeCompare(b.name));
  }
  else if (condition === 'Z-A') {
    sortCharacter = data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
  }
  return(sortCharacter);
}
sortData();

//Filtrando por tipo 
const filterTypes = (dataPoke, type) => {
  const filterTpe = dataPoke.filter(element =>{
  return element.type.includes(type);
});
return filterTpe;
};





window.filterTypes = filterTypes;
window.filterData = filterData;
window.sortData = sortData;


