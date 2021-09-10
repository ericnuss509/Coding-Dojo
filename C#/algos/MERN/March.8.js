// /* 
//     https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
//     Stable sort
    
//     Time Complexity
//         - Best:     O(n) linear when array is already sorted
//         - Average:  O(n^2) quadratic
//         - Worst:    O(n^2) quadratic when the array is reverse sorted
//     Space: O(1) constant
//     For review, create a function that uses BubbleSort to sort an unsorted array in-place.
//     For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
// */
// function bubbleSort(nums){
//     for(var x= 0; x < nums.length-1; x++){
//         for (var i = 0; i < nums.length-1; i++){
//             if (nums[i])
//         }
//     }
    
// }


// /* 
//     https://visualgo.net/en/sorting
        
//     Selection sort works by iterating through the list, finding the minimum
//     value, and moving it to the beginning of the list. Then, ignoring the first
//     position, which is now sorted, iterate through the list again to find the
//     next minimum value and move it to index 1. This continues until all values
//     are sorted.
//     Unstable sort.
    
//     Time Complexity
//         - Best: O(n^2) quadratic.
//         - Average: O(n^2) quadratic.
//         - Worst: O(n^2) quadratic.
//     Space: O(1) constant.
//     Selection sort is one of the slower sorts.
//     - ideal for: pagination, where page 1 displays 10 records for example,
//         you run selection sort for 10 iterations only to display the first 10
//         sorted items.
// */
// function selectionSort(nums){

// }




//Hoist assingment


                                  
// var hello = 'world';       
// console.log(hello);                           
// 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// 3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// var food = 'chicken';

// function eat(){ 
//     food;
//     food;
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
    
// }
// console.log(food);
// eat();
// 5

// mean();
// console.log(food);
// var mean = function() {
    
//     food = "chicken";
    

//     var food = "fish";
//     console.log(food);
// }
// mean


// 6
// genre;
// function rewind() {
//     genre;
//     genre;
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
    
//     console.log(genre);

// var genre = "disco";
// rewind();

// }
// console.log(genre);

// genre;

// genre;
// function rewind() {
//     genre;
//     genre;
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// var genre = "disco";
// rewind();

// console.log(genre)
// function rewind() {
//     genre;
//     genre;
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// var genre = "disco";
// console.log(genre);
// rewind();


// console.log(genre);
// 7

// dojo = "san jose";
// function learn() {
//     dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// learn();

// console.log(dojo);
// 8 - Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

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