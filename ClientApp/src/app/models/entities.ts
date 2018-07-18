
export enum Grade {
  A, B, C, D, E, F
}

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  dateEnrolled: Date;


  enrollments: Enrollment[];
}

export class Course {
  courseId: number;
  title: string;
  credits: number;
  departmentId: number;


  department: Department[];
  enrollment: Enrollment[];
}

export class Enrollment {
  enrollmentId: number;
  courseId: number;
  studentId: number;
  grade: Grade;



  student: Student;
  course: Course;
}

export class Department {
  departmentId: number;
  name: string;
  budget: number;
  startDate: Date;
  instructorId: number;

  courses: Course[];
  administrator: Instructor;
}

export class Instructor {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public hireDate?: Date,


    public officeAssignment?: OfficeAssignment,
    public courseAssignments?: CourseAssignment[]
  ) { }
}

export class OfficeAssignment {
  instructorId: number;
  location: string;


  instructor: Instructor;
}

export class CourseAssignment {
  courseId: number;
  instructorId: number;


  course: Course;
  instructor: Instructor;
}
