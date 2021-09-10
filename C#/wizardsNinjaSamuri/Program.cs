using System;
using System.Collections.Generic;


namespace wizardsNinjaSamuri
{
       public class Human
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
            
              public virtual int Attack(Human target)
            {
                int damage = Strength *3;
                if(target.health>damage)
                {
                    target.health -= damage;
                }
                else
                {
                    target.health = 0;

                }
                Console.WriteLine($"{Name} attacked");
                return target.health;
            }
        }
        class Program
    {
      
      
        static void Main(string[] args)
        {
            Human aHuman = new Human("Eric");
            Human bHuman = new Human("Todd", 100, 100, 100, 100);
            Console.WriteLine($"Hello {aHuman.Name} your strength is {aHuman.Strength} your intellegence is {aHuman.Intelligence} your dexterity is {aHuman.Dexterity} your health is {aHuman.health}");
            Console.WriteLine($"Hello {bHuman.Name} your strength is {bHuman.Strength} your intellegence is {bHuman.Intelligence} your dexterity is {bHuman.Dexterity} your health is {bHuman.health}");
            aHuman.Attack(bHuman);

            
            Console.WriteLine($"Hello {bHuman.Name} your strength is {bHuman.Strength} your intellegence is {bHuman.Intelligence} your dexterity is {bHuman.Dexterity} your health is {bHuman.health}");
            Wizard newWizard = new Wizard("Eric");
            Console.WriteLine($"Name: {newWizard.Name}, Health: {newWizard.health}, Strength: {newWizard.Strength}, Dexterity: {newWizard.Dexterity}, Intelligence: {newWizard.Intelligence}");
            newWizard.Attack(aHuman);
            Ninja newNinja = new Ninja("Donna");
            Console.WriteLine($"Name: {newNinja.Name}, Health: {newNinja.health}, Strength: {newNinja.Strength}, Dexterity: {newNinja.Dexterity}, Intelligence: {newNinja.Intelligence}");
            Samurai newSamurai = new Samurai("Gary");
            Console.WriteLine($"Name: {newSamurai.Name}, Health: {newSamurai.health}, Strength: {newSamurai.Strength}, Dexterity: {newSamurai.Dexterity}, Intelligence: {newSamurai.Intelligence}");
            newNinja.Attack(newSamurai);
            Console.WriteLine($"Name: {newSamurai.Name}, Health: {newSamurai.health}, Strength: {newSamurai.Strength}, Dexterity: {newSamurai.Dexterity}, Intelligence: {newSamurai.Intelligence}");
            newNinja.Steal(newWizard);
            Console.WriteLine($"Name: {newWizard.Name}, Health: {newWizard.health}, Strength: {newWizard.Strength}, Dexterity: {newWizard.Dexterity}, Intelligence: {newWizard.Intelligence}");

       
        }
    }
    

}






//  Wizard should have a default health of 50 and Intelligence of 25
//  Ninja should have a default dexterity of 175
//  Samurai should have a default health of 200
//  Provide an override Attack method to Wizard, which reduces the target by 5 * Intelligence and heals the Wizard by the amount of damage dealt
//  Provide an override Attack method to Ninja, which reduces the target by 5 * Dexterity and a 20% chance of dealing an additional 10 points of damage.
//  Provide an override Attack method to Samurai, which calls the base Attack and reduces the target to 0 if it has less than 50 remaining health points.
//  Wizard should have a method called Heal, which when invoked, heals a target Human by 10 * Intelligence
//  Samurai should have a method called Meditate, which when invoked, heals the Samurai back to full health
//  Ninja should have a method called Steal, reduces a target Human's health by 5 and adds this amount to its own health.