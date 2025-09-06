export default class Board{
    constructor() {
    }
    deadState(width, height){
        let board_state= []
        for (let i = 0; i < height; i++) {
            let arrayX=[]
            for (let j = 0; j < width; j++) {
                arrayX.push(0)
            }
            board_state.push(arrayX)
        }
        return board_state
    }
    randomState(width, height){
        let state= this.deadState(width, height)
        for (let i = 0; i < state.length; i++) {
            for (let j = 0; j < state[i].length; j++) {
                let rd= Math.round(Math.random())
                if(rd== 1){
                    state[i][j] = rd
                }
            }
        }
        return state
    }
    render(board_state){
        let resultStr=''
        let firstLine= '_ '.repeat(board_state[0].length+2)+'\n'
        resultStr+= firstLine
        for (let i = 0; i < board_state.length; i++) {
            let row= board_state[i]
            resultStr+= '| '
            for (let j = 0; j < row.length; j++) {
                if( row[j] == 1){
                    resultStr+= '# '
                }else{
                    resultStr+= '° '
                }
            }
            resultStr+= '|\n'
        }
        resultStr+= firstLine
        return resultStr
    }
    isDead(board_state, cellCol, cellRow){
        let arr=[
            [cellRow, cellCol+1], 
            [cellRow+1, cellCol+1],
            [cellRow+1, cellCol],
            [cellRow+1, cellCol-1],
            [cellRow, cellCol-1],
            [cellRow-1, cellCol-1],
            [cellRow-1, cellCol],
            [cellRow-1, cellCol+1]
        ]
        let count= 0
        let result= board_state[cellRow][cellCol]
        arr.forEach((coord)=>{
            if(board_state[coord[0]] !=undefined && board_state[coord[0]][coord[1]] != undefined){
                //console.log(board_state[coord[0]][coord[1]])
                if(board_state[coord[0]][coord[1]] == 1){
                    count +=1
                }
            }
        })
        console.log(count)
        if(board_state[cellRow][cellCol] == 1){
            if(count==2 || count == 3){
                result = 1 
            }else{
                result=0
            }
        }else{
            if(count==3){
                result= 1
                
            }
        }
        return result
    }
    nextBoardState(board_state){
        //console.table(board_state)
        for (let i = 0; i < board_state.length; i++) {
            for (let j = 0; j < board_state[i].length; j++) {
                //console.log(board_state[i][j])
                board_state[i][j] = this.isDead(board_state, j, i)
                //console.log(board_state[i][j])
                
            }
            
        }
        
        //console.table(board_state)
        return board_state
    }
}
const boardInstance= new Board()
let random= boardInstance.randomState(6,6)
console.table(boardInstance.render(random))
let next= boardInstance.nextBoardState(random)
//console.table(boardInstance.render(boardInstance.randomState(6,6)))
console.table(boardInstance.render(next))