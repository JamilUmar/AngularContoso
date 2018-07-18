using System.Collections.Generic;
using System.Threading.Tasks;
using AngularContosoUniversity.Data;
using AngularContosoUniversity.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularContosoUniversity.Controllers
{
  [Route("api/[controller]")]
  public class DepartmentsController : Controller
  {
    private readonly AngularContosoContext db;
    public DepartmentsController(AngularContosoContext db)
    {
      this.db = db;
    }

    [HttpGet]
    public async Task<IEnumerable<Department>> GetDepartments()
    {
      var departments = await db.Departments
                          .Include(x => x.Courses)
                          .Include(x=> x.Administrator)
                          .ToListAsync();
      return departments;
    }

    [HttpGet("{id}", Name="GetDepartment")]
    public async Task<Department> GetDepartment(int id)
    {
      var department = await db.Departments
                          .Include(x => x.Courses)
                          .Include(x=> x.Administrator)
                          .FirstOrDefaultAsync(x=> x.InstructorId == id);
      return department;
    }
  }
}