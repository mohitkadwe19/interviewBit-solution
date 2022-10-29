class Solution {
  isPalindrome(A) {
    const withoutCommas = A.split(',').join('');
    const withoutColon = withoutCommas.split(':').join('');
    const withoutSpaces = withoutColon.split(' ').join('');
    const withoutDots = withoutSpaces.split('.').join('');
    const withoutQuestionMarks = withoutDots.split('?').join('');
    const withoutExclamationMarks = withoutQuestionMarks.split('!').join('');
    const withoutSemicolons = withoutExclamationMarks.split(';').join('');
    const withoutHyphens = withoutSemicolons.split('-').join('');
    const withoutApostrophes = withoutHyphens.split("'").join('');
    const withoutDoubleQuotes = withoutApostrophes.split('"').join('');
    const lowerCaseLetter = withoutDoubleQuotes.toLowerCase();
    const reversed = lowerCaseLetter.split('').reverse().join('');
    if (lowerCaseLetter === reversed) {
      return 1;
    }
    return 0;
  }
};

let solution = new Solution();
console.log(solution.isPalindrome('A man, a plan, a canal: Panama'));