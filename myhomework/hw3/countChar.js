function countChar(str, c){
  var Char = 0;
  for (var i = 0; i < str.length; i++){
    console.log(i, str.charAt(i));
    if (str.charAt(i) === c){
      Char++;
    }
  }
  return Char;
}
console.log(countChar("a", "b"));
