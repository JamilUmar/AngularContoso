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
    public async Task<IActionResult> GetDepartment(int id)
    {
      var department = await db.Departments
                          .Include(x => x.Courses)
                          .Include(x=> x.Administrator)
                          .FirstOrDefaultAsync(x=> x.DepartmentId == id);
      if(department == null)
        return new NotFoundObjectResult("Department Not Found");

      return new OkObjectResult(department);
    }

    [HttpPost]
    public async Task<IActionResult> CreateDepartment([FromBody]Department department)
    {
      if(!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      db.Departments.Add(department);
      await db.SaveChangesAsync();

      return CreatedAtRoute("GetDepartment", new { id = department.DepartmentId }, department);

    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateDepartment(int id, [FromBody]Department department)
    {
      if(!ModelState.IsValid)
        return BadRequest(ModelState);

      var dept = await db.Departments.Include(x => x.Courses).FirstOrDefaultAsync(x => x.DepartmentId == id);
      if(dept == null)
        return new NotFoundObjectResult("Department not Found");

      // dept.DepartmentId = department.DepartmentId;
      dept.Budget = department.Budget;
      dept.InstructorId = department.InstructorId;
      dept.Name = department.Name;
      dept.StartDate = department.StartDate;

      db.Update(dept);
      await db.SaveChangesAsync();

      return new OkObjectResult(dept);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDepartment(int id)
    {
      var dept = await db.Departments.FindAsync(id);
      if(dept == null)
        return new NotFoundObjectResult("Department not found");

      db.Departments.Remove(dept);
      await db.SaveChangesAsync();

      return new NoContentResult();
    }
  }
}