var questions= 
    {
    allQuestions: ["1. Which main character was not part of the comic book series?","2. What is Beth's last name?","3. What does T-Dog stand for?","4. What was promised at Terminus?"],
    answers: ["B. Daryl Dixon", "C. Greene","B. Theodore Douglas","D. All of the above"],
    answerChoicesOne: [" A. Rick Grimes"," B. Daryl Dixon"," C. T-Dog"," D. None of the above"],
    answerChoicesTwo: [" A. Grimes"," B. Dixon"," C. Greene"," D. None of the above"],
    answerChoicesThree: [" A. Teddy Dixon"," B. Theodore Douglas"," C. Tony Diggs"," D. None of the above"],
    answerChoicesFour: [" A. Sanctuary for all."," B. Community for all."," C. Those who arrive survive."," D. All of the above"],
    answerLetters: ["b","c","b","d"],
    };
var note = "To view all question type the command showAllQuestions(); To enter all answers at once enter answerQuestions('a','b','c','d'); with your answers instead of a, b, c, or d."

var showAllQuestions = function(){
    for(var i =0, l = questions.allQuestions.length;i < l; i++){
        if(questions.allQuestions[0]){
            console.log(questions.allQuestions[0])
            for(var i = 0, l = questions.answerChoicesOne.length; i < l; i++){
                console.log(questions.answerChoicesOne[i]);
            }
    
        }
        if(questions.allQuestions[1]){
            console.log(questions.allQuestions[1])
            for(var i = 0, l = questions.answerChoicesTwo.length; i < l; i++){
                console.log(questions.answerChoicesTwo[i]);
                }
            }
        if(questions.allQuestions[2]){
            console.log(questions.allQuestions[2])
            for(var i = 0, l = questions.answerChoicesThree.length; i < l; i++){
                console.log(questions.answerChoicesThree[i]);
            }
        }
        if(questions.allQuestions[3]){
            console.log(questions.allQuestions[3])
            for(var i = 0, l = questions.answerChoicesFour.length; i < l; i++){
                console.log(questions.answerChoicesFour[i]);
            }
        }
    }
    console.log(questions.allQuestions[i]);
};

var answerQuestions = function(a,b,c,d){
    var checked = []
    answered.push(a,b,c,d)
    for(var i = 0, l = answered.length; i < l; i++){
        for(var prop in questions.answerLetters){
            if(questions.answerLetters[prop]){
                checked.push(questions.answerLetters[prop])
                }
            if(checked[prop] === answered[prop]){
                grade +=1;
                }
            if(checked.length > 4){
                checked = [];
                if(grade === 0){
                    return "You answered that already try something new."}
                }
            }
        
            if(grade >= 3 && grade <= 4){
                answered = [];
             console.log("Congrats you passed! You answered " + grade + " out of " + questions.allQuestions.length + " correctly.");
            }
            if(grade >= 0 && grade <= 2) {
            answered = [];
            console.log("Nice try, you answered " + grade + " out of " + questions.allQuestions.length + " correctly." )
             }
            if(answered.length === 0){
                    grade = 0;
                    return "Type newQuiz(); to try agian.";
            }
    }
};

var newQuiz = function(){
    grade = 0;
    answered = [];
    return note;
}

var grade = 0;
var answered = [];