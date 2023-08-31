
const card = document.getElementById('card')


function cardDetails(pokemon){
    return `
    <img src="${pokemon.photo}"
    alt="${pokemon.name}">

    `
}
/*Falta por as informaçoes na tela*/
card.innerHTML += card.cardDetails(pokemon)

/*`
    <img src="${pokemon.photo}"
    alt="${pokemon.name}">

    <div class="detail">
                <ol class="types">
                    ${pokemon.abilities.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
                </ol>

                
            </div>

    */