
using api.Models;

public class Question
{
    public string QuestionId { get; set; } = string.Empty;
    public string QuizQuizId { get; set; } = string.Empty; // Foreign key to Quiz table
    public string Prompt { get; set; } = string.Empty;

    // Navigational Properties
    public ICollection<QuestionChoices> Choices { get; set; }
}
