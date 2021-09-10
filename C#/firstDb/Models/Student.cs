using System.ComponentModel.DataAnnotations;

namespace firstDb.Models{
    

    public class Student
    {

        [Key]
        public int StudentID {get;set;}

        public string FirstName {get;set;}

        public string LastName {get;set;}

        public string Email {get;set;}
        public int  FavoriteNumber {get;set;}

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now
    }
}