//Acceso a la data para recorrer los Pokemones
const pokemonNode = document.getElementById("resultPk");
const dataPoke = window.POKEMON.pokemon;
console.log(dataPoke);
let filteredData;

//Mostrando los pokemones 
//const resulNode = document.getElementById("resultPk");

function pkm () {
    for (i=0; i<dataPoke.length; i++) {
        document.getElementById("resultPk").innerHTML +=`
        <div class="tarjetas">
        <img src="${dataPoke[i].img}" alt="Imagen Pokemon">
        <p> Numero: ${dataPoke[i].num}</p>
        <p> Nombre: ${dataPoke[i].name}</p>
        <p> Tipo: ${dataPoke[i].type}</p>
        <p> Altura: ${dataPoke[i].height}</p>
        <p> Peso: ${dataPoke[i].weight}</p>
        </div>`

    }
}
pkm();

//Para ordenar por Orden Alfabetico (por Nombre) del Pokemon 
document.getElementById('filterName').addEventListener("change",()=>{
  let condition = filterName.options[filterName.selectedIndex].value;
  console.log(condition);
  //para mostrar el nuevo resultado antes hay que borrar el contenido del contenedor y asi mostrar las nuevas tarjetas
  pokemonNode.innerHTML = "";
  filteredData = window.sortData(dataPoke, condition)
  showFilterCharacter(filteredData);
   
});

//Para ordenar por tipo de Pokemon
document.getElementById('filterType').addEventListener("change", ()=>{
  let condition = filterType.options[filterType.selectedIndex].value;
  let conditionText = filterType.options[filterType.selectedIndex].text;
  console.log(condition);
  console.log(conditionText);
  pokemonNode.innerHTML ="";
  filteredData = window.filterTypes(dataPoke, condition)
  showFilterCharacter(filteredData);
});

//Mostrando las tarjetas en el HTML
function showFilterCharacter(dataPoke){
  dataPoke.forEach(function(character){
    document.getElementById("resultPk").innerHTML +=`
       <div class="tarjetas">
       <img src="${character.img}" alt="Imagen Pokemon">
       <p>Numero: ${character.num}</p>
       <p>Nombre: ${character.name}</p>
       <p>Tipo: ${character.type}</p>
       <p>Altura: ${character.heigth}</p>
       <p>Peso: ${character.weight}</p>
       </div>`;
  });
};