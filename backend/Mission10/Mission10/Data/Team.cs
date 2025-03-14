using System.ComponentModel.DataAnnotations;

namespace Mission10.Data
{
    public class Team
    {
        [Key]
        public int TeamId { get; set; } // Primary Key

        [Required]
        public string? TeamName { get; set; }

        // Navigation property to establish a one-to-many relationship
        //public List<BowlingCrew> Bowlers { get; set; } = new List<BowlingCrew>();
    }
}
