using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;
using api.Models;
[Route("api/[controller]")]
[ApiController]
public class QuestionChoicesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public QuestionChoicesController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/QuestionChoices
    [HttpGet]
    public async Task<ActionResult<IEnumerable<QuestionChoices>>> GetQuestionChoices()
    {
        return await _context.QuestionChoices.ToListAsync();
    }
}
