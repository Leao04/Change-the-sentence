const background = document.querySelectorAll("body");
const sentence = document.getElementById("sentence");
const array = [
  '"The advantage of having a bad memory is having fun with the same good things many times as if it were the first time."',
  '"What is done for love is always beyond good and evil."',
  '"I was hurt, not that you lied to me, but that I couldn t believe you again."',
  '"What does not kill me makes me stronger."',
  '"There are no eternal facts, as there are no absolute truths"',
  '"There is always some madness in love. But there s always some reason in madness."',
  '"The higher we rise, the smaller we appear in the eyes of those who cannot fly."',
  '"Convictions are more dangerous enemies of the truth than lies."',
  '"Become what you are."',
  '"Life gets harder and harder near the top."',
];
console.log(array.length);

function putAsentence() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  const randomSentence = Math.floor(Math.random() * array.length);
  const randomQuote = array[randomSentence];
  sentence.textContent = randomQuote;
}

document.getElementById("button").addEventListener("click", putAsentence);
