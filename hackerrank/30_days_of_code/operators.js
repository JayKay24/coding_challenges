function solve(meal_cost, tip_percent, tax_percent) {
  const mealTipCost = meal_cost * (tip_percent / 100);
  const mealTaxCost = meal_cost * (tax_percent / 100);
  return Math.round(meal_cost + mealTipCost + mealTaxCost);
}

total = solve(12.00, 20, 8);
