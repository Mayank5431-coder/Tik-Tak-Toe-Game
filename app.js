let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgamebutton = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".message1");
let msg = document.querySelector("#message");

let turn = true;

const winpatterns = [
  [0 , 1 , 2],
  [0 , 3 , 6],
  [0 , 4 , 8],
  [1 , 4 , 7],
  [2 , 5 , 8],
  [2 , 4 , 6],
  [3 , 4 , 5],
  [6 , 7 , 8]
]

boxes.forEach((box) => {
  box.addEventListener("click",function(){
    console.log("Box was Clicked");
    if(turn){
      box.innerHTML = "O";
      box.style.color = "Red";
      turn = false;
    }
    else{
      box.innerHTML = "X";
      box.style.color = "Blue";
      turn = true;
    }
    box.disabled = true;

    checkwinner();
  })
}
)

const resetgame = () =>{
  turn = true;
  enableboxed();
  msgcontainer.classList.add("hide");
}

const disablebtn = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

const enableboxed = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerHTML = "";
  }
}

const showwinner = (winner) => {
  msg.innerHTML = `Congratulations , Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
}

const checkwinner = () =>{
  for(let pattern of winpatterns){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
      if(pos1 === pos2 && pos2 === pos3){
        disablebtn();
        console.log("Winner Found -> ",pos1);
        showwinner(pos1);
      }
    }
  }
}

newgamebutton.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
