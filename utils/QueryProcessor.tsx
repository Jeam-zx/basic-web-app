export default function QueryProcessor(query: string): string {
  const pattern = /What is (\d+) plus (\d+)/i;
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

  return "";
}
