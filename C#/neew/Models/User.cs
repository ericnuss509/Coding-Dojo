using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace neew.Models
{
    public class User
    {
        [Key]
        public int UserId{get;set;}

        [Required(ErrorMessage="you need to add a first name")]
        [MinLength(2, ErrorMessage= "your first name must be over 2 characters long")]
        public string FirstName{get;set;}

        [Required(ErrorMessage="your last name needs to be at least 2 characters long")]
        [MinLength(2, ErrorMessage="your last name needs to be at least 2 characters long")]
        public string LastName{get;set;}

        [Required(ErrorMessage="you need to input a username with 3-15 characters")]
        [MinLength(3, ErrorMessage="your username needs to be at least 3, and no more than 15 characters long")]
        [MaxLength(15, ErrorMessage="your username needs to be at least 3, and no more than 15 characters long")]
        public string UserName{get;set;}

        [Required(ErrorMessage="You need to input a valid email")]
        [EmailAddress(ErrorMessage="you need to input a valid email address")]
        public string Email{get;set;}

        [Required(ErrorMessage="you need to add a password that is at least 8 characters long")]
        [MinLength(8, ErrorMessage="you need to add a password that is at least 8 characters long")]
        [DataType(DataType.Password)]
        public string Password{get;set;}

        [NotMapped]
        [Required(ErrorMessage="confirm your password dude")]
        [Compare("Password", ErrorMessage="your password and password confirmation do not match")]
        [DataType(DataType.Password)]
        public string PasswordConfirm{get;set;}

        // this fiel links the user table to the hobby table
        public List<Hobby> LikedHobbies{get;set;}

        // this links to the userhobby(aka the one to many bridge) table
        public List<UserHobby> Enthusists{get;set;}

        public DateTime CreatedAt{get;set;} = DateTime.Now;
        public DateTime UpdatedAt{get;set;} = DateTime.Now;
    }
}