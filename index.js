// Iteration 1: Names and Input

//1.1
let hacker1= "Nikita"
let hacker2= "Aaron"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

//2.1
if(hacker1.length>hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length<hacker2.length){
    console.log (`It seems that the navigator has the longest name it has ${hacker2.length} characters`)
} else {
    console.log(`You have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//3.1
let char ="";
for(i=0;i<hacker1.length;i++){
char += hacker1[i] + " ";
}
console.log(char.toUpperCase());

//3.2
let char1 ="";

for (let i=hacker2.length - 1; i >= 0; i--){
  char1 += hacker2[i];
}
console.log(char1);

//3.3
if(hacker1.toUpperCase() > hacker2.toUpperCase()){
  console.log("Yo, the navigator goes first, definitely")
}
else if(hacker2.toUpperCase() > hacker1.toUpperCase()){
  console.log("The driver's name goes first.")
}
else if(hacker1.toUpperCase() === hacker2.toUpperCase() ){
  console.log("What?! You both have the same name?")
}


//BONUS#1
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tortor et dui sollicitudin ornare. Duis lacinia, lectus nec lacinia ullamcorper, leo neque suscipit eros, sed venenatis risus tellus ac urna. Sed a dolor ligula. Donec ultrices aliquam lectus eu suscipit. Cras nec ligula sed nisl facilisis tempus. Cras non pharetra eros, nec luctus ligula. Aenean ullamcorper bibendum ligula ultricies ultrices. Mauris eget dictum nisi, ut lacinia urna. Praesent pretium libero ac ligula dictum lacinia. Nullam consequat ante sit amet dolor tempor scelerisque. Cras posuere feugiat mi, quis luctus odio interdum in. Quisque sed felis convallis, volutpat augue in, elementum lacus. Proin ullamcorper enim ut leo ornare, ac dictum nulla ultrices. Ut lacus nulla, malesuada eu dictum eu, dictum vitae justo. Maecenas tincidunt ultricies nulla. Nulla dui diam, venenatis vel laoreet nec, elementum at lorem. Nulla eu suscipit nisi. Cras eleifend, turpis a commodo scelerisque, dolor ipsum eleifend magna, eu pretium magna ante quis tortor. Cras nunc sem, finibus in congue ullamcorper, rhoncus vitae metus. Integer in ligula eu nisi volutpat molestie eu sodales neque. Vivamus aliquet eros vitae enim mattis consequat. Quisque finibus dolor lectus, nec vehicula nisl maximus eu. Maecenas eu ornare lectus. Suspendisse potenti. Maecenas at aliquet ex, quis eleifend libero. Morbi vel lorem ante. Sed finibus posuere eros, vitae tempus nunc venenatis quis. Duis tempus enim nisl, at elementum ligula laoreet et. Nam mauris nisi, pellentesque sit amet est eu, blandit facilisis tellus. Nulla iaculis, nulla at vehicula ornare, sapien ligula volutpat neque, vitae cursus diam tellus nec sem. Curabitur semper convallis enim, et fermentum nibh sodales sit amet. Sed accumsan elit sed ornare mattis. Mauris fermentum commodo ultricies. Praesent nec eros metus. Aliquam erat volutpat. Aenean fermentum augue nec nisi ultricies scelerisque. Nulla et interdum tortor. Duis consectetur nulla vestibulum nunc mollis, at accumsan nulla sodales. Praesent a dolor et risus varius sollicitudin sit amet in libero. Suspendisse sapien massa, feugiat vitae eros at, accumsan sagittis ante.'

let wordCount = 0;
let wordsArray = longText.split(" ");

for(i = 0; i < wordsArray.length; i++){
  if (wordsArray[i] !== "") {
    wordCount ++;
  }
}
console.log(wordCount);


let et = " et "

let etCount = longText.split(et).length - 1;
console.log(etCount);


//BONUS#2
let phraseToCheck = "Race car";
let phrase = "";

for(let char of phraseToCheck){
  if("! ,.?".includes(char) === false){
    phrase += char.toLowerCase();
  }
  }

  let backwardsPhrase = "";
  for (let i = phrase.length - 1; i >= 0; i--){
    backwardsPhrase += phrase[i];
  }

  console.log(phrase);
  console.log(backwardsPhrase);
  console.log(phrase === backwardsPhrase);

