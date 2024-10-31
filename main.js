import './style.css'

const body=document.querySelector("body")
const DIVS= document.querySelectorAll("div")
const UL=document.querySelector("ul")
const INPUT=document.querySelector("input")
const PTASK=document.querySelector("p")
const SPANTNTASK=document.querySelectorAll("span")[1]
const BUTTON=document.querySelector("button")
let localStorage=window.localStorage;
BUTTON.className="btn-add"


const DIVSCLASSES={
  0:"container",
  1:"search",
  2:"li-container",
  3:"empty",
  4:"task-count"
}

const creatDivs=(divs)=>{
  divs.forEach((elementDiv,index) => {
    elementDiv.className=DIVSCLASSES[index]
  });


}
let cont=0
const borrarPTASK=()=>{
  if(DIVS[3].contains(PTASK)){
    DIVS[3].removeChild(PTASK)
    }
}

const leerStorage=()=>{
  for(let v=0;v<localStorage.length;v++){
    const key = localStorage.key(v);
    console.log(localStorage.getItem(key))
    if(localStorage.getItem(key)!="" ||localStorage.getItem(key)!=null ||localStorage.getItem(key)!=undefined ){
    createLI(localStorage.getItem(v),v)
    borrarPTASK()
    SPANTNTASK.textContent=parseInt(SPANTNTASK.textContent,10)+1
    }
  }
}

const createLI=(value,index)=>{
  const LI=document.createElement("li")
  const span=document.createElement("span")
  const P=document.createElement("p")
  const BUTTONDEL=BUTTON.cloneNode()

  span.textContent=value
  localStorage.setItem(cont,span.textContent)
  cont++
  BUTTONDEL.className="btn-delete"
  BUTTONDEL.textContent="X"
  P.append(span)
  LI.append(P,BUTTONDEL)
  UL.append(LI)

  BUTTONDEL.addEventListener("click",()=>{
  const LIST=document.querySelectorAll("li")
  LIST.forEach((eli)=>{
    if(eli===LI){
      UL.removeChild(LI)
      localStorage.removeItem(index)
      SPANTNTASK.textContent=parseInt(SPANTNTASK.textContent,10)-1
    }
  })
  if(SPANTNTASK.textContent==0){
    DIVS[3].append(PTASK)
  }
  })

  P.addEventListener("click",()=>{
  
    P.firstChild.style.textDecoration=="line-through"?
    P.firstChild.style.textDecoration="":
    P.firstChild.style.textDecoration="line-through"
  })
}

BUTTON.addEventListener("click",(e)=>{
  e.preventDefault()
  if(INPUT.value!=""){
  borrarPTASK()
  createLI(INPUT.value)
  SPANTNTASK.textContent=parseInt(SPANTNTASK.textContent,10)+1
  INPUT.value=""
}
})



creatDivs(DIVS)
leerStorage()
