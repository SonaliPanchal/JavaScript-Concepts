//Calculate the % of Student based on the marks entered using the switch case statement.

//let EnglisMarks = prompt("Please Enter the English Marks")
//let MatheMarks = prompt("Please ENter the maths Marks")
let EnglisMarks = 50;
let MatheMarks = 50;
let HindiMarks = 60;
let StudentName = "xyz";
const percentage = EnglisMarks + (MatheMarks / 300) * 100;

console.log(percentage);

function getStudentMarks(percentage) {
  let grade;
  if (percentage>=80) {
      grade = "A+";
      console.log("Student is Excellent"+grade);
  }else if(percentage >= 60){
      grade = "A";
      console.log("Student is Good"+grade);
  }
  else if(percentage >= 50){

      grade = "B";
      console.log("Student is Everage"+grade);
  }
  else{
        grade ="F"
        console.log("Student Got fail");

  }
}

getStudentMarks(percentage);
