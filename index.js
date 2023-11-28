//* Part one: Refactoring Old Code

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let info = csv.split('\n')

for (let i = 0; i < info.length; i++) {
    info[i] = info[i].split(',')
}

console.log(info);
console.log(typeof info);


//* Part 2: Expanding Functionality

let columns = info[0].length

console.log(columns);   

// make a for loop to put all arrays go into new array
let arr2D = [];
 
for (let i = 0; i <= info.length-1; i++){
    let inf = info[i]
    arr2D[i] = inf
}

console.log(arr2D)
console.log(typeof arr2D)

//* Part 3: Transforming Data

const user1 = {
    id: 42,
    name: 'Bruce',
    occupation: 'Knight',
    age: 41,
}
const user2 = {
    id: 57,
    name: 'Bob',
    occupation: 'Fry Cook',
    age: 19,
}
const user3 = {
    id: 63,
    name: 'Blaine',
    occupation: 'Quiz Master',
    age: 58,
}
const user4 = {
    id: 98,
    name: 'Bill',
    occupation: "Doctor's Assistant",
    age: 26,
}

const users = [user1, user2, user3, user4]

// console.log(users);


//* Part 4: Sorting and Manipulating Data

// let removedUser = users.pop();
// console.log(removedUser);
users.pop();

let user5 = {
    id: 48,
    name: 'Barry',
    occupation: 'Runner',
    age: 25,
}
users.splice(1, 0, user5)

let user6 = {
    id: 7,
    name: 'Bilbo',
    occupation: 'None',
    age: 111,
}

users.push(user6)

// let updatedInfo = removedUser.splice(1, 0, user5)
// Not Working with removed user as an array
// console.log(updatedInfo);

console.log(users);

// sum all elements under object key 'age'

let total = 0;
users.forEach(item => {
    total += item.age;
});
  
console.log(total);

//* Part 5: Transform back into CSV

let newCsv = arr2D.flat()

console.log(newCsv)
let keys = newCsv.slice(0, 4)
console.log(keys);
let value = newCsv.slice(4, 8)
console.log(value);

let studentObj = {}
for (let index = 0; index < keys.length; index++) {
    studentObj[keys[index]] = value[index] 
}
console.log(studentObj);
