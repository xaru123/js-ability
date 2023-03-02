const obj = {
  name: 'A',
  age: 18,
  job: 'gamer',
};
const entries = [
  ['name', 'A'],
  ['age', 26],
  ['job', 'gamer'],
];

const map = new Map(entries);
map.set('newFilter', 42).set(obj, 'VALUE OBJ').set(NaN, 'NAN ??');

// console.log(map.has(obj));
// map.delete(obj);
// console.log(map.has(obj));
// console.log(map.size);
// map.clear();
// console.log(map.size);
// console.log(map.entries())
// for (let [key,value] of map) {
//   console.log(key,value)
// }

// for (let val of map.values()) {
//   console.log(val)
// }
// for (let key of map.keys()) {
//   console.log(key)
// }

// map.forEach((val,key,m)=> {
//   console.log(val, key)
// })

// ==========================

// const array = Array.from(map)
// console.log(array)
//
// const mapObj = Object.fromEntries(map)
// console.log(mapObj)

// ==========================


const users = [
  {name: 'A'},
  {name: 'B'},
  {name: 'C'},
  {name: 'D'},
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[0]))
console.log(lastVisit(users[1]))