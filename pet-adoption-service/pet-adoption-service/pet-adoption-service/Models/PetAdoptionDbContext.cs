using Microsoft.EntityFrameworkCore;

namespace pet_adoption_service.Models
{
    public class PetAdoptionDbContext: DbContext
    {
        public PetAdoptionDbContext(DbContextOptions options) : base(options)
        {

        }

        // Parameterless constructor
        public PetAdoptionDbContext()
        {
        }
        public DbSet<Pet> Pets { get; set; }
    }
}
