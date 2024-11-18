export default function QueryProcessor(query: string): string {
  const pattern = /What is (\d+) plus (\d+)/i;
  const patternLargest = /Which of the following numbers is the largest: (\d+), (\d+), (\d+)/i;
  const patternMulti = /What is (\d+) multiplied by (\d+)/i;
  const patternPrime = /Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/i;
  const bothcubeandsquare = /Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/i;
  const diff = /What is (\d+) minus (\d+)/i;
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "19-10234" );
  }
  if (query.toLowerCase().includes("name")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "Jeamhowards Montiel" );
  }

  if(query.match(pattern)) {
    const matches = query.match(pattern);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      return (num1 + num2).toString();
    }
  }

  if(query.match(patternLargest)) {
    const matches = query.match(patternLargest);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      const num3 = parseInt(matches[3]);
      return Math.max(num1, num2, num3).toString();
    }
  }

  if(query.match(patternMulti)) {
    const matches = query.match(patternMulti);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      return (num1 * num2).toString();
    }
  }

  if(query.match(bothcubeandsquare)) {
    const matches = query.match(bothcubeandsquare);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      const num3 = parseInt(matches[3]);
      const num4 = parseInt(matches[4]);
      const num5 = parseInt(matches[5]);
      const num6 = parseInt(matches[6]);
      const num7 = parseInt(matches[7]);
      return [num1, num2, num3, num4, num5, num6, num7].filter((num) => {
        return Math.sqrt(num) % 1 === 0 && Math.cbrt(num) % 1 === 0;
      }).join(", ");
    }
  }

  if(query.match(diff)) {
    const matches = query.match(diff);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      return (num1 - num2).toString();
    }
  }


  if(query.match(patternPrime)) {
    const matches = query.match(patternPrime);
    if (matches) {
      const num1 = parseInt(matches[1]);
      const num2 = parseInt(matches[2]);
      const num3 = parseInt(matches[3]);
      const num4 = parseInt(matches[4]);
      const num5 = parseInt(matches[5]);
      return [num1, num2, num3, num4, num5].filter((num) => {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num > 1;
      }).join(", ");
    }
  }

  return "";
}
