using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pet_adoption_service.Models;
using pet_adoption_service.Services;

namespace pet_adoption_service.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ShelterController : ControllerBase
    {
        private readonly ShelterService shelterService;
        public ShelterController(ShelterService shelterService)
        {
            this.shelterService = shelterService;
        }

        [HttpGet("{shelterId}")]
        public async Task<ActionResult<List<Pet>>> GetPetsByShelter(int shelterId)
        {
            if(shelterId == null)
            {
                return BadRequest();
            }

            return await shelterService.GetPetsByShelterAsync(shelterId);
        }

        [HttpGet("vetId")]
        public async Task<ActionResult<VetBusyHoursView>> GetShelterBusyHours(int shelterId)
        {
            return await shelterService.GetShelterBusyHoursAsync(shelterId);
        }

        [HttpPost]
        public async Task<ActionResult<Boolean>> AddAppointment(int vetId, int petAdopterId, DateTime date)
        {
            return await shelterService.AddAppointmentAsync(vetId, petAdopterId, date);
        }
    }
}
