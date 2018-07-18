using System;
using System.Collections.Generic;

namespace AngularContosoUniversity.Models
{
    public class Department
    {
        public int DepartmentId { get; set; }
        public string Name { get; set; }
        public decimal Budget { get; set; }
        public DateTime StartDate { get; set; }
        public int? InstructorId { get; set; }





        public ICollection<Course> Courses { get; set; }
        public Instructor Administrator { get; set; }
  }
}