const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6, 10]);

// set.add(10).add(30).add(30)
//
// console.log(set);
// console.log(set.has(30));
// console.log(set.has(42));
// console.log(set.size);
// console.log(set.delete(2));
// console.log(set);
// set.clear()
// console.log(set);

// console.log(set.values())
// console.log(set.keys())
// console.log(set.entries())

// ==========================

function uniqValues(array) {
  return [...new Set(array)];
}

console.log(uniqValues([1, 1, 2, 4, 4, 56, 6, 7, 7, 7, 7, 8]));