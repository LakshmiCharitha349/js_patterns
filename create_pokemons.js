const pokemons = [
  {
    name: "bulbasur",
    id: "#0001",
    category: "seed",
    abilities: "overgrow",
    type: ["grass", "poison"],
    weakness: ["fire", "ice", "flying", "psychic"],
  },

  {
    name: "charmander",
    id: "#0004",
    category: "lizard",
    abilities: "blaze",
    type: ["fire"],
    weakness: ["water", "ground", "rock"],
  },
  {
    name: "pikachu",
    id: "#0025",
    category: "mouse",
    abilities: "static",
    type: ["electric"],
    weakness: ["ground"],
  },
  {
    name: "butterfree",
    id: "#0012",
    category: "butterfly",
    abilities: "compound eyes",
    type: ["bug", "flying"],
    weakness: ["fire", "electric", "ice", "flying", "rock"],
  },
  {
    name: "pidgeot",
    id: "#0018",
    category: "bird",
    abilities: "tangled feet",
    type: ["normal", "flying"],
    weakness: ["electric", "ice", "rock"],
  },
];

const pokemons2 = [
  {
    name: 'wigglypuff',
    id: '#0040',
    category: 'balloon',
    abilities: 'competitive',
    type: ['normal', 'fair'],
    weakness: ['poison', 'steel']
  },
  {
    name: 'oddish',
    id: '#0043',
    category: 'weed',
    abilities: 'chlorophll',
    type: ['grass', 'poison'],
    weakness: ['fire', 'ice', 'flying', 'psyhic']
  },
  {
    name: 'parasect',
    id: '#0047',
    category: 'mushroom',
    abilities: 'effect spore',
    type: ['bug', 'grass'],
    weakness: ['fire', 'ice', 'poison', 'bug', 'flying', 'rock']
  },
  {
    name: 'golduck',
    id: '#0055',
    category: 'duck',
    abilities: 'cloud nine',
    type: ['water'],
    weakness: ['grass', 'electric']
  },
  {
    name: 'meowth',
    id: '#0052',
    category: 'scratch cat',
    abilities: 'pickup',
    type: ['normal'],
    weakness: ['fighting']
  },
];

const ob1 = {
    name: 'meowth',
    id: '#0052',
    category: 'scratch cat',
    abilities: 'pickup',
    type: ['normal'],
    weakness: ['fighting']
  };

for (const key in ob1) {
  console.log(ob1[key]);
}

for (const key of Object.keys(ob1)) {
  console.log("key :", key);
}

console.log("entries",Object.entries(ob1))

