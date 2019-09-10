export class Kata {
  static findLongest(array: number[]): number {
    let allCounts: number[] = [];
    array.forEach((elem: number) => {
      allCounts.push(elem.toString().length);
    });
    return array[allCounts.indexOf(Math.max(...allCounts))];
  }
}

const num = Kata.findLongest([8, 900, 500]);
