
// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';



// const asd = document.getElementById('asd');
// const pokemon = document.getElementById('pokemon');
// const color = document.getElementById('color');

// const res = fetch(url).then(response => response.json()).then(data => pokemon.src = data.sprites.front_default);
// console.log(color.value);
// // pokemon.style.background = 'black';
// color.addEventListener('change', () => {
// 	document.body.style.background = color.value; 		
// });

// asd.addEventListener('change', () => {
// 	if(asd.value < 50){
// 		document.body.style.background = color.value; 		
// 	}else{
// 		document.body.style.background = 'black'; 		
// 	}
// })

// function test(){
// document.body.style.background = 'red'; 
// 	if(asd.getAttribute('type') == 'range'){
// 		asd.setAttribute('type', 'button');
// 	}else{
// 		asd.type='range';
// 	}

// console.log(asd.value);

// }
let pokemon = '';
// const namePokemon = document.getElementById('namePokemon');
// const btnSearch = document.getElementById('btnSearch');
const btnRandom = document.getElementById('btnRandom');
const description = document.getElementById('description');
let cantLetter = 0;
let pokemonArray = [];
let nombrePokemon;

// btnSearch.addEventListener('click', async () => {
// 	pokemon = namePokemon.value;
// 	let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
// 	let data = await response.json();
// 	console.log(data);
// 	description.innerHTML = `<img src="${data.sprites.front_default}" alt="">
// 							<h1>Nombre: ${data.name}</h1> <br>
// 							<h2>Hp: ${data.stats[0].base_stat}</h2> <br>
// 							<h2>Attk: ${data.stats[1].base_stat}</h2> <br>
// 							<h2>Def: ${data.stats[2].base_stat}</h2> <br>
// 							`
// 	// pokemonSearch(pokemon);
// });

btnRandom.addEventListener('click', () => {
	randPokemon();
})

async function searchPokemon(name){
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => response.json()).then(data => console.log(data));
	console.log(res);
}

async function pokemonSearch(name){
	let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	let data = await response.json();
	console.log(data);

	description.innerHTML = `<img src="${data.sprites.front_default}" alt="">
							<h1>Nombre: ${data.name}</h1> <br>
							<h2>Hp: ${data.stats[0].base_stat}</h2> <br>
							<h2>Attk: ${data.stats[1].base_stat}</h2> <br>
							<h2>Def: ${data.stats[2].base_stat}</h2> <br>
							`
}

const randPokemon = async () => {
	cantLetter = 0;
	pokemonArray = [];
	random = Math.floor(Math.random() * 100	);
	console.log(random);
	let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
	let data = await res.json();
	console.log(data.name);
	description.innerHTML = `<img src="${data.sprites.front_default}" alt=""></br>`
	createInputs(data.name);
}

function createInputs(nombre){
	nombrePokemon = nombre;
	cantLetter = nombre.length;
	for(let i = 0; i < cantLetter; i++){
		description.innerHTML += `<input id="a${i + 1}" name="a${i + 1}" onChange="test(a${i+1}, ${i})" type="text" maxlength="1">`
	}

}

document.addEventListener("keyup", function(event) {
	let mot;
	if (event.key === 'a') {
		mot = pokemonArray.join('');
		console.log(mot);
		console.log(nombrePokemon);
		console.log(pokemonArray);
		if(mot == nombrePokemon)
		{
			randPokemon();
		}
	}
  });

  function test(id, num){
	pokemonArray[num] = id.value
	var mot = pokemonArray.join('');
	if(mot == nombrePokemon)
		{
			randPokemon();
		}
  }