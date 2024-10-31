import './style.css'

const body=document.querySelector("body")
const DIVS= document.querySelectorAll("div")

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

console.log(DIVS)
creatDivs(DIVS)
