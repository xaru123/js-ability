let obj = {name: '2'}
// const arr = [obj]
// obj = null
// console.log(arr[0])

const map = new WeakMap([
    [obj, 'obj_data']
])
// console.log(map.has(obj))
// console.log(map.get(obj))
// console.log(map)
// obj = null
// console.log(map.has(obj))
// console.log(map.get(obj))
// console.log(map)

// ==========================
const cache = new WeakMap()
function cacheUser(user) {
    if (!cache.has(user)) {
      cache.set(user, new Date())
    }
    return cache.get(user)
}

let user1 = {name:1}
let user2 = {name:2}

cacheUser(user1)
cacheUser(user2)
console.log(cache)
console.log(cache.has(user1))
user1 = null
console.log(cache)
console.log(cache.has(user1))
