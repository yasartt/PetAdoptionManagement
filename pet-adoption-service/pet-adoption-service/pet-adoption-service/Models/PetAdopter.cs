using Microsoft.EntityFrameworkCore;
using pet_adoption_service.Models;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace pet_adoption_service.Models
{
    [Table("petAdopter")]
    public class PetAdopter
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("userId")]
        public int UserId { get; set; }

        [Required]
        [Column("username")]
        public string Username { get; set; }

        [Required]
        [Column("password")]
        public string Password { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("address")]
        public string Address { get; set; }

        [Column("age")]
        public int Age { get; set; }
    }
}