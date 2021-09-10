using System;
using System.Collections.Generic;


namespace hungryNinja
{
    class Food
    {
        public string Name;
        public int Calories;
        // Foods can be Spicy and/or Sweet
        public bool IsSpicy;
        public bool IsSweet;
        public Food(string nameVal, int caloriesVal, bool isSpicy, bool isSweet)
        {
            Name = nameVal;
            Calories = caloriesVal;
            IsSpicy = isSpicy;
            IsSweet = isSweet;
        }
        // add a constructor that takes in all four parameters: Name, Calories, IsSpicy, IsSweet
    }

    class Buffet
    {
        public List<Food> Menu;


        public Buffet()
        {
            Menu = new List<Food>()
            {
                new Food("Tacos", 600, false, false),
                new Food("Bananas", 10000, false, true),
                new Food("Almonds", 45, false, false),
                new Food("Maple Syrup", 600, false, true),
                new Food("Peanuts", 900, false, false),
                new Food("Kambucha", 0, false, false),
                new Food("Grapes", 400, false, true)
            };
        }

        public Food Serve()
        {
            Random rand = new Random();
            int index = rand.Next(Menu.Count);
            Console.WriteLine(Menu[index]);
            return Menu[index];

        }
    }
    class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;

        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>();
        }

        public bool IsFull
        {
            get
            {
                if (calorieIntake > 1200)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

        }

        // add a public "getter" property called "IsFull"

        // build out the Eat method
        public void Eat(Food item)
        {
            if (IsFull)
            {
                Console.WriteLine("full");
            }
            else
            {
                calorieIntake += item.Calories;
                FoodHistory.Add(item);
                if (item.IsSweet)
                {
                    Console.WriteLine($"{item.Name} is sweet");
                }
                if (item.IsSpicy)
                {
                    Console.WriteLine($"{item.Name} is spicy");
                }
            }
        }

        class Program
        {

            static void Main(string[] args)
            {
                Buffet buffet1 = new Buffet();
                Ninja ninja1 = new Ninja();
                ninja1.Eat(buffet1.Serve());
                Console.WriteLine(ninja1.FoodHistory);
            }
        }
    }
}
