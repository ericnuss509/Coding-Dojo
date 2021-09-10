using System;
using System.Collections.Generic;

namespace CollectionsPractice
{
    class Program
    {
        static void Main(string[] args)
        {
        // Create an array to hold integer values 0 through 9
            // string[] myArray = new string[8];
            // for(int i = 0; i < myArray.Length; i++)
            // {
                // Console.WriteLine(i);
            // }
            // int[] arrayOfInts = {0,1, 2, 3, 4, 5,6,7,8,9};
            // Console.WriteLine(arrayOfInts[0]);   
            // Console.WriteLine(arrayOfInts[1]);    
            // Console.WriteLine(arrayOfInts[2]);   
            // Console.WriteLine(arrayOfInts[3]);   
            // Console.WriteLine(arrayOfInts[4]);    
            // Console.WriteLine(arrayOfInts[5]); 
            // Console.WriteLine(arrayOfInts[6]); 
            // Console.WriteLine(arrayOfInts[7]); 
            // Console.WriteLine(arrayOfInts[8]); 
            // Console.WriteLine(arrayOfInts[9]); 

// Create an array of the names "Tim", "Martin", "Nikki", & "Sara"

//             string[] myNames = new string[] { "Tim", "Martin", "Nikki", "Sara"};
//             for (int idx = 0; idx < myNames.Length; idx++)
// {
//             Console.WriteLine($"I am {myNames[idx]}");
// }
// Create an array of length 10 that alternates between true and false values, starting with true
       
//             bool[] array = new bool[10];
                
//                 for(int i = 0; i < array.Length ; i ++)
//                 {
//                     if (i % 2 != 0)
//                     {
//                         array[i] = false;
//                     }

//                     else
//                     {
//                         array[i] = true;
//                     }
               
                
//                     Console.WriteLine(array[i]);
//                 }       
//   
// Create a list of ice cream flavors that holds at least 5 different flavors (feel free to add more than 5!)

            List<string> iceCream = new List<string>();

            iceCream.Add("Cookie");
            iceCream.Add("Oreo");
            iceCream.Add("Jam");
            iceCream.Add("fudge");
            iceCream.Add("basil");

            // Output the length of this list after building it

            Console.WriteLine(iceCream.Count);
            // Console.WriteLine($"We currently know of {iceCream.Count} motorcycle manufacturers.");
           
            // Output the third flavor in the list, then remove this value

            Console.WriteLine(iceCream[2]);

            // Output the new length of the list (It should just be one fewer!)
            iceCream.Remove(iceCream[2]);
            Console.WriteLine(iceCream.Count);

            // Create a dictionary that will store both string keys as well as string values
            Dictionary<string,string> names = new Dictionary<string,string>();
            // Add key/value pairs to this dictionary where:
            // each key is a name from your names array
            // each value is a randomly select a flavor from your flavors list.
            Random rand = new Random();

            names.Add("Tim", iceCream[rand.Next(0 , 5)]);
            names.Add("Martin", iceCream[rand.Next(0 , 5)]);
            names.Add("Nikki", iceCream[rand.Next(0 , 5)]);
            names.Add("Sara", iceCream[rand.Next(0 , 5)]); 

            // Loop through the dictionary and print out each user's name and their associated ice cream flavor

            foreach (var entry in names)
            {
            Console.WriteLine(entry.Key + " - " + entry.Value);
            }
         }
    }
}