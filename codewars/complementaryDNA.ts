export class Kata {
  static dnaString(dna: string): string {
    return dna.split('').map(elem => {
      if(elem === 'A') return 'T';
      if(elem === 'T') return 'A';
      if(elem === 'C') return 'G';
      if(elem === 'G') return 'C';
      return elem;
    }).join('');
  }
}

const repl = Kata.dnaString('ATTGC');
