using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pet_adoption_service.Models;
using System.Net;

namespace pet_adoption_service.Services
{
    public class ShelterService
    {
        private readonly PetAdoptionDbContext _dbContext;

        public ShelterService(PetAdoptionDbContext dbContext)
        {

            _dbContext = dbContext;

        }

        [ProducesResponseType(typeof(NoContentResult), (int)HttpStatusCode.NoContent)]
        public async Task<List<Pet>> GetPetsByShelterAsync(int shelterId)
        {
            var petList = await _dbContext.Pets.Where(q => q.ShelterId == shelterId).ToListAsync();

            return petList;
        }

    }
}
