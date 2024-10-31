import './style.css'

const body=document.querySelector("body")
const DIVS= document.querySelectorAll("div")
const UL=document.querySelector("ul")
const INPUT=document.querySelector("input")
const PTASK=document.querySelector("p")
const SPANTNTASK=document.querySelectorAll("span")[1]
const BUTTON=document.querySelector("button")

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
const createLI=()=>{
  const LI=document.createElement("li")
  const span=document.createElement("span")
  const P=document.createElement("p")
  const BUTTONDEL=BUTTON.cloneNode()

  span.textContent=INPUT.value
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
      SPANTNTASK.textContent=parseInt(SPANTNTASK.textContent,10)-1
    }
  })
  if(SPANTNTASK.textContent==0){
    DIVS[3].append(PTASK)
  }
  })
}

BUTTON.addEventListener("click",(e)=>{
  e.preventDefault()
  if(DIVS[3].contains(PTASK)){
  DIVS[3].removeChild(PTASK)
  }
  createLI()
  SPANTNTASK.textContent=parseInt(SPANTNTASK.textContent,10)+1
  INPUT.value=""
})



creatDivs(DIVS)
