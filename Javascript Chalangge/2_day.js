// DO NOT DELETE, THIS IS TOOLS FOR YOUR NUMBER OF QUIZ
const numberOfQuiz = (NumberOfQuiz) => {
  console.log(`---- Quiz Number = ${NumberOfQuiz} ----\n`);
};

// 1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// 2.Print the string on the browser console using console.log()
// 3.Print the length of the string on the browser console using console.log()
// 4.Change all the string characters to capital letters using toUpperCase() method
// 5.Change all the string characters to lowercase letters using toLowerCase() method
// 6.Cut (slice) out the first word of the string using substr() or substring() method
// 7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// 8.Check if the string contains a word Script using includes() method
// 9.Split the string into an array using split() method
// 10.Split the string 30 Days Of JavaScript at the space using split() method
// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// 12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// 13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// 14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// 15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// 16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// 17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// 21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// 22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// 23.Use match() method to find all the a’s in 30 Days Of JavaScript
// 24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// 25.Use repeat() method to print 30 Days Of JavaScript 2 times
// 26.Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// 27.Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// 28.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
// 29.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
// 30.Check if 'on' is found in both python and jargon
// 31.I hope this course is not full of jargon. Check if jargon is in the sentence.
// 32.Generate a random number between 0 and 100 inclusively.
// 33.Generate a random number between 50 and 100 inclusively.
// 34.Generate a random number between 0 and 255 inclusively.
// 35.Access the 'JavaScript' string characters using a random number.
// 36.Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// 37.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 38.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
// 39.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// 40.Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// const sentence =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// 41.Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

/* ===  ANSWER === */

numberOfQuiz(1);
let challenge = "30 Days Of JavaScript";

numberOfQuiz(2);
console.log(challenge);

numberOfQuiz(3);
console.log(challenge.length);

numberOfQuiz(4);
console.log(challenge.toUpperCase());

numberOfQuiz(5);
console.log(challenge.toLowerCase());

numberOfQuiz(6);
console.log(challenge.substring(0, 3));

numberOfQuiz(7);
console.log(challenge.substring(3, 22));

numberOfQuiz(8);
console.log(challenge.includes("30"));

numberOfQuiz(9);
console.log(challenge.split());

numberOfQuiz(10);
console.log(challenge.split(" "));

numberOfQuiz(11);
let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split(","));

numberOfQuiz(12);
console.log(challenge.replace("JavaScript", "Python"));

numberOfQuiz(13);
console.log(challenge.charAt(15));

numberOfQuiz(14);
console.log(challenge.charCodeAt("J"));

numberOfQuiz(15);
console.log(challenge.indexOf("30"));

numberOfQuiz(16);
console.log(challenge.lastIndexOf("30"));

numberOfQuiz(17);
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));

numberOfQuiz(18);
console.log(sentence.lastIndexOf("because"));

numberOfQuiz(19);
console.log(sentence.search("because"));

numberOfQuiz(20);
console.log(sentence.trim());

numberOfQuiz(21);
console.log(sentence.startsWith("You"));

numberOfQuiz(22);
console.log(sentence.endsWith("conjunction"));

numberOfQuiz(23);
console.log(sentence.match("a"));

numberOfQuiz(24);
console.log("30 Days of ".concat("JavaScript"));

numberOfQuiz(25);
console.log(sentence.repeat(2));

numberOfQuiz(26);
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

numberOfQuiz(27);
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead\"."
);

numberOfQuiz(28);
let var1 = "10",
  var2 = 10;

// Checking
if (typeof var1 === typeof var2) {
  console.log("Equal");
} else {
  console.log("Make them Equal");
  let newVar2 = var2.toString();
  console.log(typeof var1, typeof newVar2);
  if (typeof var1 === typeof newVar2) {
    console.log("Now Equal");
  }
}

numberOfQuiz(29);
let var3 = parseFloat("9.8"),
  var4 = 10;

// Checking
if (typeof var3 == typeof var4) {
  console.log("Equal");
}

numberOfQuiz(30);
let python = "Python",
  jargon = "Jargon";

if (python.includes("on") && jargon.includes("on")) {
  console.log("Yes");
}

numberOfQuiz(31);
let jargonSentence = "I hope this course is not full of jargon.";
if (jargonSentence.includes("jargon")) {
  console.log("Yes, includes jargon ");
}

numberOfQuiz(32);
let randomNum = Math.random();
let randomNumToTen = randomNum * 101;
console.log(randomNumToTen);

let randomNumToTenFixed = Math.floor(randomNumToTen);
console.log(randomNumToTenFixed);

numberOfQuiz(33);
let number = Math.floor(Math.random() * 51 + 50);
console.log(number);

numberOfQuiz(34);
let number2 = Math.floor(Math.random() * 256);
console.log(number2);

numberOfQuiz(35);
const generateString = (Sentence) => {
  let answer = "";
  let sentence = Sentence;
  let possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let i = 0;
  while (i < sentence.length) {
    let getChar = possibleChar.charAt(
      Math.floor(Math.random() * possibleChar.length)
    );
    if (sentence[i].match(getChar)) {
      answer += getChar;
      i += 1;
    } else {
      console.log(`${getChar} Mencari ${sentence[i]}`);
    }
  }
  return answer;
};
// console.log(generateString("JavaScript"));

numberOfQuiz(36);
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');
