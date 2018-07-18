using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularContosoUniversity.Data;
using AngularContosoUniversity.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularContosoUniversity.Controllers
{
  [Route("api/[controller]")]
  public class StudentsController : Controller
  {
    private readonly AngularContosoContext db;

    public StudentsController(AngularContosoContext db)
    {
      this.db = db;
    }


    [HttpGet]
    public async Task<IEnumerable<Student>> Get(string firstName)
    {
      var student = db.Students.ToList();

      if(!string.IsNullOrEmpty(firstName))
      {
        student = await db.Students.Include(x => x.Enrollments)
          .ThenInclude(x => x.Course)
          .AsNoTracking()
          .Where(x=> x.FirstName.Contains(firstName))
          .ToListAsync();
      }else{
         student = await db.Students
                            .Include(x=> x.Enrollments)
                                .ThenInclude(x=> x.Course)
                            .AsNoTracking()
                            .ToListAsync();
      }
      return student;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> Get(int id) 
    {
      var student = await db.Students
                            .Include(x=> x.Enrollments)
                                .ThenInclude(x=> x.Course)
                            .AsNoTracking()
                            .FirstOrDefaultAsync(x=> x.Id == id);
      if(student == null)
        return new NotFoundObjectResult("Student Not Found");

      return new OkObjectResult(student);
    }

    [HttpPost]
    public async Task<IActionResult> CreateStudent([FromBody]Student student)
    {
      if(!ModelState.IsValid)
        return BadRequest(ModelState);

      db.Students.Add(student);
      await db.SaveChangesAsync();


      return new OkObjectResult(student);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateStudent(int id, [FromBody] Student student)
    {
      if(!ModelState.IsValid)
        return BadRequest(ModelState);

      Student s = student;
      s.Id = id;
      db.Students.Update(s);
      await db.SaveChangesAsync();

      return new OkObjectResult(s);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStudent(int id)
    {
      var student = await db.Students.FindAsync(id);
      if(student == null)
        return new NotFoundObjectResult(student.FirstName + " Not Found");

      db.Students.Remove(student);
      await db.SaveChangesAsync();

      return new OkObjectResult("Record Deleted");
    }
  }
}
