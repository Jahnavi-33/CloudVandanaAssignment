function wordsReverser(string){
    return string.split('').reverse().join('');
 }

  const inputStr = prompt();

  document.write(wordsReverser(inputStr));
