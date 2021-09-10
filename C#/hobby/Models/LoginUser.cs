using System.ComponentModel.DataAnnotations;

namespace hobby.Models
{
    public class LoginUser
    {

        
        public string LoginUserName { get; set; }
        [DataType(DataType.Password)]

        public string LoginPassword { get; set; }

    }

}    


