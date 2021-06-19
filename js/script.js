fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
.then(response => response.json())
.then(allpokemom => console.log(allpokemom))