using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace network.Models
{
    public class LoginUser
    {
        [Required(ErrorMessage="you need to put in your Email")]
        [Display(Name="Email")]
        public string LoginUserName{get;set;}
        [Required(ErrorMessage="you need to put in your password")]
        [Display(Name="Password")]
        [DataType(DataType.Password)]
        public string LoginPassword{get;set;}
    }
}