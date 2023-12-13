using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pet_adoption_service.Models;
using pet_adoption_service.Services; // Add the namespace for your service

namespace pet_adoption_service.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly IPetService _petService;
        private readonly PetAdoptionDbContext _dbContext;

        public PetController(IPetService petService, PetAdoptionDbContext dbContext)
        {
            _petService = petService;
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pet>>> GetAllPets()
        {
            var pets = await _petService.GetAllPets();
            return Ok(pets);
        }

        [HttpPost]
        public IActionResult AddPet([FromBody] Pet pet)
        {
            if (pet == null)
            {
                return BadRequest("Pet data is null");
            }

            _petService.AddPet(pet);

            return CreatedAtAction(nameof(GetAllPets), new { id = pet.PetId }, pet);
        }
    }
}
