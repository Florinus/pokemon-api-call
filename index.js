const button = document.querySelector('#button')
const search = document.querySelector('#search')
const pokemon = document.querySelector('.pokemon')


// Pokemon
const sprite = document.querySelector('.sprite')
const name = document.querySelector('.name')
const type = document.querySelector('.type')
const physical = document.querySelector('.physical')

button.addEventListener('click', (e) => {
  e.preventDefault()
  const x = search.value.toLowerCase()

  fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // Sprite
      const spriteImg = `<img class="preview-image" src="${data.sprites.front_default}" />`
      sprite.innerHTML = spriteImg

      // Name
      name.innerText = data.name

      // type
      type.innerText = data.types[0].type.name


      // Weight
      weight = `<p class="weight">Weight: <span class="value">${data.weight}kg </span></p>  `
      physical.innerHTML = weight

      // Height
      height = `<p>Height: <span class="value">${data.height}kg</span></p>  `
      physical.innerHTML += height

      pokemon.style.display = 'flex'

    }).catch((err) => {

      const pokemon2 = document.querySelector('.no-pokemon')
      pokemon2.style.display = 'block'
      setTimeout(() => { pokemon2.style.display = 'none' }, 1000);
    })
})