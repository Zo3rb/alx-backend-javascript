export default function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = students
    .filter((student) => student.location === city)
    .map((student) => {
      const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchingGrade) {
        student.grade = matchingGrade.grade;
      } else {
        student.grade = 'N/A';
      }
      return student;
    });

  return updatedStudents;
}
