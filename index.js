window.onload = function() {
  // necessary for dropdown menus to function properly:
  // https://stackoverflow.com/a/25347431
  $('.ui.dropdown').dropdown();


let output = document.getElementById('whaletalk');
let english = document.getElementById('english').value;
let button = document.getElementById('button');
let resetButton = document.getElementById('reset');


let whaleTalk = () => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];
  let english = document.getElementById('english').value;

  for (let i = 0; i < english.length; i++) {
    for(let j = 0; j < vowels.length; j++) {
      if(english[i] === vowels[j]) {
        resultArray.push(vowels[j]);
        if(vowels[j] === 'e' || vowels[j] === 'u') {
          resultArray.push(vowels[j]);
        };
      };
    };
  };
  console.log("You're talking Whale!")
  output.innerHTML = resultArray.join('').toUpperCase();
  output.style.display = 'block';
};

let reset = () => {
  output.innerHTML = ''
  output.style.display = ''
  this.document.getElementById('english').value = "";
};

button.onclick = whaleTalk;
resetButton.onclick = reset;
};