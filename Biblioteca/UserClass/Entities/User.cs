using Domain.Models;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserClass.Entities
{
    [Table("TBUsers")]
    public class User : BaseEntity
    {
        public string Nome { get; set; }
        public bool Ativo { get; set; }
    }
}
