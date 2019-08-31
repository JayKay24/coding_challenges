// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript

export class Kata {
  private static vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  public static getCount(str: string) {
    const strArr = str.split('');
    let vowelCount: number = 0;

    for(let i of strArr) {
      for(let j of Kata.vowels) {
        if(j == i) vowelCount++;
      }
    }
    return vowelCount;
  }
}

console.log(Kata.getCount('here'));