using System.ComponentModel.DataAnnotations;

namespace login.Models
{
    public class LoginUser
    {

        
        public string LoginEmail { get; set; }
        [DataType(DataType.Password)]

        public string LoginPassword { get; set; }

    }

}    


