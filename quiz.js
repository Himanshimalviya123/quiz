const question1 =[
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
let questionElement=document.querySelector("question")
let answerbutton=document.getElementsByClassName("buttons")
let nextbutton=document.getElementById("btn1")

let curentindex=0;
let score=0;
function start(){
    curentquestionindex=0;
     score=0;
    btn1.innerHTML="next"
    showquestion();
}
function showquestion(){
  let currentquestion=question1[curentquestionindex];
  let questionno=curentquestionindex+1;
  questionElement.innerHTML=questionno +"." +curentindex.question1;
}
let enter=()=>{
if(btn=="madhyapradesh")
{
    alert("yes")
}
else(btn!="madhyapradesh")
{
    alert("no")
}
}