using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using api.Data;
using api.Models;
[Route("api/[controller]")]
[ApiController]
public class LandmarkController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public LandmarkController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/Landmark
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Landmark>>> GetLandmark()
    {
        return await _context.Landmark.ToListAsync();
    }
}
