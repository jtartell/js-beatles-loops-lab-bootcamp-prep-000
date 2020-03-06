// add solution here
let musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
let instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
   let array = []
   for (let i=0; i < musicians.length; i++) {
     array.push(`${musicians[i]} plays ${instruments[i]}`);
   }
   return array
}

theBeatlesPlay(musicians, instruments)


function johnLennonFacts() {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  var array = []
  var i = 0
 
  while (i < facts.length) {
   array.push(`${facts[i]}!!!`);
   i++;
  }
  return array
  
}

johnLennonFacts()


function iLoveTheBeatles(number) { 
  
let newArray = []; 
do {
 newArray.push(`I love the Beatles!`); 
 number++; 
 } while (number < 15); 

return newArray;
}

iLoveTheBeatles(8);

function whileLoop(n) {
  while (n > 0) 
    console.log(--n);
  return "done"
  
}

function whileLoop(n) {
  while (n > 0) 
    console.log(--n);
  return "done"
  
}
