using System;
using System.Collections.Generic;

namespace Basic13
{
    public class Program
    {
        public static void Main(string[] args)
        {

            // PrintNumbers();
            // PrintOdds();
            // PrintSum();
            // int[] arr = {1,2,3,4};
            // LoopArray(arr);
            // int[] arr = {-3,-5,-7};
            // FindMax(arr);
            // int[] arr = {2, 10, 3};
            // GetAverage(arr);
        //     int[] results = OddArray1();
        //    foreach(int v in result)
        //    {
        //        Console.WriteLine(v);
        //    }
                // PrintSums();
                // int[] = myArray = new int[]{1,5,10,7,-2};
                // ShiftValuess(myArray);
                // foreach(int val in myArray)
                // {
                //     Console.WriteLine(val);
                // }
                // int[] startingArray = new int[]{-1, -3, 2};
                // object[] result = NumToString(startingArray);
                // foreach(object val in result)
                // {
                //     Console.WriteLine(val);
                // }





            

        }
        
        // Print 1-255
        public static void PrintNumbers()
        {
            for (int i = 1; i < 256; i++)
            {
                Console.WriteLine(i);
            }
        }
        // Print odd numbers between 1-255
        public static void PrintOdds()
        {
            for (int i = 1; i <= 255; i++)
            {
                if (i % 2 != 0)
                {
                    Console.WriteLine(i);
                }
            }
        }
        // Print Sum
        public static void PrintSum()
        {
            int sum = 0;
            for (int i = 1; i < 256; i++)
            {
                sum += i;
                Console.WriteLine("New number: {0} Sum: {1}", i, sum);
            }
        }
        public static void PrintSums()
        {
            int sum = 0;
            for(int i = 0; i < 256; i++)
            {
                Console.WriteLine(i);
                sum = sum + i;
                Console.WriteLine($"New number: {i} Sum: {sum}");
            }
        }
        // Iterating through an Array


        public static void LoopArray(int[] numbers)
        {
            foreach (var val in numbers)
            {
                Console.WriteLine(val);
            }
        }
        // Find Max
        public static int FindMax(int[] numbers)
        {
            int max = numbers[0];
            foreach(int val in numbers)
            {
                if(val > max)
                {
                    max = val;
                }
            }
            return max;
        }
        // Get Average
        public static int GetAverage(int[] numbers)
           {
            int sum = 0;
            foreach (int val in numbers)
            {
                sum += val;
            }
            return sum / numbers.Length;
        }
        // Array with Odd Numbers
        public static int[] OddArray()
        {
            List<int> nums = new List<int>();
            for (int i = 1; i < 256; i+=2)
            {
                nums.Add(i);
            }
            int [] ans = nums.ToArray();
            return ans;
        }
        public static int[] OddArray1()
        {
            
            int[] output = new int[128];
            int index = 0;
            for(int num = 1; num < 156; num += 2)
            {
                output[index] = num;
                index++;

            }
            return output;
        }

        //   Greater than Y

        public static void GreaterThanY(int[] numbers, int y)
        {
        // Write a function that takes an integer array, and a integer "y" and returns the number of array values 
        // That are greater than the "y" value. 
        // For example, if array = [1, 3, 5, 7] and y = 3. Your function should return 2 
        // (since there are two values in the array that are greater than 3).
        
        int totalMatch = 0;
        foreach( int item in numbers)
        {

            if (item >y)
            {
                totalMatch += 1;
            }
        }
        Console.WriteLine("Total items greater than " + y.ToString() + " are " + totalMatch.ToString());
        }
        // Square the Values
    
        public static void SquareTheValues(int[] x)
        {
       
        int[] y = new int[x.Length];
        for (int i = 0; i < x.Length; i++)
        {
            y[i] = x[i]*x[i];
        }
        foreach(int item in y)
        {
            Console.WriteLine("Squared Value " + item.ToString());
        }
        }
        public static void SquareArrayValues(int[] numbers)
        {

            // Write a function that takes an integer array "numbers", and then multiplies each value by itself.
            // For example, [1,5,10,-10] should become [1,25,100,100]
            // Eliminate Negative Numbers
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    numbers[i] = 0;
                }
            }
             Console.WriteLine("Array with no negs:");
             foreach(var i in numbers)
             {
                Console.Write(i + ", ");
             }
        }
        

        public static void EliminateNegatives(int[] numbers)
       {
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < 0)
                {
                    numbers[i] = 0;
                }
            }

            Console.WriteLine("Array with no negs:");
            foreach (var i in numbers)
            {
                Console.Write(i + ", ");
            }
        }
       
            // Given an integer array "numbers", say [1, 5, 10, -2], create a function that replaces any negative number with the value of 0. 
            // When the program is done, "numbers" should have no negative values, say [1, 5, 10, 0].
        
        // Min, Max, and Average

        public static void MinMaxAverage(int[] numbers)
        {
            int min = int.MaxValue;
            int max = int.MinValue;
            int sum = 0;
            for (int i = 0; i < numbers.Length; i++)
            {
                if (numbers[i] < min)
                {
                    min = numbers[i];
                }
                if (numbers[i] > max)
                {
                    max = numbers[i];
                    sum += numbers[i];
                }
                 Console.WriteLine("Min value " + min.ToString());
                Console.WriteLine("Max value " + max.ToString());
                if (numbers.Length > 0)
               Console.WriteLine("Avg value " + (sum/numbers.Length).ToString());
                else
               Console.WriteLine("List is empty to find the Avg value ");
            }
        }
 
        // the minimum value in the array, and the average of the values in the array.

        // Shifting the values in an array

        public static void ShiftValues(int[] numbers)
        {
            for (int i = 0; i < numbers.Length/2; i++)
            {
                int temp = numbers[i];
                numbers[i] = numbers[numbers.Length - i - 1];
                numbers[numbers.Length - i - 1] = temp;
            }

            
        }
        public static void ShiftValuess(int[] numbers)
        {
            for(int i = 1; 1 < numbers.Length; i++)
            {
                numbers[i - 1] = numbers[1];

            }
            numbers[numbers.Length - 1] = 0;
        }

            // Given an integer array, say [1, 5, 10, 7, -2], 
            // Write a function that shifts each number by one to the front and adds '0' to the end. 
            // For example, when the program is done, if the array [1, 5, 10, 7, -2] is passed to the function, 
            // it should become [5, 10, 7, -2, 0].

        // Number to String

        public static object[] NumToString(int[] numbers)
        {
            object[] output = new object[numbers.Length];

            for(int i = 0; i < numbers.Length; i++)
            {
                if(numbers[i] <0)
                {
                    output[i] = "Dojo";

                }
                else
                {
                    output[i] = numbers[i];
                }

            }



            return output;
        }
        
        //     // Write a function that takes an integer array and returns an object array 
        //     // that replaces any negative number with the string 'Dojo'.
        //     // For example, if array "numbers" is initially [-1, -3, 2] 
        //     // your function should return an array with values ['Dojo', 'Dojo', 2].
        
            
            
            
            
        
    }
    }
