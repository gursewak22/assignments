/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  let map = new Map(); 
  transactions.forEach(transaction => {
    if(map.has(transaction.category)){
      map.set(transaction.category, map.get(transaction.category) + transaction.price);  
    }
    else{
       map.set(transaction.category , transaction.price);
    }
  });
  for (let [key, value] of  map.entries()) {
    ans.push({
      category: key, 
      totalSpent: value
    })
    }
    return ans; 
} 

module.exports = calculateTotalSpentByCategory;
