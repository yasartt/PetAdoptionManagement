using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using pet_adoption_service.Models;

namespace pet_adoption_service.Services
{
    public class PetAdopterService
    {
        private readonly PetAdoptionDbContext _dbContext;

        public PetAdopterService(PetAdoptionDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<PetAdopter> AddAdopter(PetAdopter newAdopter)
        {
            _dbContext.PetAdopters.Add(newAdopter);
            await _dbContext.SaveChangesAsync();
            return newAdopter;
        }

        public async Task<IEnumerable<PetAdopter>> GetAllAdopters()
        {
            return await _dbContext.PetAdopters.ToListAsync();
        }

    }
}