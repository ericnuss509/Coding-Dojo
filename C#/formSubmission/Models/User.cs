using System.ComponentModel.DataAnnotations;
 
namespace formSubmission.Models
{
    public class User
    {
        [Required]
        [MinLength(3, ErrorMessage ="Must have more than that")]
        public string FirstName { get; set; }

        [Required]
        [MinLength(3)]
        public string LastName { get; set; }
 
        [Required]
        [Range(0, int.MaxValue)]
        public int Age{ get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
 
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        // [Display(Name = "Your Username:")] 
        // public string Username { get; set; }

        // [DataType(DataType.Password)]
        // public string Password { get; set; }
    }
}