const personName = 'Girish';
const age = 25;

//local storage
localStorage.setItem('name', personName);
localStorage.setItem('age', age);

localStorage.removeItem('age');

let name = localStorage.getItem('name');
console.log(name);

//session storage
sessionStorage.setItem('name', personName);
sessionStorage.setItem('age', age);

//session storage.clear();

let arr = ['Rahul', 'Ravi', 'santosh', 'surya', 'kiran'];

localStorage.setItem('employees', JSON.stringify(arr));

const newArr = localStorage.getItem('employees');
console.log(newArr);
console.log(JSON.parse(newArr));