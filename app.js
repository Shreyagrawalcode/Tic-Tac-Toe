let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgamebtn = document.querySelector(".new-game");
let msgContainer = document.querySelector(".msg-container");
let msgmsg = document.querySelector(".msg");


let turn = true ;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetBtnn =() => {
    turn = true;
    enableboxes();
    msgContainer.classList.add("hide");


}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       
        
        if (turn ===true) {
            box.innerText = "X";
            turn = false;
        }
        else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;

        checkWinner();

    });
    
});




const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
}


const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    
    msgContainer.classList.remove("hide");
    disableboxes();
    // box.disabled = true;

}

const checkWinner =() => {
    for (let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner",pos1val);
                showWinner (pos1val);
                if (turn ===true)
                {
                    msgmsg.innerText = "congratulation the winner is O "  ; 
                    // turn.disabled = true;

                }
                if (turn ===false)
                    {
                        msgmsg.innerText = "congratulation the winner is X "  ;
                        // turn.disabled = true;
                    }
                  ;
            }

        }
    }
};

newgamebtn.addEventListener ("click" , resetBtnn);
resetBtn.addEventListener ("click" , resetBtnn);


