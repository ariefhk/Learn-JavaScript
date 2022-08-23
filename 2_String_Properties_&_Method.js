let sentences = "Learn Javascript";
console.log(sentences[0]);
console.log(sentences[2]);

// String Properties
// .length()
let word = "Javascript is good";
console.log(word.length);

// .charAt()
console.log("I like Javascript".charAt(0));

// .concat()
let string1 = "Good";
let string2 = "Morning";
console.log(string1.concat(" ", string2));

// .indexOf()
let text = "pret cas ces!";
console.log(text.indexOf("pret"));
console.log(text.indexOf("ces!"));
console.log(text.indexOf("haha")); //-1 karena unknown

// Palindrome
const palindromeChecker = (string) => {
  let str1 = string.toLowerCase();
  let str2 = str1.split(" ");
  let myStr = str2.map((value) => {
    return value.split("").reverse().join("");
  });
  return myStr.reverse().join(" ") === string.toLowerCase();
};

console.log(palindromeChecker("dad yu uy dad"));
