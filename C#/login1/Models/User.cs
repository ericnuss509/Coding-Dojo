using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace login1.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        [Required(ErrorMessage="Please provide your first name.")]  
        [Display(Name="First Name")]
        public string FirstName { get; set; }


        [Required(ErrorMessage="Please provide your last name.")] 
        [Display(Name="Last Name")]
        public string LastName { get; set;}

        [Required]
        [EmailAddress(ErrorMessage="Please provide a valid email.")]
        public string Email { get; set; }
        [DataType(DataType.Password)]
        [Required(ErrorMessage="Please enter a password of at least 8 characters.")]
        [MinLength(8)]
        public string Password {get; set; }

        [DataType(DataType.Password)]
        [Required(ErrorMessage="Please confirm you password.")]
        [NotMapped]
        [Compare("Password", ErrorMessage="Please ensure that the confirmation matches your password.")]
        [Display(Name="Password Confirmation")]
        public string PasswordConfirmation { get; set; }


        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}