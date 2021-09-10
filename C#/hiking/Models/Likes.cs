using System.ComponentModel.DataAnnotations;
using System;

namespace hiking.Models
{
    public class Like
    {
        [Key]
        public int LikeId {get; set; }
        public int UserId { get; set; }

        //navigation property coming up will allow us to "include if needed
        public User UserWhoLikes { get; set; }
        public int HobbyId { get; set; }
        public Hobby LikedHobby { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpDateAt { get; set; } = DateTime.Now;
    }
}