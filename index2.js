const arrayBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return (tip = bill * 0.15);
  } else {
    return (tip = bill * 0.2);
  }
}

const tips = arrayBills.map((element) => {
  return calcTip(element);
});

console.log(tips);

let totals = [];
let i = 0;

for (; i < arrayBills.length; i++) {
  totals[i] = arrayBills[i] + tips[i];
}
console.log(totals);

const sumTotals = totals.reduce((max, curr) => max + curr, 0);
const calcAverage = sumTotals / totals.length || 0;

console.log(`The sum is: ${sumTotals}. The average is: ${calcAverage}.`);
