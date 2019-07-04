const collectAnswers = require("./lib/collectAnswersModule");

const questions = [
  "What is your name? ",
  "Where do you live? ",
  "What are you going to do with node js? "
];

const answerEvents = collectAnswers(questions, answers => {
  console.log("Thank you for your answers. ");
  console.log(answers);
  process.exit();
});

answerEvents.on("answer", answer => {
  console.log(`Question Answered: ${answer}`)
})
