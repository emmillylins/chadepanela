using UserClass.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Data.Mappings
{
    internal class UserMap : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("TBUsers");

            builder.HasKey(prop => prop.Id);

            builder.Property(prop => prop.Nome).HasColumnType("VARCHAR(100)");
            builder.Property(prop => prop.Ativo).HasColumnType("bit");
        }
    }
}
