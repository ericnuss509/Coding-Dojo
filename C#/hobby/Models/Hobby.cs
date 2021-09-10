using System.ComponentModel.DataAnnotations; // to use attributes like [Key]
using System; // Gets the DateTime 
using System.Collections.Generic;

namespace hobby.Models //always check your namespace!
{
    public class Hobby
    {
        [Key]
        public int HobbyId { get; set; }
        [Required(ErrorMessage="A Hobby is required")]
        [MinLength(3, ErrorMessage="Please enusre the title is at least 3 characters.")]
        public string HobbyName{ get; set; }
        [Required(ErrorMessage="the Description is required")]
        [MinLength(2, ErrorMessage="Please enusre the star is at least  characters.")]
        public string Description { get; set; }
        [DataType(DataType.Date)]
        [Display(Name="Release Date")]
        public int UserId { get; set; }
        // the user object
        public User PostedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpDateAt { get; set; } = DateTime.Now;
        public List<Enthusiast> Enthusiasts{ get; set; }
        

    }

}

////Creating a New Table 
// 1. set up the class (as seen above)
// 2. add it to context (next open up the MyConext.cs)
// 3. create migration (kill the terminal and start up again befor migration. )
//4. update the DB
