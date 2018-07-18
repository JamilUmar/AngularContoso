using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AngularContosoUniversity.Data;
using AngularContosoUniversity.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularContosoUniversity.Controllers
{
  [Route("api/[controller]")]
  public class InstructorsController: Controller
  {
    private readonly AngularContosoContext db;
    public InstructorsController(AngularContosoContext db)
    {
      this.db = db;
    }

    [HttpGet]
    public async Task<IEnumerable<Instructor>> GetInstructors()
    {
      var instructors = await db.Instructors
                                  .Include(x=> x.OfficeAssignment)
                                  .Include(x => x.CourseAssignments)
                                    .ThenInclude(x=> x.Course)
                                      .ThenInclude(x=> x.Enrollments)
                                        .ThenInclude(x=> x.Student)
                                  .Include(x=> x.CourseAssignments)
                                    .ThenInclude(x=> x.Course)
                                      .ThenInclude(x=> x.Department)
                                  .AsNoTracking()
                                  .ToListAsync();

      return instructors;
    }

    [HttpGet("{id}", Name="GetInstructor")]
    public async Task<IActionResult> GetInstructor(int id)
    {
      var instructor = await db.Instructors
                                  .Include(x=> x.OfficeAssignment)
                                  .Include(x => x.CourseAssignments)
                                    .ThenInclude(x=> x.Course)
                                      .ThenInclude(x=> x.Enrollments)
                                        .ThenInclude(x=> x.Student)
                                  .Include(x=> x.CourseAssignments)
                                    .ThenInclude(x=> x.Course)
                                      .ThenInclude(x=> x.Department)
                                  .AsNoTracking()
                                  .FirstOrDefaultAsync(x=> x.Id == id);
      if(instructor == null)
        return new NotFoundObjectResult("Instructor Not Found");

      return new OkObjectResult(instructor);
    }

    [HttpPost]
    public async Task<IActionResult> CreateInstructor([FromBody]Instructor instructor)
    {
      if(!ModelState.IsValid)
        return BadRequest(ModelState);

      db.Instructors.Add(instructor);
      await db.SaveChangesAsync();

      return CreatedAtRoute("GetInstructor", new { id = instructor.Id }, instructor);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateInstructor(int id, [FromBody]Instructor instructor)
    {
      if(!ModelState.IsValid)
        return BadRequest();

      Instructor i = instructor;
      i.Id = id;

      db.Update(i);
      await db.SaveChangesAsync();

      return new OkObjectResult(i);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteInstructor(int id)
    {
      var instructor = await db.Instructors.FindAsync(id);
      if(instructor == null)
        return new NotFoundObjectResult("Instructor Not Found");

      try{
        db.Instructors.Remove(instructor);
        await db.SaveChangesAsync();
      }catch(Exception ex){
        throw new Exception(ex.Message);
      }
        return new NoContentResult();
    }
  }
}