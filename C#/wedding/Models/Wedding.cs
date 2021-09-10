using System.ComponentModel.DataAnnotations; // to use attributes like [Key]
using System; // Gets the DateTime 
using System.Collections.Generic;

namespace wedding.Models //always check your namespace!
{
    public class Wedding
    {
        [Key]
        public int WeddingId { get; set; }
        [Required]
        public string Bride { get; set; }
        [Required]
        public string Groom { get; set; }
        [Required]
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
        [Required]
        public string Location { get; set; }
        public int CreatorId { get; set; }
        public List<User> Guests { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpDateAt { get; set; } = DateTime.Now;
    

    }

}

////Creating a New Table 
// 1. set up the class (as seen above)
// 2. add it to context (next open up the MyConext.cs)
// 3. create migration (kill the terminal and start up again befor migration. )
//4. update the DB
