const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    
    let newArr = [];
    let sey = '';
    let elem;

     const pattern = new RegExp(".{1," + 10 + "}", "ig");   // разделили строку по 10 символов в массив newArr 
     newArr = expr.match(pattern).map(item => item.padEnd(10, "."));
    
        for( let i = 0 ; i < newArr.length ; i++) {   // повторяем столько раз сколько нашли элементов по 10 символов
            elem = newArr[i];   //  один 10 значный элемент массива - букву

              if ( elem == '**********'){
                sey += ' '
              } else { 
               
                elem = elem.split('');   // делим на символы

                let ind = elem.indexOf('1');           // находим с какого индекса пошли 1

                
    let letter = [];
    let jobLetter = '';
    
                for( let k = ind ; k < 10 ; k++){    // убираем ненужные нули
                    let num = elem[k];
                    letter.push(num);     // находим первый набор цифр 
                } 

                for( let l = 0 ; l < letter.length ; l+= 2){
                    if(letter[l] == '1' && letter[l + 1] == '0' ){
                     jobLetter +=  '.';
                    } else if (letter[l] == '1' && letter[l + 1] == '1' ){
                     jobLetter += '-';
                    }
                   }
                   jobLetter = MORSE_TABLE[jobLetter] ; // декодирует букву  
                   sey += jobLetter ;
                   
              }
        }
      return sey
}
 


module.exports = {
    decode
}