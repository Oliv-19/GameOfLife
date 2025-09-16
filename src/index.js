import Board from "./Board";
import "./style.css";
(function init(){
    const startBtn = document.querySelector('.start')
    const stopBtn = document.querySelector('.stop')
    const grid = document.querySelector('.grid')
    const boardInstance = new Board()
    let board= boardInstance.randomState(Math.floor(grid.clientWidth*0.08), Math.floor(grid.clientHeight*0.07))
    let stop=false
    stopBtn.addEventListener('click', ()=>{
        stop=true
    })   
    startBtn.addEventListener('click', ()=>{
        let str = boardInstance.render(board)
        grid.innerHTML= str
        let interval = setInterval(() => {
            board= boardInstance.nextBoardState(board)
            str = boardInstance.render(board)
            grid.innerHTML= str
            if(stop== true){
                stop= false
                clearInterval(interval)
            }
        }, 500);

    })

})()