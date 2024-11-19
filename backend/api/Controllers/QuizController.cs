using api.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public QuizController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Quiz
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quiz>>> GetQuiz()
        {
            return await _context.Quiz.ToListAsync();
        }

        [HttpGet("{quizId}/questions")]
        public async Task<IActionResult> GetQuizQuestions(string quizId)
        {
            var questions = await _context.Question
                .Where(q => q.QuizQuizId == quizId)
                .Include(q => q.Choices)
                .ToListAsync();

            if (!questions.Any())
            {
                return NotFound("No questions found for this quiz.");
            }

            return Ok(questions.Select(q => new
            {
                q.QuestionId,
                q.Prompt,
                Choices = q.Choices.Select(c => new
                {
                    c.ChoiceId,
                    c.Text,
                    c.IsCorrect
                })
            }));
        }
    }
}
