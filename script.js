const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.info-btn exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.info-btn continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');

 
// startBtn.onclick = ()=>{
//     popupInfo.classList.add('active');
//     main.classList.add('active');
// }
let start=()=>{
    popupInfo.classList.add('active');
     main.classList.add('active');
}
let cont= ()=>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBtn.classList.add('active');
}
let exit = ()=>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
// exitBtn.onclick = ()=>{
//     popupInfo.classList.remove('active');
//     main.classList.remove('active');
// }
// continueBtn.onclick = ()=>{
//     quizSection.classList.add('active');
//     popupInfo.classList.remove('active');
//     main.classList.remove('active');
//     quizBtn.classList.add('active');
//     showQuestion(0);
// }
// ==========================================================================
let questioncount=0;
const nextBtn=document.querySelector('.next-btn');
nextBtn.onclick =()=>{
    questioncount++;
    showQuestion(questioncount);

}
const optionList=document.querySelector('.option-list';

)
function showQuestion(index){
    const questionText=document.querySelector('.question-text');
    questionText.textContent=`${questions[index].numb}.${questions[index].question}`
    let optionTag=` <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>`;
    optionList.innerHTML=optionTag;
}


























