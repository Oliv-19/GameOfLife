import Board from "./Board";
import "./style.css";
(function init(){
    const startBtn = document.querySelector('.start')
    const stopBtn = document.querySelector('.stop')
    const restartBtn = document.querySelector('.restart')
    const grid = document.querySelector('.grid')
    const boardInstance = new Board()
    let board= boardInstance.randomState(Math.floor(grid.clientWidth*0.08), Math.floor(grid.clientHeight*0.07))
    let stop=false
    let interval 
    function runGame(){
        startBtn.removeEventListener('click', runGame)
        grid.style.width= 'fit-content'
        grid.style.height= 'fit-content'
        let str = boardInstance.render(board)
        grid.innerHTML= str
        interval = setInterval(() => {
            board= boardInstance.nextBoardState(board)
            str = boardInstance.render(board)
            grid.innerHTML= str
            // if(stop== true){
            //     stop= false
            //     clearInterval(interval)
            // }
        }, 500);
    }
    stopBtn.addEventListener('click', ()=>{
        stop=true
        if(stop== true){
            stop= false
            clearInterval(interval)
            startBtn.addEventListener('click', runGame)
        }
    })   
    startBtn.addEventListener('click', runGame)
    restartBtn.addEventListener('click', ()=>{
        board= boardInstance.randomState(Math.floor(grid.clientWidth*0.08), Math.floor(grid.clientHeight*0.07))
        stop= false
        clearInterval(interval)
        runGame()
    })
})()