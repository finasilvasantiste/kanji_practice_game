// Fisher–Yates shuffle
function shuffle (array) {
  let i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }

  return array;
}

function shuffleIt(dataLength){
  const sequentialNumbersUpToLength = Array.from(Array(dataLength).keys());
  const shuffledOrder = shuffle(sequentialNumbersUpToLength);

  return shuffledOrder;
}

export default shuffleIt;