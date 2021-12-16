export function pluralize(number, words) {
  const word = (n) => {
    n = Math.abs(n) % 100;
    switch (n) {
        // 11-14 товаров, но 21 товар, 22-24 товара
      case 14:
      case 13:
      case 12:
      case 11:
        return words[2];
      default: {
        const numberTwo = n % 10;
        switch (numberTwo) {
          case 2:
          case 6:
          case 7:
          case 8:
            return words[1];
          case 3:
            return words[2];
          default:
            return words[0];
        }
      }
    }
  };

  return word(number);
}