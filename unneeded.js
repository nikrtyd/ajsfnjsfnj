// Максимально эффективно использовать оставшуюся проволоку и арматуру
function trere() {
  let maxProfit = 0, maxOfType1 = 0, maxOfType2 = 0;
  for (let type1count = 20; type1count < 999; type1count++) {
    for (let type2count = 60; type2count < 999; type2count++) {
      let steelSurplus = 240 - (3 * type1count) - (2 * type2count);   // остаток стали
      let newProfit = (type1count * 6 + type2count * 3);
      if (steelSurplus < 0) continue; // остаток не может быть меньше 0
      if (newProfit > maxProfit) {
        maxProfit = newProfit;
        maxOfType1 = type1count;
        maxOfType2 = type2count;
      }
    }
  }
  return [maxProfit, maxOfType1, maxOfType2];
}
console.log(trere());

