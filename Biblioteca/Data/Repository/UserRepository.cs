using Data.Context;
using UserClass.Entities;
using UserClass.Interfaces;

namespace Data.Repository
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(DataDbContext context) : base(context)
        {
        }
    }
}
