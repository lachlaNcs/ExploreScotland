using api.Models;
using System.ComponentModel.DataAnnotations;



namespace api.Models
{
    public class QuestionChoices
    {
        [Key] // Mark this property as the primary key
        public string ChoiceId { get; set; } = string.Empty;

        public string QuestionQuestionId { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
        public bool IsCorrect { get; set; }
    }
}
