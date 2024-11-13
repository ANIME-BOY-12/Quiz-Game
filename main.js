let char = document.getElementById("char");
let questionBox = document.getElementById("question");
let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
let o3 = document.getElementById("o3");
let o4 = document.getElementById("o4");

const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");

let ques = document.getElementById("ques");
let score = 0;

let x = null;
let questionBank = null;

const fetchData = async()=>{
    let  url = `https://opentdb.com/api.php?amount=15&category=9&difficulty=medium&type=multiple`;
    const res = await fetch(url);
    // console.log(res);
    questionBank = await res.json();
    console.log(questionBank);

    setTimeout(() => loadQues(questionBank), 100);

    document.getElementById("next").addEventListener("click",()=>moveNext(questionBank));
    document.getElementById("reset").addEventListener("click",()=>resetQues(questionBank));
}

const loadQues = (questionBank)=>{
    x = Math.floor(Math.random() *15);
    ques.innerHTML=questionBank.results[x].question;

    let randomizer = Math.random()*4;
    if(randomizer>0 && randomizer<1){
        o1.innerHTML = questionBank.results[x].incorrect_answers[0];

        o2.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o3.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o4.innerHTML = questionBank.results[x].correct_answer;
    }
    if(randomizer>1 && randomizer<2){
        o1.innerHTML = questionBank.results[x].incorrect_answers[0];

        o2.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o4.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o3.innerHTML = questionBank.results[x].correct_answer;
    }
    if(randomizer>2 && randomizer<3){
        o1.innerHTML = questionBank.results[x].incorrect_answers[0];

        o4.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o3.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o2.innerHTML = questionBank.results[x].correct_answer;
    }
    if(randomizer>3 && randomizer<4){
        o4.innerHTML = questionBank.results[x].incorrect_answers[0];

        o2.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o3.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o1.innerHTML = questionBank.results[x].correct_answer;
    }
    opt1.classList.remove("bg-red-300","bg-green-400");
    opt2.classList.remove("bg-red-300","bg-green-400");
    opt3.classList.remove("bg-red-300","bg-green-400");
    opt4.classList.remove("bg-red-300","bg-green-400");

    opt1.addEventListener("click",()=> checkAnswer1());

    opt2.addEventListener("click",()=> checkAnswer2());

    opt3.addEventListener("click",()=> checkAnswer3());

    opt4.addEventListener("click",()=> checkAnswer4());
    // console.log(x);
   
}

const resetQues = (questionBank)=>{
    score= 0;
    document.getElementById("point").innerHTML=`${score}`
    setTimeout(() => moveNext(questionBank), 100);

}
const moveNext = (questionBank)=>{
    x = Math.floor(Math.random() *15);
    ques.innerHTML=questionBank.results[x].question;

    let randomizer = Math.random()*4;
    if(randomizer>0 && randomizer<1){
        o1.innerHTML = questionBank.results[x].incorrect_answers[0];

        o2.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o3.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o4.innerHTML = questionBank.results[x].correct_answer;
    }
    if(randomizer>1 && randomizer<2){
        o1.innerHTML = questionBank.results[x].incorrect_answers[0];

        o2.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o4.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o3.innerHTML = questionBank.results[x].correct_answer;
    }
    if(randomizer>2 && randomizer<3){
        o1.innerHTML = questionBank.results[x].incorrect_answers[0];

        o4.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o3.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o2.innerHTML = questionBank.results[x].correct_answer;
    }
    if(randomizer>3 && randomizer<4){
        o4.innerHTML = questionBank.results[x].incorrect_answers[0];

        o2.innerHTML = questionBank.results[x].incorrect_answers[1];
    
        o3.innerHTML = questionBank.results[x].incorrect_answers[2];
    
        o1.innerHTML = questionBank.results[x].correct_answer;
    }
    opt1.classList.remove("bg-red-300","bg-green-400");
    opt2.classList.remove("bg-red-300","bg-green-400");
    opt3.classList.remove("bg-red-300","bg-green-400");
    opt4.classList.remove("bg-red-300","bg-green-400");

}
const checkAnswer1 = ()=>{

    let answer = questionBank.results[x].correct_answer;

    if(o1.innerHTML == answer){
        opt1.classList.add("bg-green-400");
        opt2.classList.add("bg-red-300");
        opt3.classList.add("bg-red-300");
        opt4.classList.add("bg-red-300");
        score=score+4;
        document.getElementById("point").innerHTML=`${score}`;
        if(char.src.includes("/sad.svg") || char.src.includes("/cry.svg")){
            char.svg = "./images/char2.svg"
        }
    }else{
        opt1.classList.add("bg-red-300");
        score=score-2;
        document.getElementById("point").innerHTML=`${score}`  
    }

    if(score >0){
        clearInterval(change);
        setInterval(charChange,600);
    }else{
        clearInterval(change);
        char.src = "./images/sad.svg";
    }
}
const checkAnswer2 = ()=>{

    let answer = questionBank.results[x].correct_answer;
    if(o2.innerHTML == answer){
        opt1.classList.add("bg-red-300");
        opt2.classList.add("bg-green-400");
        opt3.classList.add("bg-red-300");
        opt4.classList.add("bg-red-300");
        score=score+4;
        document.getElementById("point").innerHTML=`${score}`;
        clearInterval(change2);
        setInterval(charChange,600)
    }else{
        opt2.classList.add("bg-red-300");
        score=score-2;
        document.getElementById("point").innerHTML=`${score}`  
        char.src = "./images/cry.svg";
    }
}
const checkAnswer3 = ()=>{

    let answer = questionBank.results[x].correct_answer;

    if(o3.innerHTML == answer){
        opt1.classList.add("bg-red-300");
        opt2.classList.add("bg-red-300");
        opt3.classList.add("bg-green-400");
        opt4.classList.add("bg-red-300");
        score=score+4;
        document.getElementById("point").innerHTML=`${score}`;
        clearInterval(change2);
        setInterval(charChange,600)
    }else{
        opt3.classList.add("bg-red-300");
        score=score-2;
        document.getElementById("point").innerHTML=`${score}`  
        char.src = "./images/cry.svg";
    }
}
const checkAnswer4 = ()=>{

    let answer = questionBank.results[x].correct_answer;

    if(o4.innerHTML == answer){
        opt1.classList.add("bg-red-300");
        opt2.classList.add("bg-red-300");
        opt3.classList.add("bg-red-300");
        opt4.classList.add("bg-green-400");
        score=score+4;
        document.getElementById("point").innerHTML=`${score}`;

    }else{
        opt4.classList.add("bg-red-300");
        score=score-2;
        document.getElementById("point").innerHTML=`${score}`;
        char.src = "./images/cry.svg";
    }
}

function charChange(){
    
    if(char.src.includes("/char.svg")){
        char.src = "./images/char2.svg";
    }
    else{
        char.src = "./images/char.svg";
    }
}

function charChange2(){
    
}

function questionAppear(){
    if(questionBox.classList.contains("hidden")){
        questionBox.classList.remove("hidden");
        questionBox.classList.add("block");
    }
    else if(questionBox.classList.contains("block")){
        questionBox.classList.remove("block");
        questionBox.classList.add("hidden");
    }
}

setTimeout(questionAppear, 5000);
let change =setInterval(charChange, 600);
// questionAppear();
setTimeout(fetchData,100);

