let offset = 16
// carte du début
for (let i = 1; i < 16; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 
document.querySelector('#pokemonContainer').innerHTML += `
                    <div class="pokemon electric">
                        <div class="imgContainer">
                            <img src="${data.sprites.front_default}" alt="${data.name}" />
                        </div>
                        <div class="info">
                            <h3 class="name">${data.name}</h3>
                            <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                        </div>
                    </div>`;

        })}
    
/* function pokemonList(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${offset}`)
    .then(response => response.json())
    .then (data => {
        console.log(data);
    })*/

// après clic
document.querySelector('#next').addEventListener('click', function () {
for (let i = offset; i < offset + 15; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(response => response.json())
        .then(data => {
            console.log(data); 

document.querySelector('#pokemonContainer').innerHTML += `
                    <div class="pokemon electric">
                        <div class="imgContainer">
                            <img src="${data.sprites.front_default}" alt="${data.name}" />
                        </div>
                        <div class="info">
                            <h3 class="name">${data.name}</h3>
                            <span class="type">Type: <span>${data.types[0].type.name}</span></span>
                        </div>
                    </div>`;

                })}
            offset += 15;
            })
                
           
               
           
    
