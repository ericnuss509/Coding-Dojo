using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace neew.Models
{
    public class LoginUser
    {
        [Required(ErrorMessage="you need to put in your username")]
        [Display(Name="Username")]
        public string LoginUserName{get;set;}
        [Required(ErrorMessage="you need to put in your password")]
        [Display(Name="Password")]
        [DataType(DataType.Password)]
        public string LoginPassword{get;set;}
    }
}