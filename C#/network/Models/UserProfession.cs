using System.ComponentModel.DataAnnotations;
using System;


namespace network.Models
{
    public class UserProfession
    {
        [Key]
        public int UserProfessionId{get;set;}

        // this gives us access to the particualr User
        public int UserId{get;set;}

        // this gives access to the User class so that i can go from hobby to user when i need data from both
        public User UserWhoconnects{get;set;}

        // this identifies a particular p by its id
        public int ProfessionId{get;set;}

        // this is how i access the p class
        public UserProfession Professons{get;set;}


        public DateTime CreatedAt{get;set;} =DateTime.Now;
        public DateTime UpdatedAt{get;set;}= DateTime.Now;
    }
}