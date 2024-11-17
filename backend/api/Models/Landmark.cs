public class Landmark
{
    public string LandmarkId { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string CityCityId { get; set; } = string.Empty; // Foreign key to City table
}
