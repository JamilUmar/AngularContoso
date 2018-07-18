using System;
using AngularContosoUniversity.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularContosoUniversity.Data
{
  public class AngularContosoContext : DbContext
  {
    public AngularContosoContext(DbContextOptions<AngularContosoContext> options) : base(options) { }


    public DbSet<Student> Students { get; set; }
    public DbSet<Course> Courses { get; set; }
    public DbSet<Enrollment> Enrollments { get; set; }
    public DbSet<Instructor> Instructors { get; set; }
    public DbSet<OfficeAssignment> OfficeAssignments { get; set; }
    public DbSet<Department> Departments { get; set; }
    public DbSet<CourseAssignment> CourseAssignments { get; set; }



    protected override void OnModelCreating(ModelBuilder builder )
    {
      builder.Entity<Student>().ToTable("Students");
      builder.Entity<Student>().Property(x => x.FirstName).HasMaxLength(15).IsRequired();
      builder.Entity<Student>().Property(x => x.LastName).HasMaxLength(15).IsRequired();
      builder.Entity<Student>().Property(x => x.DateEnrolled).IsRequired();

      builder.Entity<Course>().ToTable("Courses");
      builder.Entity<Course>().Property(x => x.CourseId).ValueGeneratedNever();
      builder.Entity<Course>().Property(x => x.Title).HasMaxLength(15).IsRequired();

      builder.Entity<Instructor>().ToTable("Instructors");
      builder.Entity<Instructor>().Property(x => x.FirstName).HasMaxLength(15).IsRequired();
      builder.Entity<Instructor>().Property(x => x.LastName).HasMaxLength(15).IsRequired();
      builder.Entity<Instructor>().Property(x => x.HireDate).HasColumnType("datetime2(7)");

      builder.Entity<OfficeAssignment>().ToTable("OfficeAssignments");
      builder.Entity<OfficeAssignment>().HasKey(x => x.InstructorId);
      builder.Entity<OfficeAssignment>().Property(x => x.Location).HasMaxLength(50);

      builder.Entity<Department>().ToTable("Departments");
      builder.Entity<Department>().Property(x => x.Name).HasMaxLength(50);
      builder.Entity<Department>().Property(x => x.Budget).HasColumnType("money");
      builder.Entity<Department>().Property(x => x.StartDate).HasColumnType("datetime2(7)");

      builder.Entity<CourseAssignment>().ToTable("CourseAssignments");
      builder.Entity<CourseAssignment>().HasKey(x => new { x.CourseId, x.InstructorId });

      builder.Entity<Enrollment>().ToTable("Enrollments");

    }    
  }
}