/************** PART 1 **************/

// STEP 1: Write a variable that will store the total points possible (2500 points) that you can get in this course.

let totalPoints = 2500;
console.log(totalPoints)

// STEP 2: Use a prompt to collect the number of points a student currently has in the course and store that number in a variable.

let currentPoints = Number(prompt(`How many points do you currently have in this course?`)); 
console.log(currentPoints)

// STEP 3: Write an arrow function that accepts two arguments. The function should calculate and return the student's CURRENT grade percentage.

// let sum = (currentPoints/totalPoints) * 100;
// console.log(sum);

const currentGradePercentage = (totalPoints, currentPoints) =>      (currentPoints/totalPoints) * 100;

let sum = Math.round(currentGradePercentage(totalPoints, currentPoints));
console.log(sum);


// // STEP 4: Write on the page a sentence that will say, "Your current grade is [CURRENT GRADE PERCENTAGE]%."

document.write(`Your current grade is ${sum}%. `);


/************** PART 2 **************/

// STEP 5: Use a prompt to collect the grade that the student would like to achieve. The prompt should state, "What is the grade you want? 90, 80, 70 or 60?" Store that number in a variable.

let achievementGrade = Number(prompt("What grade do want to achieve? 90, 80, 70 or 60?"));


// STEP 6: Write an arrow function that accepts THREE arguments. This function will calculate and return the number of ADDITIONAL points the student needs to receive a specified grade. For example, if I tell the function that I have 1200 points and want to know how many points it will take to get a 90% in the course, the function will return 1050.

let neededPoints;

const getAdditionalPoints = (totalPoints, currentPoints, achievementGrade) => {
    if (achievementGrade == 90) {
       neededPoints = (0.9 * totalPoints) - currentPoints
    }
    if (achievementGrade == 80) {
        neededPoints = (0.8 * totalPoints) - currentPoints
    }
    if (achievementGrade == 70) {
        neededPoints = (0.7 * totalPoints) - currentPoints
    }
    if (achievementGrade == 60) {
        neededPoints = (0.6 * totalPoints) - currentPoints
    }
return neededPoints
}

console.log(getAdditionalPoints(totalPoints, currentPoints, achievementGrade));

// document.write(`You have ${currentPoints} points. You need ${neededPoints} points to earn a ${achievementGrade}% in this course.`)

// STEP 7: Write a switch statement that will write on the page a sentence. The cases depends on what the student has entered for the grade that they want. The results for each case should say, "You have [CURRENT POINTS] points. You need [ADDITIONAL POINTS NEEDED] points to earn a [GRADE WANTED]% in this course." 
// EXAMPLE: "You have 1200 points. You need 1050 points to earn 90% in this course."
// The default should say, "To receive a specified grade, please enter either 90, 80, 70 or 60 to find out how many additional points you need."

if (isNaN(neededPoints) || neededPoints < 60) {
    document.write(`You didn't enter a valid achievement grade, so we can't calculate the additional points needed to reach it.`)
} else {
document.write(`You have ${currentPoints} points. You need ${neededPoints} points to earn a ${achievementGrade}% in this course.`)
}


