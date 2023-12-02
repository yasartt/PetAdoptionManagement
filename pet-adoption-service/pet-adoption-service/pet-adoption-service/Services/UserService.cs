using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pet_adoption_service.Models;
using System.Net;

namespace pet_adoption_service.Services
{
    public class UserService
    {
        private readonly PetAdoptionDbContext _dbContext;

        public UserService(PetAdoptionDbContext dbContext)
        {

            _dbContext = dbContext;

        }


        [ProducesResponseType(typeof(NoContentResult), (int)HttpStatusCode.NoContent)]
        public async Task<Veterinarian> AddVetAsync(Veterinarian vet)
        {


            var newVeterinarian = new Veterinarian
            {
                Location = vet.Location,
                Name = vet.Name,
                Specialization = vet.Specialization,
                Username = vet.Username,
                Password = vet.Password,
            };

            await _dbContext.Veterinarians.AddAsync(newVeterinarian);
            await _dbContext.SaveChangesAsync();

            return newVeterinarian;
        }


    }
}
