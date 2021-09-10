using System.ComponentModel.DataAnnotations; // to use attributes like [Key]
using System; // Gets the DateTime 
using System.Collections.Generic;

namespace login.Models //always check your namespace!
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        [Required(ErrorMessage="the title is required")]
        [MinLength(3, ErrorMessage="Please enusre the title is at least 3 characters.")]
        public string Title { get; set; }
        [Required(ErrorMessage="the star is required")]
        [MinLength(2, ErrorMessage="Please enusre the star is at least  characters.")]
        public string Star { get; set; }
        [DataType(DataType.Date)]
        [Display(Name="Release Date")]
        public DateTime ReleaseDate { get; set; }
        [Required(ErrorMessage="the image URL is required")]
        [MinLength(10, ErrorMessage="Please enusre the image URL is at least 10 characters.")]
        [Display(Name="Image URL")]
        public string ImageUrl { get; set; }
        
        // user ID
        // foreign key
        public int UserId { get; set; }
        // the user object
        public User PostedBy { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpDateAt { get; set; } = DateTime.Now;
        public List<Like> Likes { get; set; }

    }

}

////Creating a New Table 
// 1. set up the class (as seen above)
// 2. add it to context (next open up the MyConext.cs)
// 3. create migration (kill the terminal and start up again befor migration. )
//4. update the DB
