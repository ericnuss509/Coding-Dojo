// Problem 1

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
// outout will be tesla and mercedes, correct, because randomCar is at index 0 and [,otherRandomCar] is at index 1
// Problem 2

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);
// prediction is that an error will occur due to name is updated to othername. So when it is called there is no name. 
// copy
// Problem 3

// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);
// prediction: 12345 then undefined, password is defined globally not locally. 
// correct
// Problem 4

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers; //2
// const [,,,second] = numbers; //5
// const [,,,,,,,,third] = numbers; //2
// //Predict the output
// console.log(first == second);
// console.log(first == third);
// logs false and true correct!
// copy
// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //value
console.log(secondKey); //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);// 1
console.log(willThisWork);// 5
//correct