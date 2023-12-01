// there are 26+1 characters
const ALPHABET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const KEY = 1

function shiftLetter(letter, key){
  const letterIndex = ALPHABET.indexOf(letter);
  let shiftedIndex = letterIndex + key;
  shiftedIndex = shiftedIndex % ALPHABET.length;
  if (shiftedIndex < 0){
    shiftedIndex = ALPHABET.length + shiftedIndex;
  }
  //console.log("letter=" + letter + "; shiftedIndex = " + shiftedIndex);
  /*
  if (shiftedIndex > ALPHABET.length - 1){
    shiftedIndex = Math.floor(shiftedIndex / ALPHABET.length);
  }
  if (shiftedIndex <= 0){
    shiftedIndex = ALPHABET.length - shiftedIndex - 1;
  }
  */
  return ALPHABET[shiftedIndex];
}

function encrypt(text, key){
  let encryptedText = ""; 
  const textToEncrypt = text.toUpperCase();
  for(let i = 0; i < textToEncrypt.length; i++){
    const originalLetter = textToEncrypt[i];
    const shiftedLetter = shiftLetter(originalLetter, key);
    //console.log(originalLetter + " >> " + shiftedLetter);
    encryptedText += shiftedLetter;
  }
  return encryptedText;
}

function decrypt(text, key){
  let decryptedText = ""; 
  const textToDecrypt = text.toUpperCase();
  for(let i = 0; i < textToDecrypt.length; i++){
    const originalLetter = textToDecrypt[i];
    const shiftedLetter = shiftLetter(originalLetter, -key);
    //console.log(originalLetter + " >> " + shiftedLetter);
    decryptedText += shiftedLetter;
  }
  return decryptedText;
}


/*
let es = encrypt("mama", KEY);
console.log("encrypted string=" + es);
console.log("decrypted string=" + decrypt(es, KEY));

es = encrypt("xyz ", KEY);
console.log("encrypted string=" + es);
console.log("decrypted string=" + decrypt(es, KEY));
*/

function bruteForce(encryptedText){
  let decryptedText = "";
  const maxKey = ALPHABET.length - 1;
  for(let key = 0; key <= maxKey; key++){
    console.log("key=" + key);
    console.log(decrypt(encryptedText, key));
  }
  return decryptedText;
}

const text = "Lincoln was born into poverty in a log cabin in Kentucky and was raised on the frontier primarily in Indiana He was self educated and became a lawyer Whig Party leader Illinois state legislator and US congressman from Illinois he returned to his successful law practice in Springfield Illinois he was angered by the Kansas Nebraska Act which opened the territories to slavery causing him to re enter politics He soon became a leader of the new Republican Party He reached a national audience Senate campaign debates against Stephen Douglas Lincoln ran for president sweeping the North to gain victory";
const encryptedText = encrypt(text, 5);
//bruteForce(encryptedText);

const encryptedText2 = "OLQFROQCZDVCERUQCLQWRCSRYHUWACLQCDCORJCFDELQCLQCNHQWXFNACDQGCZDVCUDLVHGCRQCWKHCIURQWLHUCSULPDULOACLQCLQGLDQDCKHCZDVCVHOICHGXFDWHGCDQGCEHFDPHCDCODZAHUCZKLJCSDUWACOHDGHUCLOOLQRLVCVWDWHCOHJLVODWRUCDQGCXVCFRQJUHVVPDQCIURPCLOOLQRLVCKHCUHWXUQHGCWRCKLVCVXFFHVVIXOCODZCSUDFWLFHCLQCVSULQJILHOGCLOOLQRLVCKHCZDVCDQJHUHGCEACWKHCNDQVDVCQHEUDVNDCDFWCZKLFKCRSHQHGCWKHCWHUULWRULHVCWRCVODYHUACFDXVLQJCKLPCWRCUHCHQWHUCSROLWLFVCKHCVRRQCEHFDPHCDCOHDGHUCRICWKHCQHZCUHSXEOLFDQCSDUWACKHCUHDFKHGCDCQDWLRQDOCDXGLHQFHCVHQDWHCFDPSDLJQCGHEDWHVCDJDLQVWCVWHSKHQCGRXJODVCOLQFROQCUDQCIRUCSUHVLGHQWCVZHHSLQJCWKHCQRUWKCWRCJDLQCYLFWRUA";

console.log(decrypt(encryptedText2, 3));








