using System;
using System.Collections.Generic;


namespace wizardsNinjaSamuri
{
      public class Samurai : Human
   {
       public Samurai(string nameVal): base(nameVal)
       {
           health = 200;
    
       }
        public override int Attack(Human target)
        {
            
            if(target.health<50)
            {
                target.health =0;
            }
            else
            {
                base.Attack(target);
            }
            return target.health;
        }
        public int Meditate()
        {
            health = 200;
            Console.WriteLine($"{Name} meditated and has the a new health of {health}");
            return health;
        }
    }
}