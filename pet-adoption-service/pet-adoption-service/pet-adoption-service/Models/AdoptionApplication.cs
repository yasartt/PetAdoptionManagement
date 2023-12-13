using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pet_adoption_service.Models
{
    // Enum definition for ApplicationStatus.
    public enum ApplicationStatus
    {
        Pending,
        Approved,
        Rejected
    }

    // Entity model for AdoptionApplication with specified table name and column names.
    [Table("AdoptionApplication")]
    public class AdoptionApplication
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("adoption_application_id")]
        public int AdoptionApplicationId { get; set; }

        [Required]
        [Column("pet_adopter_id")]
        public int PetAdopterId { get; set; }

        [Required]
        [Column("shelter_id")]
        public int ShelterId { get; set; }

        [Required]
        [Column("pet_id")]
        public int PetId { get; set; }

        [Required]
        [Column("application_date")]
        public DateTime ApplicationDate { get; set; }

        [Required]
        [Column("status")]
        public ApplicationStatus Status { get; set; } // Enum type for status -> ApplicationStatus

        // Navigation properties for related entities
        [ForeignKey("PetAdopterId")]
        public virtual PetAdopter PetAdopter { get; set; }

        [ForeignKey("ShelterId")]
        public virtual Shelter Shelter { get; set; }

        [ForeignKey("PetId")]
        public virtual Pet Pet { get; set; }
    }
}