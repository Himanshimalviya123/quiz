const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.info-btn exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.info-btn continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

 
startBtn.onclick = ()=>{
    popupInfo.classList.add('active');
    main.classList.add('active');
}

//  const start=()=>{
//     popupInfo.classList.add('active');
//      main.classList.add('active');
// }
// const cont= ()=>{
//     quizSection.classList.add('active');
//     popupInfo.classList.remove('active');
//     main.classList.remove('active');
//     quizBtn.classList.add('active');
// }
// const  exit = ()=>{
//     popupInfo.classList.remove('active');
//     main.classList.remove('active');
// }
exitBtn.onclick = ()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = ()=>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBtn.classList.add('active');
    showQuestion(0);
    questioncounter(1);
}
// ==========================================================================
let questioncount=0;
let questionnumb=1;
const nextBtn=document.querySelector('.next-btn');
nextBtn.onclick =()=>{
    if(questioncount< questions.length-1){
        questioncount++;
        showQuestion(questioncount);
        questionnumb++;
        questioncounter(questionnumb);
    
    }
    else{
        console.log('question completed');
        
    }
}
const optionList=document.querySelector('.option-list');


function showQuestion(index){
    const questionText=document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb}.${questions[index].question}`
    let optionTag=` <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML=optionTag;
    const option=document.querySelector('.option');
    for(Let i=0; i <option.length; i++)
    {
        option[i].setAttribute('onclick','optionselected(this)');
    }
}
function optionselected(answer)
{
    let userAnswer=answer.textContent;
    let correctAnswer=questions[questioncount].answer;
    if(userAnswer==correctAnswer)
    {
        console.log('answer is correct');
        answer.classList.add('correct');

        
    }
    else{
        console.log('answer is wrong');
        
    }
}
function questioncounter(index){
    const questionTotal=document.querySelector('.question-tatal')
}
























