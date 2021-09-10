using System;
using System.Collections.Generic;
using System.Linq;


namespace Puzzles
{
    class Program
    {

        public static void RandomArray()
               
           
             // Create a function called RandomArray() that returns an integer array
            
        {
        
            // Place 10 random integer values between 5-25 into the array
            Random rand = new Random();
            int[] randomArray = new int[10];
            int min = 25;
            int max = randomArray[0];
            int sum = 0;
            for (int i = 0; i < 10; i++)
            {
                randomArray[i] = rand.Next(5, 25);
               
                {
                  
                    sum += randomArray[i];
                    if(randomArray[i] < min)
                    {
                    if(randomArray[i] > max)
                    {
                        max = randomArray[i];
                    }
                    }
              

        
                }


            }
              Console.WriteLine(min);
                Console.WriteLine(max);
                Console.WriteLine(sum);
            // Print the min and max values of the array
            // Print the sum of all the values
           
           
    
        }
        //  public static string CoinFlip()
        //     {
        //         Random rand = new Random();
        //         int result = rand.Next(0,10);
        //         if(result % 2 == 0)
        //         {
        //             Console.WriteLine("heads");
        //             return "heads";
        //         }
        //         else
        //         {
        //             Console.WriteLine("tails");
        //             return "tails";
        //         }
                    
        //     }
               public static string CoinFlip()
            {
                Random rand = new Random();
                int randInt = rand.Next(0,2);
                if(randInt == 1)
                {
                    return "heads";
                }
                else
                {
                    return "tails";
                }
                    
            }
        // public static double NextToss(int num)
        // {
                
        //         Random rand = new Random();
        //         int[] resultarr = new int[num];
        //         double heads = 0;
                
        //         // double ratio = 0;
        //         for(int i = 0; i <= num; i++)
        //         {
        //             resultarr[i] = rand.Next(0,10);
                   
        //             if( resultarr[i] % 2 == 0)
                     
        //             {
        //                     heads ++;
        //             }
        //         {
        //             double ratio = heads/num;
        //         //    ratio = Math.Round(1-(Convert.ToDouble(heads)/Convert.ToDouble(num)),2);
        //            Console.WriteLine(heads);
        //            Console.WriteLine(num);
        //            Console.WriteLine(ratio);
        //            return ratio;
        //         }
            public static double NextToss(int num)
            {
                double heads =0;
                Random rand = new Random();
                for(int i = 0; i < num; i++)
                {
                    int result = rand.Next(0,2);
                    if(result == 1)
                    {
                        heads ++;
                    }
                   
                
                }
                double ratio = heads/num;
                 Console.WriteLine(heads);
                Console.WriteLine(num);
                Console.WriteLine(ratio);
                    return ratio;
            }
              
              
       public static List<string> ListOfNames()
       {
            var rand = new Random();
            List<string> names = new List<string>();
            names.Add("Todd");
            names.Add("Tiffany");
            names.Add("Charlie");
            names.Add("Geneva");
            names.Add("Sydney");
            for(int i = 0; i < names.Count/2; i++)
            {
                string temp = names[i];
                names[i] = names[names.Count-1-i];
                names[names.Count-1-i] = temp;

            }
            List<string> newlist = new List<string>();
            foreach(string name in names)
            {
                if(name.Length > 5)
                {
                    newlist.Add(name);
                }
            }
            foreach(string name in newlist)
            {
                Console.WriteLine(name);
            }
            return names;
       }   

       
                //Build a function Names that returns a list of strings.  In this function.
                // Create a list with the values: Todd, Tiffany, Charlie, Geneva, Sydney
                // Shuffle the list and print the values in the new order
                // Return a list that only includes names longer than 5 characters


        static void Main(string[] args)
            {
            // RandomArray();
            // CoinFlip();
            // NextToss(2);
            ListOfNames();


            }

    }
}