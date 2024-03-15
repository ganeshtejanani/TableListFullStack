using EmployeeApi.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using CoreApiResponse;

namespace EmployeeApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class EmployeeDetailController : BaseController
    {
        IEmployeeService _employeeService;
        public EmployeeDetailController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }
        [HttpPost] 

        public async Task<IActionResult> GetEmployeeDetails(string OrderBy, string OrderDirection, int SkipRows, int TopRows)
        {
            try
            {
                // Call your service method with the provided parameter
                
                var result = await _employeeService.GetEmployeedetails(OrderBy, OrderDirection, SkipRows, TopRows);

                if (result != null)
                {
                    return Ok(result);
                }
                else
                {
                    return NotFound("No employees found.");
                }
            }
            catch (Exception ex)
            {
                return CustomResult(ex.Message, null);
            }
        }
    }
}
