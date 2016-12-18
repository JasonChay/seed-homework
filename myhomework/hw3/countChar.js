function countChar(str, c){
  var Char = 0;
  for (var i = 0; i <= str.length; i ++){
    if (str.charAt(i) == c){
      Char ++;
    }
  }
  return Char;
}
console.log(countChar("Hello", "l"));
