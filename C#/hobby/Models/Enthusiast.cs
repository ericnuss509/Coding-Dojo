using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections;

namespace hobby.Models
{
    public class Enthusiast
    {
        [Key]
        public int UsersHobbyId { get; set; }
        
        public int UserId { get; set; }

        public int HobbyId { get; set; }
        public User UserWhoLikes{ get; set;}
        public Hobby LikedHobbies{ get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    
    }
}