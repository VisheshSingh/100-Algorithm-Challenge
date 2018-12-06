function missingLetters(str: string): string {
   const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
   let chars = str.split('');

   for(let i=0;i<chars.length;i++) {
       if(chars[i] !== letters[i]) {
           return letters[i];
       }
   }
   return undefined;
}
console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));