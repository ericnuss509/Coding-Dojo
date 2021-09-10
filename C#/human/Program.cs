using System;
using System.Collections.Generic;


namespace human
{
        class Human
        {
            // Fields for Human
            public string Name;
            public int Strength;
            public int Intelligence;
            public int Dexterity;
            private int Health;
            public int health
            {
                get
                {
                    return Health;
                }
                set
                {
                    Health = value;
                }
            }
            public Human(string nameVal)
            {
                Name = nameVal;
                Strength = 3;
                Intelligence = 3;
                Dexterity = 3;
                Health = 100;
            }
            public Human(string nameVal, int strengthVal, int intellegenceVal, int dexterityVal, int healthVal)
            {
                Name = nameVal;
                Strength = strengthVal;
                Intelligence = intellegenceVal;
                Dexterity = dexterityVal;
                Health = healthVal;
            }
            
            
    }
        class Program
    {
        public static int Attack(Human attacker, Human victim)
        {
                victim.health = victim.health - (attacker.Strength * 5);
                Console.WriteLine ($"{attacker.Name} attacker {victim.Name} and reduced their strenght by {attacker.Strength*5} {victim.health} ");
                return victim.health;
            }
      
        static void Main(string[] args)
        {
            Human aHuman = new Human("Eric");
            Human bHuman = new Human("Todd", 100, 100, 100, 100);
            Console.WriteLine($"Hello {aHuman.Name} your strength is {aHuman.Strength} your intellegence is {aHuman.Intelligence} your dexterity is {aHuman.Dexterity} your health is {aHuman.health}");
            Console.WriteLine($"Hello {bHuman.Name} your strength is {bHuman.Strength} your intellegence is {bHuman.Intelligence} your dexterity is {bHuman.Dexterity} your health is {bHuman.health}");
            Attack(aHuman, bHuman);
            Attack(aHuman, bHuman);
            Console.WriteLine($"Hello {bHuman.Name} your strength is {bHuman.Strength} your intellegence is {bHuman.Intelligence} your dexterity is {bHuman.Dexterity} your health is {bHuman.health}");
        }
    }
    

}