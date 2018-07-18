using System.Collections.Generic;
using System.Threading.Tasks;
using AngularContosoUniversity.Data;
using AngularContosoUniversity.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularContosoUniversity.Controllers
{
  [Route("api/[controller]")]
  public class CoursesController : Controller
  {
    private readonly AngularContosoContext db;
    public CoursesController(AngularContosoContext db)
    {
      this.db = db;
    }


    [HttpGet]
    public async Task<IEnumerable<Course>> GetCourses()
    {
      var result = await db.Courses
                            .Include(x=> x.Department)
                            .ToListAsync();
      return result;
    }

    [HttpGet("{id}", Name="GetCourse")]
    public async Task<IActionResult> GetCourse(int id)
    {
      var course = await db.Courses.Include(x => x.Department)
                            .FirstOrDefaultAsync(x => x.CourseId == id);
      if(course == null)
        return NotFound("Course Not Found");

      return new OkObjectResult(course);
    }

    [HttpPost]
    public async Task<IActionResult> CreateCourse([FromBody]Course course)
    {
      if(!ModelState.IsValid)
        return BadRequest(ModelState);

      db.Courses.Add(course);
      await db.SaveChangesAsync();

      return CreatedAtRoute("GetCourse", new { id = course.CourseId }, course);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateCourse(int id, [FromBody]Course course)
    {
      if(!ModelState.IsValid)
        return BadRequest(ModelState);

      Course c = course;
      db.Update(c);

      await db.SaveChangesAsync();

      return new OkObjectResult(c);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCourse(int id)
    {
      var course = await db.Courses.FindAsync(id);
      if(course == null)
        return new NotFoundObjectResult("Course Not Found");

      db.Courses.Remove(course);
      await db.SaveChangesAsync();

      return new NoContentResult();
    }
  }
}