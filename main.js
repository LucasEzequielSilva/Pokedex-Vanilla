const pokeCard = document.querySelector('[data-poke-card]')
const pokeName = document.querySelector('[data-poke-name]')
const pokeImg = document.querySelector('[data-poke-img]')
const pokeImgContainer = document.querySelector('[data-poke-img-container]')
const pokeId = document.querySelector('[data-poke-id]')
const pokeTypes = document.querySelector('[data-poke-type]')
const pokeStats = document.querySelector('[data-poke-stats]')

const typeColors = {
    electric: '315deg, #fbb034 0%, #ffdd00 74%',
    normal: '315deg, #d9d9d9 0%, #f6f2f2 74%',
    fire: '315deg, #ff4e00 0%, #ec9f05 74%',
    water: '315deg, #06bcfb 0%, #4884ee 74%',
    ice: '315deg, #63a4ff 0%, #83eaf1 74%',
    rock: '315deg, #a38560 0%, #e0d4ae 74%',
    flying: '315deg, #6a93cb 0%, #a4bfef 74%',
    grass: '315deg, #378b29 0%, #74d680 74%',
    psychic: '315deg, #ff5599 0%, #ff5599 74%',
    ghost: '316deg, #6247aa 0%, #a594f9 74%',
    bug: '#a8b828 0.1%, #aab73c 90%',
    poison: '315deg,#aa5599 0%, #aa5599 74%',
    ground: '315deg, #d09d1f 0%, #c6920d 74%',
    dragon: '315deg, #bbaaff 0%, #7766ee 74%',
    steel: '315deg, #aecad6 0%, #b8d3fe 74%',
    fighting: '147deg, #ad2f26 0%, #99201c 74%',
    fairy: '316deg, #ffaaff 0%, #ffaaff 74%',
};
const typeColorsTags = {
    electric: '#fbb034',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#4884ee',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#a4bfef',
    grass: '#4A9681',
    psychic: '#ff5599',
    ghost: '#6247aa',
    bug: '#a8b828',
    poison: '#aa5599',
    ground: '#d09d1f',
    dragon: '#bbaaff',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    fairy:'#ffaaff',
    default: '#2A1A1F',
};
const searchPokemon = event => {
     event.preventDefault();
     const { value } = event.target.pokemon; 
     fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase().trim()}`)
     .then(data => data.json())
     .then(response => renderPokemonData(response))
}
const renderPokemonData = data =>{
    const sprite = data.sprites.front_default;
    const { stats, types } = data;

    pokeName.textContent = data.name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `N° ${data.id}`;
    setCardColor(types)
    renderPokemonTypes(types)
}   
const setCardColor = types => {
    const gradientColors = typeColors[types[0].type.name]
    pokeCard.style.background =  `linear-gradient(${gradientColors})`;
}
const renderPokemonTypes = types => {
    pokeTypes.innerHTML = ''
    types.forEach(type =>{
        const typeTextElement = document.createElement('div')
        typeTextElement.style.background = "#222"
        typeTextElement.style.color = typeColorsTags[type.type.name]
        typeTextElement.style.borderRadius = "1rem"
        typeTextElement.style.padding = ".1rem .5rem"
        typeTextElement.style.marginTop = ".1rem"
        typeTextElement.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
        typeTextElement.style.textAlign = "center"
        typeTextElement.textContent = type.type.name
        pokeTypes.appendChild(typeTextElement)
    })
}