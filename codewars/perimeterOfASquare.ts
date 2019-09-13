export class G964 {
  private static fibonacci(n: number): number {
    if (n < 1) return 0;
    let fibNMinus2: number = 0;
    let fibNMinus1: number = 1;
    let fibN: number = n;
    for (let i: number = 2; i <= n; i++) {
      fibN = fibNMinus1 + fibNMinus2;
      fibNMinus2 = fibNMinus1;
      fibNMinus1 = fibN;
    }
    return fibN;
  }
  public static perimeter(n: number): number {
      let aggregateFibs: number = 0;
      while (n >= 0) {
        aggregateFibs += G964.fibonacci(n + 1);
        n--;
      }
      return 4 * aggregateFibs;
  }
}

console.log(G964.perimeter(30000));
