// Promiss to read a chapter
const ReadChaapter = () => {
  return new Promise((resolve, reject) => {
    console.log(" Readimg the chapter !!!!!!!!!!!!!!!!!");
    setTimeout(() => {
      const isTried = Math.random() > 20 / 100;
      if (isTried) {
        console.log("chapter reading completed !!!!!!!!");
        resolve(); // Resolve when done
      } else {
        reject(new Error("Feeling to tired not able to complete the reading"));
      }
    });
  });
};

//// Promiss to solve practice questions

const solveTheQuestion = () => {
  return new Promise((resolve, reject) => {
    console.log(" Solving the Question !!!!!!!!!!!!!!!!!");
    setTimeout(() => {
      const isTried = Math.random() > 20 / 100;
      if (isTried) {
        console.log("Question SOlution completed !!!!!!!!");
        resolve(); // Resolve when done
      } else {
        reject(new Error("Feeling to tired not able to complete the Solution"));
      }
    });
  });
};

//async function to call the promisses

async function studyForExam() {
  try {
    await ReadChaapter(); // Wait for the chapter to be read
    await solveTheQuestion(); //// Then solve practice questions
    console.log("All Study done and ready for exam");
  } catch (error) {
    console.log("Study not completed as Student got Tired");
  }
}

studyForExam();
