fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
.then(response => response.json())
.then(allpokemom => {

    var pokemons = [];

    // consultando valores
    allpokemom.results.map((val)=>{
        

        fetch(val.url)
        .then(response => response.json())
        .then(pokemomSingle => {
            pokemons.push({nome:val.name,image:pokemomSingle.sprites.front_default});

            if(pokemons.length == 100){
                //Finalizado

                var pokemomBoxes = document.querySelector('.pokemom-boxes');
                pokemomBoxes.innerHTML = "";

                /*
                <div class="pokemom">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png">
                <p>Dito</p>
                </div>
                */
               pokemons.map(function(val){
               pokemomBoxes.innerHTML += `
                    <div class="pokemom">
                    <img src="`+val.image+`">
                    <p>`+val.nome+`</p>
                    </div>
               `;
                 
            })
        }
    })    
})

})