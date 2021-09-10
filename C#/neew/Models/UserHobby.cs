using System.ComponentModel.DataAnnotations;
using System;


namespace neew.Models
{
    public class UserHobby
    {
        [Key]
        public int UserHobbyId{get;set;}

        // this gives us access to the particualr User
        public int UserId{get;set;}

        // this gives access to the User class so that i can go from hobby to user when i need data from both
        public User UserWhoLikes{get;set;}

        // this identifies a particular hobby by its id
        public int HobbyId{get;set;}

        // this is how i access the hobby class
        public Hobby LikedHobbies{get;set;}


        public DateTime CreatedAt{get;set;} =DateTime.Now;
        public DateTime UpdatedAt{get;set;}= DateTime.Now;
    }
}