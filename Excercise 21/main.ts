/*
Question#21;
           They think of something you could store in a TypeScript Object.
            Write a program that creates Objects containing these items.
*/
interface type {
    studentName: string;
    rollNumber: Number;
    percentage: Number;
    grade: string;
  }
  let result: type = {
    studentName: "Mohtashim",
    rollNumber: 1047019,
    percentage: 82,
    grade: "A",
  };
  console.log(`Dear ${result.studentName} RollNumber:${result.rollNumber}!! You have  passed the Annumal Exam with ${result.percentage}
  Percentage and got ${result.grade} Grade.`);