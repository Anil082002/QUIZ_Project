const questions=[

    {
        question : "who is the author of the book - Broken Wing?",
        answers : [
            {text:"A.P.J. Abdul kalam", correct: false},
            {text:"Kiran Desai", correct: false},
            {text:"Ravinder Singh", correct: false},
            {text:"Sarojini Naidu", correct: true},
        ]
    },
    {
        question : "what is the full form of MRP?",
        answers : [
            {text:"Minimum Retail price", correct: false},
            {text:"Maximum Retail Price", correct: true},
            {text:"Manufacturing Reused product", correct: false},
            {text:"Material Requirements price", correct: false},
        ]
    },
    {
        question : "Major movie is a biopic of which soldier?",
        answers : [
            {text:"Adivi sesh", correct: false},
            {text:"Sudeep Krishna ", correct: false},
            {text:"Sandeep karunakaran", correct: false},
            {text:"Sandeep unnikrishnan", correct: true},
        ]
    },
    {
        question : "what is the original name of Mahabharata?",
        answers : [
            {text:"Kurukshetra", correct: false},
            {text:"Bhagavad Gita", correct: false},
            {text:"Jaya Samhitha", correct: true},
            {text:"kouravulu pandavulu", correct: false},
        ]
    },
    {
        question : "what is the historical inscription on the 20rs note currently in circulation?",
        answers : [
            {text:"Ellora caves", correct: true},
            {text:"Ajanta caves", correct: false},
            {text:"Elephanta caves", correct: false},
            {text:"undavalli caves", correct: false},
        ]
    },
    {
        question : "who is the vice captain of team India in 2011 world cup ?",
        answers : [
            {text:"M.S Dhoni", correct: false},
            {text:"Rohit Sharma", correct: false},
            {text:"Virat kohli", correct: false},
            {text:"Virender Sehwag", correct: true},
        ]
    },
    {
        question : "what is DC in washington DC?",
        answers : [
            {text:"Detective comics", correct: false},
            {text:"District of cabo verde", correct: false},
            {text:"District of Columbia", correct: true},
            {text:"Dectective of Columbia", correct: false},
        ]
    },
    {
        question : "what is the meaning of the most famous place BAWARCHI?",
        answers : [
            {text:"cook", correct: false},
            {text:"chef", correct: true},
            {text:"taste", correct: false},
            {text:"biriyani", correct: false},
        ]
    },
    {
        question : "who is the director of kantara?",
        answers : [
            {text:"Ajaneesh Loknath", correct: false},
            {text:"Rakshit shetty", correct: false},
            {text:"Raj B Shetty", correct: false},
            {text:"Rishab Shetty", correct: true},
        ]
    },
    {
        question : "who is the Music director of RRR?",
        answers : [
            {text:"Ilaiyaraaja", correct: false},
            {text:"Amit Trivedi", correct: false},
            {text:"M.M. Keeravani", correct: true},
            {text:"Mani Sharma", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score=0;


function QUIZ(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
 function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " +currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
 }

 function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });
     nextButton.style.display = "block";
 }
 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
 }

 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
 }

 nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();

    }else{
        QUIZ();
    }
 });

 QUIZ();