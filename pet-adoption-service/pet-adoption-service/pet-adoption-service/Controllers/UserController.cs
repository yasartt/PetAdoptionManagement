using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using pet_adoption_service.Models;
using pet_adoption_service.Services;
using System.Net;

namespace pet_adoption_service.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly PetAdoptionDbContext _dbContext;

        public UserController(UserService userService, PetAdoptionDbContext dbContext)
        {
             _userService = userService;
            _dbContext = dbContext;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Veterinarian), (int)HttpStatusCode.OK)]
        [ProducesResponseType(typeof(string), (int)HttpStatusCode.BadRequest)]
        public async Task<ActionResult<Veterinarian>> RegisterVet(Veterinarian newVet)
        {
            var userExists = await _dbContext.Veterinarians.SingleOrDefaultAsync(q => q.Username == newVet.Username);
            if (userExists != null)
            {
                return Conflict("Kullanıcı adı kullanımda");
            }

            var newVetResult = await _userService.AddVetAsync(newVet);
            if (newVetResult != null)
            {
                return Ok(newVetResult);
            }
            return BadRequest();
        }

        [HttpGet]

        public async Task<ActionResult<Veterinarian>> GetAllUsers()
        {
            return await _dbContext.Veterinarians.SingleOrDefaultAsync(q => q.UserId == 1);
        }

    }
}
