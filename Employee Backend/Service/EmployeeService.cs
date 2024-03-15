using Dapper;
using EmployeeApi.Context;
using EmployeeApi.Interfaces;
using EmployeeApi.Modal;
using System.Data;

namespace EmployeeApi.Service
{
    public class EmployeeService : IEmployeeService
    {
        private readonly DbContext _dbContext;

        public EmployeeService(DbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<Employeedetails>> GetEmployeedetails(string OrderBy, string OrderDirection, int SkipRows, int TopRows)
        {
            var parameters = new DynamicParameters();
            parameters.Add("@OrderBy", OrderBy, DbType.String);
            parameters.Add("@OrderDirection", OrderDirection, DbType.String);
            parameters.Add("@SkipRows", SkipRows, DbType.Int32);
            parameters.Add("@TopRows", TopRows, DbType.Int32);
            var results = await _dbContext.QueryAsync<Employeedetails>("Employee_DashBoard_Get",parameters, commandType: CommandType.StoredProcedure);
            return results.ToList();
        }
    }
}
