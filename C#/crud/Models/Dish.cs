using System;
using System.ComponentModel.DataAnnotations;

namespace crud.Models
{
    public class Dish
    {
        [Key]
        
        
        public int DishId { get; set; }
        [Required]
        [MaxLength(45, ErrorMessage="you must have less than 45 charaters.")]
        public string Name { get; set; }
        [Required]
        [MaxLength(45, ErrorMessage="you must have less than 45 charaters.")]
        public string Chef{ get; set; }
        [Required]
        [Range(0,11)]
        public int Tastiness { get; set; }
        [Required]
        [Range(0,11, ErrorMessage="you need to have a number less than 11.")]
        public int Calories { get; set; }
        public string Description {get; set;}
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}