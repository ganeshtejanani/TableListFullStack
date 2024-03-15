using Dapper.ORM;

namespace EmployeeApi.Context
{
    public class DbContext : DapperContext
    {
        public DbContext(IConfiguration configuration) : base(configuration.GetConnectionString("KaniniDataConnection"))
        {

        }
    }
}