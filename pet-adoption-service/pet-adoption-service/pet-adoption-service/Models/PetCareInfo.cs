using System.ComponentModel.DataAnnotations;

namespace pet_adoption_service.Models
{
    public class PetCareInfo
    {
        [Key]
        public int CareId { get; set;}

        [Required]
        public DateTime UpdateTime { get; set;}

        [Required]
        public string explanation { get; set;}
    }
}
