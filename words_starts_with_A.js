const isStartsWithA = function (string) {
  return string.toLowerCase().startsWith("a")
};

function mapSentences(sentences) {
  return sentences.map(x => x.split(" ")).flatMap(x => x).filter(isStartsWithA);
}

function display() {
  const sentences = [
    'just a phrase',
    'also another phrase',
    'arbitrary phrase',
    'An interesting phrase'
  ];

  console.log(mapSentences(sentences));
}

display();