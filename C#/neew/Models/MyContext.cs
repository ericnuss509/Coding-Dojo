using Microsoft.EntityFrameworkCore;


namespace neew.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options){ }

        public DbSet<User> users {get;set;}
        public DbSet<Hobby> hobbies {get;set;}
        public DbSet<UserHobby> Enthusists {get;set;}
    }
} 