
// // FUNDAMENTALS ASSIGNMENT 1


// // using System;

// // namespace MyFirstDotnet
// // {
// //     class Program
// //     {
// //         static void Main(string[] args)
// //         {
// //             for (int i = 1; i < 256; i++)
// // {
// //     Console.WriteLine(i);
// // }
// //         }
// //     }

// // }
// // Create a new loop that prints all values from 1-100 that are divisible by 3 or 5, but not both
// // using System;

// // namespace MyFirstDotnet
// // {
// //     class Program
// //     {
// //         static void Main(string[] args)
// //         {
// //             for (int i = 1; i < 1000; i++)
// // {
// //     Console.WriteLine(i);
// // }
// //         }
// //     }

// // }
// // 
//  Create a new loop that prints all values from 1-100 that are divisible by 3 or 5, but not both
//  Modify the previous loop to print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for numbers that are multiples of both 3 and 5

// using System;

// namespace MyFirstDotnet
// {
//     class Program
//     {
//         static void Main(string[] args)
//         {

//             for(var i = 1; i<=100; i++){
//                 if(i% 3 == 0 && i % 5 ==0)
//                 {
//                     Console.Write("FizzBuzz,");
//                 }
//                 else if(i % 3 == 0){
//                     Console.Write("Fizz,");
//                 } else if (i % 5 == 0){
//                     Console.Write("Buzz,");
                
//                 } else {
//                     Console.Write($"{i},");
//                 }
                
//                 }
//             }
//         }
// }