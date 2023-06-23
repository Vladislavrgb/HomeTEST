export function repeatWord(word, count) {
  let result = '';
  if (count >= 1){
    for( let i = 1; i < count; i++ ){
    result = word + ", " + result;
  } return result += word;
  } else return("Error, count < 1")
  
}