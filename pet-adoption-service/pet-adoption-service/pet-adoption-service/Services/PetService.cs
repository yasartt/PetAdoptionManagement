﻿using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using pet_adoption_service.Models;

namespace pet_adoption_service.Services
{
    public interface IPetService
    {
        Task<IEnumerable<Pet>> GetAllPets();
        Task AddPet(Pet pet);
    }

    public class PetService
    {
        private readonly PetAdoptionDbContext _dbContext;

        public PetService(PetAdoptionDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Pet>> GetAllPets()
        {
            return await _dbContext.Pets.ToListAsync();
        }

        public async Task AddPet(Pet pet)
        {
            _dbContext.Pets.Add(pet);
            await _dbContext.SaveChangesAsync();
        }
    }
}
