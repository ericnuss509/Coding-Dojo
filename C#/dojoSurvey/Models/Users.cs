using System.ComponentModel.DataAnnotations;
 
namespace dojoSurvey.Models
{
    public class Users
    {
            [Required]
            [MinLength(2, ErrorMessage ="Must have more than two characters here.")]
            public string name{get; set;}
            [Required]
            [MinLength(2, ErrorMessage ="Must have more than two characters here.")]

            public string dojo{get; set;}
            [Required]
            [MinLength(1)]

            public string favorite{get; set;}
            [Required]
            [MinLength(1)]
            public string text{get; set;}
        // [Required]
        // [MinLength(2, ErrorMessage ="Must have more than two characters here.")]
        // public string FirstName { get; set; }

        // [Required]
        // [MinLength(2, ErrorMessage ="Must have more than two characters here.")]
        // public string LastName { get; set; }

        // [Required]
        // [MinLength(2, ErrorMessage ="Must have more than two characters here.")]
        // public string Dojo { get; set; }
 
        // // [Required]
        // // [Range(0, int.MaxValue)]
        // // public int Age{ get; set; }
        // // [Required]
        // // [EmailAddress]
        // // public string Email { get; set; }
 
        // [Required]
        // [DataType(DataType.Password)]
        // public string Password { get; set; }
    }
}