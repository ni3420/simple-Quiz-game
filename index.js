const set=[
  {
    "question": "What is the capital of France?",
    "option1": "Berlin",
    "option2": "Madrid",
    "option3": "Paris",
    "option4": "Rome",
    "ans": "Paris"
  },
  {
    "question": "Which planet is known as the Red Planet?",
    "option1": "Earth",
    "option2": "Mars",
    "option3": "Jupiter",
    "option4": "Venus",
    "ans": "Mars"
  },
  {
    "question": "What is 15 + 6?",
    "option1": "19",
    "option2": "20",
    "option3": "21",
    "option4": "22",
    "ans": "21"
  },
  {
    "question": "Who wrote 'Romeo and Juliet'?",
    "option1": "Charles Dickens",
    "option2": "William Shakespeare",
    "option3": "Mark Twain",
    "option4": "Leo Tolstoy",
    "ans": "William Shakespeare"
  },
  {
    "question": "Which gas do plants use during photosynthesis?",
    "option1": "Oxygen",
    "option2": "Carbon Dioxide",
    "option3": "Nitrogen",
    "option4": "Hydrogen",
    "ans": "Carbon Dioxide"
  }
]

const h1=document.getElementById("h1");
const opt1=document.getElementById("opt1");
const opt2=document.getElementById("opt2");
const opt3=document.getElementById("opt3");
const opt4=document.getElementById("opt4");
const button=document.querySelectorAll(".button");
const next=document.querySelector("#next");
const con=document.querySelector(".content");
let inc=0;
let count=0;


function showquestion(){
    
if(inc===5){con.innerHTML="your score"+":"+`${count}`
let btn=document.createElement("button");
btn.innerHTML="reset";
btn.className="btn";
con.appendChild(btn);
btn.onclick=()=>{
window.location.reload();
}

}else{   
h1.innerHTML="Q."+" "+set[inc].question;
opt1.innerHTML=set[inc].option1;
opt2.innerHTML=set[inc].option2;
opt3.innerHTML=set[inc].option3;
opt4.innerHTML=set[inc].option4;
}
}
button.forEach(btn =>{
    
    
    
    btn.addEventListener("click",()=>{
        
        
        if(btn.innerHTML===set[inc].ans)
        {
        
            btn.classList.add("right");
            console.log(btn);
            count++;
            
        }
        else{
            console.log("wrong");
            btn.classList.add("wrong");
        }
        

     button.forEach(b=>{
        console.log(b);
        if(b.innerHTML===set[inc].ans)
        {
            b.classList.add("right")
        }
        b.disabled=true})
        
       console.log(btn); 
    
    });
    
   
});

showquestion();
next.addEventListener("click",()=>{
inc++;

 button.forEach(b=>{
    b.disabled=false;
    b.classList.remove("right","wrong");
 });
showquestion();

console.log()
});



