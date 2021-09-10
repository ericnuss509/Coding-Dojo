using Microsoft.EntityFrameworkCore;


namespace network.Models
{
    public class MyContext : DbContext
    {
        public MyContext(DbContextOptions options) : base(options){ }

        public DbSet<User> users {get;set;}
        public DbSet<UserProfession> Professions {get;set;}
        public DbSet<Connect> Connections {get;set;}
    }
}