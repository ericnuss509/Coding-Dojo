using System;
using System.Collections.Generic;

namespace wizardsNinjaSamuri
{
   public class Ninja : Human
   {
       public Ninja(string nameVal): base(nameVal)
       {
           Dexterity = 175;
    
       }
        public override int Attack(Human target)
        {
            int damage = Dexterity *5;
            Random rand = new Random();
            int percent = rand.Next(0, 100);
            if(percent <= 20)
            {
                damage+= 10;
                target.health -= damage;
            }
            else
            {
                target.health -= damage;
            }
            return target.health;
        }

        public int Steal(Human target)
        {
            target.health -=5;
            health += 5;
            Console.WriteLine($"{Name} stole 5 health from {target.Name}");
            return target.health; 
        }

 
       
   }
}