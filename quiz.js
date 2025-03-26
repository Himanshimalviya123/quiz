const questions=[
    {
        question:-"where is it situated in kanha kisli national park?",
        answer:[
            { text:"madhya-pradesh",correct:"true"},
            { text:"uttrakhand",correct:"false"},
            { text:"manipuram",correct:"false"},
            { text:"uttarpradesh",correct:"false"},
        ]
    },
    {
        question:-"which is the largest animal inthe world?",
        answer:[
            { text:"lion",correct:"false"},
            { text:" shark",correct:"false"},
            { text:"blue-whale",correct:"true"},
            { text:"starfish",correct:"false"},
        ]
    }
]
let questionElement=document.querySelector("#question")
let answerbutton=document.getElementsById("answer-buttons")
let nextbutton=document.getElementById("next-btn")

let curentQuestionIndex=0;
let score=0;
function startquiz(){
    curentQuestionIndex=0;
     score=0;
    nextbutton.innerHTML="next"
    showQuestion();
}
function showQuestion(){
    resetState();
  let currentQuestion=questions[curentquestionIndex];
  let questionNo=curentQuestionIndex+1;
  questionElement.innerHTML=questionNo +"." +currentQuestion.Question;
 
 
  currentQuestion.answer.forEach(answer=>{
    const button =document.createElement("button");
    button.innerHTML=answer.text;
button.classList.add("btn");
answerbuttons.appendChild(button);
if(answer.correct)
{
    button.dataset.correct =answer.correct;
}
button.addEventListener("click",selectAnswer);
})
}
showQuestion();
function resetState(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild)}
    
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const iscorrect=selectedBtn.dataset.correct==="true";
    if(iscorrect)
    {
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
}
Array.from(answerbutton.children).forEach(button=>{
    if(button.dataset.correct==="true")
    {
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextbutton.style.display="block";
}
nextbutton.addEventListener("click",(questions.length)
{if(curr
{
    handleNextButton();
}
})



startquiz()