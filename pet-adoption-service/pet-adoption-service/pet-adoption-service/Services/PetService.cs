using System.Collections.Generic;
using System.Linq;
using pet_adoption_service.Models;

namespace pet_adoption_service.Services
{
    public interface IPetService
    {
        IEnumerable<Pet> GetAllPets();
        void AddPet(Pet pet);
    }

    public class PetService : IPetService
    {
        private readonly PetAdoptionDbContext _dbContext;

        public PetService(PetAdoptionDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Pet> GetAllPets()
        {
            return _dbContext.Pets.ToList();
        }

        public void AddPet(Pet pet)
        {
            _dbContext.Pets.Add(pet);
            _dbContext.SaveChanges();
        }
    }
}
