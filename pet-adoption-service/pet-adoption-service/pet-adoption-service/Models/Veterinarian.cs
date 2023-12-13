using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace pet_adoption_service.Models
{
    [Table("veterinarian")]
    public class Veterinarian
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
        [Column("location")]
        public string Location { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("specialization")]
        public string Specialization { get; set; }
    }
}