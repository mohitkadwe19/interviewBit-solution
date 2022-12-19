function intToRoman(A) {

  let roman = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  let romanKeys = Object.keys(roman).reverse();
  let romanKeysLength = romanKeys.length;
  let romanString = '';

  for (let i = 0; i < romanKeysLength; i++) {
    let romanKey = romanKeys[i];
    let romanValue = roman[romanKey];

    while (A >= romanKey) {
      romanString += romanValue;
      A -= romanKey;
    }
  }

  return romanString;

}

let A = 5;
console.log(intToRoman(A));