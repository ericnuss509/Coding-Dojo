// 1.)
// console.log(hello);                                   
// var hello = 'world';   

// as seen by interpreter:
// hello;
// console.log(hello);
// var hello = 'world'

// my prediction:
// console will ouput undefined.

// correct

// 2.)
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// as seen by interpreter:
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// my prediction:
// console ouput 'magnet'

// comparison:
// it was correct

// 3.)
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// as seen by interpreter:
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// my prediction:
// console will output 'super cool'

// compairson:
//correct

// 4.)
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
// It's going to console.log chicken then half-chicken
//correct! var food = "gone" gets redefined after hoisting the var.

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone'
// }


// 5.)

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// pridicted that it would print chicken chicken undefined undefined. 

// 6.)

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// var genre; gets hoisted, then console.log undefined, because var genre doesn't hoist "disco"
//then rewind() runs
//var genre hoists up console.logs rock then r&b the goes out of global scope to console.log disco


// 7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//my prediction was correct. console.logs san jose then goes into fuciton learn() hoists var dojo then console.log seattle, then burbank then moves out of local scope back to global and console.logs san jose.

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