document.addEventListener('DOMContentLoaded', ()=>{

    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box)=>{
        box.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    let boxx = event.target.id

    handleMove(boxx);
    updateSquares();
}

function updateSquares(){
    let boxes = document.querySelectorAll(".box");

    boxes.forEach((box)=>{
        let position = box.id;
        let symbol = board[position];

        if(symbol != ''){
            box.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}

function Restartar(){
    let restart = document.getElementById("restart")

    restart.addEventListener('click', ()=>{
        location.reload();
    })
}