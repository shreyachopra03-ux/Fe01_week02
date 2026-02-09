// console.log('hello world');
// console.error('this is an error');
// console.warn('this is a warning');


// const (constant) , let usecase :
// const -> use when re-assign nhi krni kisi ki value
// let -> use jab baar bar values re-assign krni pd skti hai !


// const age = 30;
// console.log(age);


// error de degi ye cheez 
// const age;
// age= 19;
//  console.log(age);


// primitve data types : String, numbers, boolean, null, undefined
// string declare krne ke liye always use single or double commas
// null -> mtlb kii intentionally maine value null rkhi hai mujhe nhi chhaiye vhaa kuch
// undefined -> it means ki variable ko declare krdiya hai but koi value assign nhi kri.

// undefined example:
// let x;
// console.log(x);

// null example
// let y = null;
// console.log(y);


// const name = 'shreya';
// const age = 22;
// const rating = 4.8;
// const iscool = true;
// const x = null;         
// const y = undefined;       
// let z;   
// console.log(typeof name)



// +++++++ STRINGS +++++++++


// const name = 'shreya';
// const age = 30;

// Concatenation
// console.log(' My name is ' + name + ' and I am ' + age);

// Template String  ( now this method is used not the above one)
// console.log(`My name is ${name} and i am ${age} years old`);

// or we can write it this way as well 
// const details = console.log(`my name is ${name} and my age is ${age}`);


// const s = 'hello world!';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5))
// console.log(s.substring(0,5).toUpperCase());

// const s = 'technology, IT, code, database';
// console.log(s.split(', ')); 


// ++++++++++ Arrays +++++++++++

// using new constructor (old way)
// const numbers = new Array(1,2,3,4,5,6);
// console.log(numbers);


// new way
// const fruits = ['apple', 'mango', 'pineapple'];

// fruits[3] = 'grapes';

// fruits.push('cherries')

// fruits.pop()

// console.log(fruits.unshift('strawberries'))

// console.log(Array.isArray(fruits));

// console.log(fruits.indexOf('pineapple'));

// console.log(fruits)


// +++++++++ OBJECT LITERALS +++++++++
// const person = {
//     firstName: 'shreya',
//     lastName: 'chopra',
//     age: 22,
//     hobbies: ['music', 'dancing','sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'new zealand'
//     }
// }

// person.email = 'chopra.shreya003@gmail.com'


// console.log(person)
// console.log(person.firstName, person.lastName)
// console.log(person.hobbies[1])
// console.log(person.address.city)
// console.log(person.email)


// ++++++++ Arrays of objects ++++++++

// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true

//     },
//     {
//         id: 2,
//         text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist Appt',
//         isCompleted: true

//     }
// ];


// console.log(todos[1].text)

// IF WANT TO CONVERT IT IN JSON
//  const todoJSON = JSON.stringify(todos);
//  console.log(todoJSON);


 
//  FOR LOOP
// for(let i = 0; i < 10; i++) {
//     console.log(`For loop number:${i}`);
// }

// while loop
// let i = 0;
// while(i < 10) {
//     console.log(`while loop number:${i}`);
//     i++;
// }


// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true

//     },
//     {
//         id: 2,
//         text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist Appt',
//         isCompleted: false

//     }
// ];

// best way to loop through an array (1st way)
// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);

// }

//  ++++++++++++++ 2nd way +++++++++++++
// for(let todo of todos) {
//     console.log(todo.text);
// }

//  ++++++++++++++ High order array method (forEach, map, filter) ++++++++++++++

//  +++++++++++++ forEach ++++++++++
// todos.forEach(function(todo) {
//      console.log(todo.text)
// })

// +++++++++++++++++ map +++++++++++++
// const todoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log(todoText);


// combined example of map & filter (vvv imp) +++++++++++++++++

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// })
// console.log(todoCompleted)


// +++++++++ conditionals +++++++++++++

// const x = '10';

// if(x == 10) {
//     console.log('x is 10');
// }


// else-if conditions ++++++++++++
// const x = 4;

// if(x === 10) {
//     console.log('x is 10');
// } 
//   else if(x > 10) {
//     console.log('x is greater than 10');
// }
//  else{
//     console.log('x is less thann 10');
// }

// +++++++++++++ OR (dono mei se koi bhi ek value true honi chhaiye bs) +++++++++
// const x = 4;
// const y = 11;

// if(x > 5 || y > 10) {
//     console.log('x is more than 5 or y is greater than 10');
// }


// +++++++++++ AND (both values should be true) ++++++++++++++++++

// const x = 4;
// const y = 11;

// if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is greater than 10');
// }

// ++++++++++ ternary operator +++++++++++

// const x = 11;
// const color = x > 10 ? 'red' : 'blue';

// console.log(color)


// +++++++++++++++ switch case ++++++++++++++

// const x = 9;
// const color = x > 10 ? 'red' : 'blue';

// switch(color) {
//     case 'red':
//     console.log('color is red');
//     break;
//     case 'blue':
//     console.log('color is blue');
//     break;
//    default: 
//    console.log('color is not red or blue');
//    break;
// }

// ++++++++++ Functions & parameters +++++++++++++

// function addNumbers(nums1 , nums2) {
//    return nums1 + nums2;
// }

// console.log(addNumbers(5,7));


// ++++++++++++ ARROW FUNCTIONS +++++++++++++

// const addNums = (nums1 = 5, nums2 = 9) => {
//     return nums1+nums2;
// }
// console.log(addNums());


// ++++++++++++++ Constructor Function ++++++++

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }


//  ++++++++++ more better way ++++++++++++

// Person.prototype.getBirthYear = function()  {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//      return `${this.firstName} ${this.lastName}`;
// }

//  }


// Instantiate Object
// const person1 = new Person('john', 'doe', '4-5-2005');
// const person2 = new Person('shreya', 'chopra', '03-10-2003');

// console.log(person2.dob.getFullYear());
// console.log(person2.getBirthYear());
// console.log(person2.getFullName());

// console.log(person2.getBirthYear());
// console.log(person2.getFullName());


// more prettier & cleaner way of writing the above code is using classes
// Class
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
        
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instantiate Object
// const person1 = new Person('john', 'doe', '4-5-2005');
// const person2 = new Person('shreya', 'chopra', '03-10-2003');

// console.log(person2.getBirthYear());
// console.log(person1.getFullName());
