 var readlineSync = require('readline-sync');
 var chalk = require('chalk');

 var score = 0;
// function to ask question
function ask(question, answer, options) {
  console.log(chalk.yellowBright(question))
  userOption = readlineSync.keyInSelect(options, 'Enter option')
  console.log(chalk.yellowBright('You answered: ' + options[userOption]))
  if (options[userOption].toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green('You are right!'));
    score++
  } else {
    console.log(chalk.redBright('You are wrong!'));
    console.log(chalk.yellowBright('Correct answer: ' + answer))
    score--
  }
  console.log(chalk.bold.blue("Your current score: " + score))
  // to differntiate between the questions
  console.log(chalk.cyanBright('_______________________________________\n  '))
}

//questions
var one = {
  que : "What is Ben's full name?",
  ans : 'Ben Tennyson',
}
  oneOptions = ["Ben Ten", "Ben Tenny", "Ben Tennyson", "Ben Tenn"]

var two = {
  que : 'Who created Ben 10? ',
  ans : 'Man of Action Studios',
}
  twoOptions = [ 'Man of Action Studios', 'DC Comics', 'Franchs Dev', 'Karvel Animation']

var three = {
  que : " What's the name of Ben's cousin?",
  ans : 'Gwen',
}
  threeOptions = ['Riley', 'Gwen', 'Kevin', 'Devin']

var four = {
  que : "What's the name of Ben's nemesis?",
  ans : 'Vilgax',
}
  fourOptions = ['Vreyt', 'Grant', 'Villa', 'Vilgax']

var five = {
  que : 'Who created Omnitrix? ',
  ans : 'Azmuth',
}
  fiveOptions = ['Dr. Octopus', 'The Aztecs', 'Azmuth', 'Ben']

var six = {
  que : 'What kind of special powers does Diamondhead have? ',
  ans : 'All of these powers',
}
  sixOptions = ['Fire crystal projectiles', 'Regrow limbs' , 'Coat objects in diamonds', 'All of these powers']

var seven = {
  que : "Who is Ben's alien form who can run 300 mph across any type of ground? ",
  ans : 'XLR8',
}
  sevenOptions = ['R2-D2', 'ILUVU', 'The Tornado', 'XLR8']

var eight = {
  que : "Who is the super-powered teen who absorbed the Omnitrix's ability and teamed up with Vilgax? ",
  ans : 'Kevin 11',
}
  eightOptions = ['Kevin 11', 'Bob 32', 'Einstein 9', 'Nick 6']

var nine = {
  que : 'Name the character who is immortal and can travel across space-time continuum.',
  ans : 'Professor Paradox',
}
  nineOptions = ['Dr. octopus', 'Professor Paradox', 'Dr.animo', 'Aggreggor']

var ten = {
  que : "What's the name of Ben's most powerful alien? ",
  ans : 'Alien X',
}
  tenOptions = ['Alien X', 'Time Freak', 'Alien J', 'The X']

var quizList = [one.que, one.ans, oneOptions , two.que, two.ans, twoOptions, three.que, three.ans, threeOptions, four.que, four.ans, fourOptions, five.que, five.ans, fiveOptions, six.que, six.ans, sixOptions, seven.que, seven.ans, sevenOptions, eight.que, eight.ans, eightOptions, nine.que, nine.ans, nineOptions, ten.que, ten.ans, tenOptions]

for ( i=0; i < quizList.length ; i = i + 3) {
  ask(quizList[i], quizList[i + 1], quizList[i + 2])
}


var kOne = {
  que : "What is the name of robot made by kiteretsu?",
  ans : "Korosuke",
}
  kOneOptions = ['Doraemon', 'Korosuke', 'Roboton', 'Dorimi']

var kTwo = {
  que : "What does Butagorira's father do?",
  ans : "Owns a vegetable shop",
}
  kTwoOptions = ["Works at a game parlour", "Does new inventions", "Owns a vegetable shop",  "Works in a company"]

var kThree = {
  que : "Who is Kiteretsu's neighbour?",
  ans : "Mr. Benzo",
}
  kThreeOptions = ["Mr. Benzo", "Miyoko", "Suniyo", "Mrs. Himawari"]

var kFour = {
  que : "What does Korosuke like to it? ",
  ans : "Koroke",
}
  kFourOptions = ['Dorayaki', 'Koroke', 'chocolate roll', 'sushi']

var kFive = {
  que : "Who is the richest among Kiteretsu's friends? ",
  ans : 'Tongari',
}
  kFiveOptions = ['Suniyo', 'Degesuki', 'Miyoko', 'Tongari']

var quizList2 = [kOne.que, kOne.ans, kOneOptions , kTwo.que, 
kTwo.ans, kTwoOptions, kThree.que, kThree.ans, kThreeOptions, kFour.que, kFour.ans, kFourOptions, kFive.que, kFive.ans, kFiveOptions]

if (score >= 0 ){
  // console.log('_______________________________________\n  ')
  console.log(chalk.bold.green(" \nCongratulation!! You're qualified for KITERETSU QUIZ as your score is not negative. :) \n "))
  console.log(chalk.bold.cyanBright('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n             KITERETSU QUIZ\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n '))
  for (i = 0; i < quizList2.length; i = i + 3) {
    ask(quizList2[i], quizList2[i+1], quizList2[i + 2])
  } 
} else {
    console.log(chalk.redBright("You're not qualified for KITERETSU QUIZ as your score is negative. :)\n"));
}

console.log(chalk.bold.yellow('YOUR TOTAL SCORE IS ' + score + ' \n '))

// Highscores
var scoreList = {'Nisarg' : 15}
// console.log(chalk.magentaBright('Highscores are: '))
// console.log(chalk.magentaBright(scoreList));
