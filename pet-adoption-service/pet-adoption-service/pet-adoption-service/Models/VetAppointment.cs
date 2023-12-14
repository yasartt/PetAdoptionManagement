using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pet_adoption_service.Models
{
    public class VetAppointment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AppointmentId { get; set; }

        [Required]
        public int VetId { get; set; }

        [Required]
        public int PetId { get; set; }

        [Required]
        public DateTime AppointmentDate { get; set; }
    }
}