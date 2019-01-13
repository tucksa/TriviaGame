$(document).ready(function() {
var questionArr = [];
var timeLeft = 30;
var intervalId;
var quesPicked;
var correctans= 0;
var wrongans= 0;

function Question(question, opt1, opt2, opt3, opt4, ans) {
    this.question= question;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
    this.ans = ans;
}
var book = new Question("The Shining was written by which author?", " R.L. Stein", " Stephen King",  " J.R.R Tolkein", " J.K. Rolling",  "2") ;
//Stephen King
var water= new Question("What is the H in H2O?", " Hexagon", " Heavy", " Helium", " Hydrogen", "4");
//Hydrogen
var geo = new Question("Dublin is the capital of which country?", " Iceland", " Ireland", " United Kingdom", " France", "2");
//Ireland
var geometry = new Question("What is the term for a nine sided object?", " Nonagon", " Decagon", " Octagon", " Septagon", "1");
//Nonagon
var pres = new Question("Who was the 2nd president of the US?", " George Washington", " Thomas Jefferson", " Abraham Lincoln", " John Adams", "4");
//John Adams
var game = new Question("What is the name of Mario's Brother?", " Marco", " Angelo", " Luigi", " Antonio", "3");
//Luigi
var music= new Question("Mick Jagger is in which band?", " The Beatles", " Pink Floyd", " The Clash", " Rolling Stones", "4");
//Rolling Stones
var tech = new Question("Which of the following items was owned by the fewest U.S. homes in 1990?", " Home computer", " Compact disk player", " Cordless phone", " Dishwasher", "2");
//compact disk player
var history =  new Question("What did the 'D' in 'D-Day' stand for?", " Doom", " Day", " Dwight (Eisenhower)", " Dunkirk", "2");
//day
var cartoon = new Question("Which of these characters turned 40 years old in 1990?", " Charlie Brown", " Bugs Bunny", " Mickey Mouse", " Fred Flintstone", "1");
//charlie brown
var people = new Question("What year did Albert Einstein die?", " 1954", " 1949", " 1960", " 1955", "4");
//1955
var asto = new Question("Which is the largest planet in the solar system?", " Jupiter", " Neptune", " Earth", " Mars", "1");
//Jupiter
var art = new Question("What colour is Cerulean?", " Red"," Blue", " Yellow", " Green", "2");
//Blue
var bio = new Question("What are a group of Dolphins called?", " School", " Herd", " Pod", " Pool", "3");
//Pod
var invent= new Question("Who invented Penicillin?", " Alexandra Flemming", " Thomas Edison", " Marie Curie", " George Orwell", "1");
//Alexandra Flemming
var science = new Question("What temperature is the same in Celsius and Fahrenheit?", " +40", "+100", " -40", " 0", "3");
//-40
var movie = new Question("Which actor does not appear in 'Saving Private Ryan'?", " Tom Hanks", " Vin Diesel", " Giovanni Ribisi", " Ralph Fiennes", "4");
//ralph
var book2 = new Question("Which of these antagonist characters was created by novelist J.K. Rowling?", " Lord Voldemort", " Professor Moriarty", " Lord Farqaad", " Darth Vader", "1");
//valdemort
var rushmore = new Question("Which US President is most to the left on the Mount Rushmore National Memorial?", " Theodore Roosevelt", " Thomas Jefferson", " George Washington", " Abraham Lincoln", "3");
//Wahsington
var newYear = new Question("What is the name for the Jewish New Year?", " Rosh Hashanah", " Hanukkah", " Yom Kippur", " Kwanzaa", "1");
//Rosh Hashanah
var vaccine = new Question("What was the first successful vaccine developed in history?", " Rabies", " Scarlet Fever", " Cholera", " Smallpox", "4");
//smallpox
questionArr.push(book, water, geo, geometry, pres, game, music, tech, history, cartoon, people, asto, art, bio, invent, science, movie, book2, rushmore, newYear, vaccine);

$(".timer").append("Time left: " + timeLeft);
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  function stop() {
    clearInterval(intervalId);
    $("#areYouRight").html("You ran out of time...");
    $(".timer").empty();
    $("#question").empty();
    $("#optOne").empty();
    $("#optTwo").empty();
    $("#optThree").empty();
    $("#optFour").empty();
    $(".mybtn").css("display", "none");
    timeLeft=30;
  }
  function decrement() {
    timeLeft--;
    $(".timer").html("Time left: " + timeLeft);
    if (timeLeft === 0) {
        stop();
        setTimeout(newQuestion, 3000);
    }
    run();
  }

function randomInt() {
    return Math.floor(Math.random()*questionArr.length);
} 

function newQuestion(){
    if(questionArr.length>1){
        timeLeft=30;
        $(".mybtn").css("display", "block");
        $("#areYouRight").empty();
        $(".finalscore").empty();
        $("#startGame").css("display", "none");
        $(".timer").append("Time left: " + timeLeft);
        decrement();
        q= randomInt();
        quesPicked= questionArr[q];
        $("#question").append(quesPicked.question);
        $("#optOne").append(quesPicked.opt1);
        $("#optTwo").append(quesPicked.opt2);
        $("#optThree").append(quesPicked.opt3);
        $("#optFour").append(quesPicked.opt4);
        $("#answer").attr("value", quesPicked.ans);
        questionArr.splice(quesPicked,1);
    
    
    }else{
        $(".timer").empty();
        $("#question").empty();
        $("#optOne").empty();
        $("#optTwo").empty();
        $("#optThree").empty();
        $("#optFour").empty();
        $(".mybtn").css("display", "none");
        $("#areYouRight").html("Game Over");
        $("#correctcount").html("Correct: " + correctans);
        $("#wrongcount").html("Wrong: " + wrongans);
        questionArr.push(book, water, geo, geometry, pres, game, music, tech, history, cartoon, people, asto, art, bio, invent, science, movie, book2, rushmore, newYear, vaccine);
        $("#startGame").css("display", "block").html("Again?");
    }

};

 function correct(){
    $("#areYouRight").html("Correct!");
    $(".timer").empty();
    $("#question").empty();
    $("#optOne").empty();
    $("#optTwo").empty();
    $("#optThree").empty();
    $("#optFour").empty();
    $(".mybtn").css("display", "none");
    timeLeft= 30;
    clearInterval(intervalId);
    correctans++;
 };
 function wrong() {
    $("#areYouRight").html("Nice Try... Wrong");
    $(".timer").empty();
    $("#question").empty();
    $("#optOne").empty();
    $("#optTwo").empty();
    $("#optThree").empty();
    $("#optFour").empty();
    $(".mybtn").css("display", "none");
    timeLeft=30;
    clearInterval(intervalId);
    wrongans ++;
 };


$("#startGame").click(function(){
    correctans=0;
    wrongans=0;
    newQuestion();
    $("#optOne").click(function(){
        if(quesPicked.ans == $(this).val()){
            correct();
            setTimeout(newQuestion, 3000);
        }else{
            wrong();
            setTimeout(newQuestion, 3000);
        }
    });
    $("#optTwo").click(function(){
        if(quesPicked.ans== $(this).val()){
            correct();
            setTimeout(newQuestion, 3000);
        }else{
            wrong();
            setTimeout(newQuestion, 3000);
        }
    });
    $("#optThree").click(function(){
        if(quesPicked.ans== $(this).val()){
            correct();
            setTimeout(newQuestion, 3000);
        }else{
            wrong();
            setTimeout(newQuestion, 3000);
        }
        
    });
    $("#optFour").click(function(){
        if(quesPicked.ans== $(this).val()){
            correct();
            setTimeout(newQuestion, 3000);
        }else{
            wrong();
            setTimeout(newQuestion, 3000);
        } 
    });
    

});



});