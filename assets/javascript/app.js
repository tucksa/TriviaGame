var questionArr = [];
var correctAnswers= [];

function Question(question, opt1, opt2, opt3, opt4) {
    this.question= question;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
}
var book = new Question ("The Shining was written by which author?", "R.L. Stein", "Stephen King", "J.R.R Tolkein", "J.K. Rolling" );
//Stephen King
var water= new Question ("What is the H in H2O?", "Hexagon", "Heavy", "Helium", "Hydrogen");
//Hydrogen
var geo = new Question("Dublin is the capital of which country?", "Iceland", "Ireland", "United Kingdom", "France");
//Ireland
var geometry = new Question ("What is the term for a nine sided object?", "Nonagon", "Decagon", "Octagon", "Septagon");
//Nonagon
var pres = new Question ("Who was the 2nd president of the US?", "George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams");
//John Adams
var game = new Question ("What is the name of Mario's Brother?", "Marco", "Angelo", "Luigi", "Antonio");
//Luigi
var music= new Question ("Mick Jagger is in which band?", "The Beatles", "Pink Floyd", "The Clash", "Rolling Stones");
//Rolling Stones
var tech = new Question ("Which of the following items was owned by the fewest U.S. homes in 1990?", "home computer", "compact disk player", "cordless phone", "dishwasher");
//compact disk player
var history = new Question ("What did the 'D' in 'D-Day' stand for?", "doom", "day", "Dwight (Eisenhower)", "Dunkirk");
//day
var cartoon = new Question ("Which of these characters turned 40 years old in 1990?", "Charlie Brown", "Bugs Bunny", "Mickey Mouse", "Fred Flintstone");
//charlie brown
var people = new Question ("What year did Albert Einstein die?", "1954", "1949", "1960", "1955");
//1955
var asto = new Question ("Which is the largest planet in the solar system?", "Jupiter", "Neptune", "Earth", "Mars");
//Jupiter
var art = new Question ("What colour is Cerulean?", "Red", "Blue", "Yellow", "Green");
//Blue
var bio = new Question ("What are a group of Dolphins called?", "School", "Herd", "Pod", "Pool");
//Pod
var invent= new Question ("Who invented Penicillin?", "Alexandra Flemming", "Thomas Edison", "Marie Curie", "George Orwell");
//Alexandra Flemming