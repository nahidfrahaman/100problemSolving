
//Practice Problem 1: Harry’s mom gave him money and asked him to buy some oranges and apples. help Harry calculate how much money the shopkeeper will return.

/*
Sample Input:
1000
700
Output:
300```

*/
const totalAmount = 1000;
const totalShopping = 700;

function calculate(total  , cost ) {
    return total - cost;
}

const remainingAmount = calculate(totalAmount, totalShopping)
console.log(remainingAmount);
