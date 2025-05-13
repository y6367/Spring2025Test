// const score = 50;

// function assignedScore(score) {
//     if (score >= 90) {
//         console.log("You got an A");
        
//     } else if (score >= 80) {
//         console.log("You got a B");

//     } else if (score >= 70) {
//         console.log("You got a C");

//     } else if (score >= 60) {
//         console.log("You got a D");

//     } else if (score >= 50) {
//         console.log("You got an E");

//     } else {
//         console.log("You got a F");
        
//     }
// }


// Generate inital random number (0-100) to use in assignedScore() function
let random = Math.floor(Math.random() * 101)


function assignedScore(score) {
    // Generate new random number after each time function is called
    random = Math.floor(Math.random() * 101) 

    // If and else statements to identity integer parameter
    if (score >= 90) {
        return("WOW! You scored an A!" + " Score: " + score);
        
    } else if (score >= 80) {
        return("You got a B!" + " Score: " + score);

    } else if (score >= 70) {
        return("You got a C!" + " Score: " + score);

    } else if (score >= 60) {
        return("You got a D!" + " Score: " + score);

    } else if (score >= 50) {
        return("You got an E!" + " Score: " + score);

    } else {
        return("You got a F!" + " Score: " + score);
        
    }
}

// Alert function passing assignedScore function with an integer
alert(assignedScore(random));
alert(assignedScore(random));
alert(assignedScore(random));
alert(assignedScore(random));
alert(assignedScore(random));
alert(assignedScore(random));
