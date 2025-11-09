function startsWithA(sentences) {
  return [ "a", "also", "another", "arbitrary", "An" ];
}

function inputs() {
  const sentences = [
  'just a phrase',
  'also another phrase',
  'arbitrary phrase',
  'An interesting phrase'
];
console.log(startsWithA(sentences));
}

inputs();