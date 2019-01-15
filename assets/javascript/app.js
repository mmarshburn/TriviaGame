$document.ready(function(){

    let timer = setTimeout(countCorrect(), 60000);
    
    
    var quiz = 10; 
        answers =["Bourbon","Colorado", "Hawaii", "November 3", "Chicken", "Chile con Carne", "Pecan","Fried Chicken", "Turkey", "Fortune Cookie"];
        data = $("input"), 
        answersCorrect = 0; 
        answersWrong = 0; 
        count = 10; 

function countCorrect(){
    for(i=0; i<data.length; i++); 

    if (data[i].checked){
        if (answers.indexOf(data[i].value)==-1){
            answersCorrect++;
        }
        else {
            answersWrong++;
        }
    }
 
}


var questionsAnswered = answersCorrect + answersWrong; 
console.log(questionsAnswered);
if (questionsAnswered !== quiz) {
    unanswered = quiz - questionsAnswered; 
}

$("#right").text(answersCorrect);
$("#wrong").text(answersWrong);
$("ua").text(unanswered);




countCorrect();
}); 