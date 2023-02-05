using Microsoft.EntityFrameworkCore;

namespace backend.Models;

public class LinkContext : DbContext
{
    public LinkContext(DbContextOptions<LinkContext> options)
        : base(options)
    {
    }

    public DbSet<Link> Links { get; set; } = null!;
    public DbSet<User> Users { get; set; } = null!;
}