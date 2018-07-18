using System;
using System.Collections.Generic;

namespace AngularContosoUniversity.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public DateTime DateEnrolled { get; set; }



        public ICollection<Enrollment> Enrollments { get; set; }
  }
}