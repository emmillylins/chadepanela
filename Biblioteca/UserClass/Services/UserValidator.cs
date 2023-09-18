using UserClass.Entities;
using FluentValidation;

namespace UserClass.Services
{
    public class UserValidator : AbstractValidator<User>
    {
        public UserValidator() { }
    }
}
