using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pet_adoption_service.Models
{
    [Table("Pet")]
    public class Pet
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("pet_id")]
        public int PetId { get; set; }

        [Column("breed")]
        public string Breed { get; set; }

        [Column("age")]
        public int Age { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("status")]
        public string Status { get; set; }

        [Column("gender")]
        public string Gender { get; set; }

        // Nullable ShelterId indicating a foreign key relationship to the Shelter entity.
        [Column("shelter_id")]
        public int? ShelterId { get; set; }

        // If there is a navigation property to the Shelter entity, it should be included here.
        // [ForeignKey("ShelterId")]
        // public virtual Shelter Shelter { get; set; }
    }
}