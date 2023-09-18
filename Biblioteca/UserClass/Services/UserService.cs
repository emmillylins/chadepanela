using UserClass.Entities;
using Domain.Models;
using FluentValidation;
using UserClass.Interfaces;
using Domain.Interfaces;
using AutoMapper;

namespace UserClass.Services
{
    public class UserService<TEntity> : IUserService where TEntity : BaseEntity
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public UserService(IUserRepository repository, IUnitOfWork unitOfWork, IMapper mapper) 
        { 
            _repository = repository;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public TOutputModel Add<TInputModel, TOutputModel, TValidator>(TInputModel inputModel)
            where TInputModel : class
            where TOutputModel : class
            where TValidator : AbstractValidator<User>
        {
            User entity = _mapper.Map<User>(inputModel);

            Validate(entity, Activator.CreateInstance<TValidator>());
            _repository.Insert(entity);

            TOutputModel outputModel = _mapper.Map<TOutputModel>(entity);

            return outputModel;
        }

        public void Delete(int id) => _repository.Delete(id);

        public IEnumerable<TOutputModel> Get<TOutputModel>() where TOutputModel : class
        {
            var entities = _repository.Select();
            var outputModels = entities.Select(s => _mapper.Map<TOutputModel>(s));

            return outputModels;
        }

        public TOutputModel GetById<TOutputModel>(int id) where TOutputModel : class
        {
            var entity = _repository.Select(id);
            var outputModel = _mapper.Map<TOutputModel>(entity);

            return outputModel;
        }

        public TOutputModel Update<TInputModel, TOutputModel, TValidator>(TInputModel inputModel)
            where TInputModel : class
            where TOutputModel : class
            where TValidator : AbstractValidator<User>
        {
            User entity = _mapper.Map<User>(inputModel);

            Validate(entity, Activator.CreateInstance<TValidator>());
            _repository.Update(entity);

            TOutputModel outputModel = _mapper.Map<TOutputModel>(entity);

            return outputModel;
        }

        #region Validações
        private void Validate(User obj, AbstractValidator<User> validator)
        {
            if (obj == null)
                throw new Exception("Registros não detectados!");

            validator.ValidateAndThrow(obj);
        }
        #endregion
    }
}
