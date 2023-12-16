﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using pet_adoption_service.Models;
using pet_adoption_service.Services;

namespace pet_adoption_service.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class VeterinarianController : ControllerBase
    {
        private readonly VeterinarianService _veterinarianService;
        public VeterinarianController(VeterinarianService veterinarianService)
        {
            _veterinarianService = veterinarianService;
        }

        [HttpGet("vetId")]
        public async Task<ActionResult<VetBusyHoursView>> GetVetBusyHours(int vetId)
        {
            return await _veterinarianService.GetVetBusyHoursAsync(vetId);
        }

        [HttpPost]
        public async Task<ActionResult<Boolean>> AddAppointment(int vetId, int petId, DateTime date)
        {
            return await _veterinarianService.AddAppointmentAsync(vetId, petId, date);
        }
    }
}
