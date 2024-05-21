let searchArtist = document.querySelector('#searchBar')

// champ de recherche
document.querySelector('#searchBar').addEventListener('input',
 function () {
searchArtist = this.value
});
    
 // clic bouton de recherche
document.querySelector('#searchButton').addEventListener('click' 
function () {
console.log(searchArtist);

fetch(`https://api.spotify.com/v1/artists/${searchArtist}`

)
})