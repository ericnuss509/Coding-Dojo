using System;
using System.Collections.Generic;


namespace wizardsNinjaSamuri
{
   public class Wizard : Human
   {
       public Wizard(string nameVal): base(nameVal)
        {
           Intelligence = 25;
           health = 50;
    
        }
        public override int Attack(Human target)
        {
            int damage = Intelligence * 5;
            if(target.health>damage)
            {
                target.health -=damage;
            }
            else
            {
                target.health = 0;
            }
            health += damage;
            Console.WriteLine($"The attacker, {Name} attacked {target.Name} by {damage}");
            Console.WriteLine($"{Name} had{damage} health restored");
            return target.health;
        }
        public int Heal(Human target)
        {
            int healer = Intelligence *10;
            target.health += healer;
            Console.WriteLine($"{Name} healed {target.Name} {healer}");
            return target.health;
        }
   }
}