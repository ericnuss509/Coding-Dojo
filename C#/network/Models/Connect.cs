using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;


namespace network.Models
{
    public class Connect
    {
        public int ConnectId{get;set;}


        [Required(ErrorMessage="what do you call this connection")]
        public string Name{get;set;}


        [Required(ErrorMessage="you need to tell us about this conection")]
        public string Description{get;set;}


        public int UserId{get;set;}

        public User CreatedBy {get;set;}
        

        public List<UserProfession> Professions{get;set;}

        
        public DateTime CreatedAt{get;set;} = DateTime.Now;
        public DateTime UpdatedAt{get;set;} = DateTime.Now;
    }
}