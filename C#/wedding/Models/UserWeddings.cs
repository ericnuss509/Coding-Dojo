using System.ComponentModel.DataAnnotations;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections;

namespace wedding.Models
{
    public class Bridge
    {
        [Key]
        public int UsersWeddingsId { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        [ForeignKey("Wedding")]
        public int WeddingId { get; set; }
    }
}