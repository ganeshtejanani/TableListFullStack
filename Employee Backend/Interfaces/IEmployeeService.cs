using EmployeeApi.Modal;

namespace EmployeeApi.Interfaces
{
    public interface IEmployeeService
    {
        Task<List<Employeedetails>> GetEmployeedetails(string OrderBy, string OrderDirection, int SkipRows, int TopRows);
    }
}
