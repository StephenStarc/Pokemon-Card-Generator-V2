
const url = 'https://api.pokemontcg.io/v2/cards/'
const random = document.getElementById('randomcard')
const randombtn = document.getElementById('randombtn')
let a = document.getElementById('a')

randombtn.addEventListener('click', function(){
    getpokeid()

    // I Know this is not the right way --- please comment the rigth way

    setTimeout(() => {
        randombtn.innerText = `Random Card Generating 1`;
      }, 1000);
      setTimeout(() => {
        randombtn.innerText = `Random Card Generating 2`;
      }, 2000);
      setTimeout(() => {
        randombtn.innerText = `Random Card Generating 3`;
      }, 3000);
      setTimeout(() => {
        randombtn.innerText = `Random Card Generating 4`;
      }, 4000);
      setTimeout(() => {
        randombtn.innerText = `Random Card Generating 5`;
      }, 5000);
      setTimeout(() => {
        randombtn.innerText = `Random Card Generating 6`;
      }, 6000);
      setTimeout(() => {
        randombtn.innerText = `Random Card Generating 7`;
      }, 7000);
})

const getpokeid = () => {
    let id = Math.floor(Math.random() * 250) + 1
    pokemoncardgen(id)
}

// pokemoncardgen  = (id) => {
// fetch(`${url}/${id}`)
// .then(result => result.json())
// .then(poke => {
//     pokemoncard(poke)
// })
// }

pokemoncardgen = async (id) => {
    result = await fetch(`${url}`)
    poke = await result.json()
    cardgen(poke.data[id]);
}


cardgen = (values) => {
    cardimg = values.images.small
    console.log(cardimg)
    a.style.display = 'none'
    random.innerHTML = `<img src="${cardimg}" />`
    randombtn.innerText = `Generate Card`;
}



//POKE IMG - poke.sprites.other.dream_world.front_default
/* <span>type 1</span>
            <span>type 2</span> */
