using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace neew.Models
{
    public class Hobby
    {
        public int HobbyId{get;set;}


        [Required(ErrorMessage="what do you call this hobby")]
        public string Name{get;set;}


        [Required(ErrorMessage="you need to tell us about this hobby")]
        public string Description{get;set;}


        public int UserId{get;set;}

        public User CreatedBy {get;set;}


        public List<UserHobby> Enthusists{get;set;}

        
        public DateTime CreatedAt{get;set;} = DateTime.Now;
        public DateTime UpdatedAt{get;set;} = DateTime.Now;
    }
}