using Microsoft.AspNetCore.Mvc;
using pet_adoption_service.Models;
using pet_adoption_service.Services; // Add the namespace for your service

namespace pet_adoption_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetController : ControllerBase
    {
        private readonly IPetService _petService; // Add a service interface

        public PetController(IPetService petService)
        {
            _petService = petService;
        }

        [HttpGet]
        public IActionResult GetAllPets()
        {
            var pets = _petService.GetAllPets();
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
