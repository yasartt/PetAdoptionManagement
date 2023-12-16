using System.ComponentModel.DataAnnotations;

namespace pet_adoption_service.Models
{
    public class HealthRecord
    {
        [Key]
        [Required]
        public int HealthRecordId { get; set; }

        [Required]
        public int PetId { get; set; }

        [Required]
        public int VetId { get; set; }

        [Required]
        public bool isHealthy { get; set; }

        [Required]
        public DateTime UpdateTime { get; set; }

    }
}
