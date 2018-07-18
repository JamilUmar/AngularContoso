using System;
using System.Collections.Generic;

namespace AngularContosoUniversity.Models
{
    public class Instructor
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime HireDate { get; set; }
        public string FullName 
        {
            get{ return FirstName + " " + LastName; }
        }


        public OfficeAssignment OfficeAssignment { get; set; }
        public ICollection<CourseAssignment> CourseAssignments { get; set; }
  }
}