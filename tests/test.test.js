import Board from "../src";

describe('Board tests',()=>{
    const boardInstance= new Board()
    test('Get random state of board', () => {
      expect(boardInstance.randomState(2,2)).toHaveLength(2);
    });
    test('Dead cells with no live neighbors stay dead', ()=>{
      const deadBoard= boardInstance.deadState(4,4)
      expect(boardInstance.nextBoardState(deadBoard)).toEqual(deadBoard)
    })
    test('Revive dead cells with 3 live neighbors and live cell stay alive with 2 live neighbors', ()=>{
      let deadBoard= boardInstance.deadState(3,3)
      deadBoard[0][1]= 1
      deadBoard[1][0]= 1
      deadBoard[1][1]= 1
      const expected= [[1,1,0],[1,1,0], [0,0,0]]
      expect(boardInstance.nextBoardState(deadBoard)).toEqual(expected)
    })
    test('kill live cell with more than 3 live neighbors', ()=>{
      let deadBoard= boardInstance.deadState(3,3)
      deadBoard[0][0]= 1
      deadBoard[0][1]= 1
      deadBoard[1][0]= 1
      deadBoard[1][1]= 1
      deadBoard[1][2]= 1
      // const expected= [
      //   [1,1,0],
      //   [1,1,1], 
      //   [0,0,0]
      // ]
      const expected= [
        [1,0,1],
        [1,0,1], 
        [0,1,0]
      ]
      expect(boardInstance.nextBoardState(deadBoard)).toEqual(expected)
    })
    test('kill live cell with less than 2 live neighbors', ()=>{
      let deadBoard= boardInstance.deadState(3,3)
      deadBoard[0][0]= 1
      deadBoard[0][1]= 1
      const expected= [
        [0,0,0],
        [0,0,0], 
        [0,0,0]
      ]
      expect(boardInstance.nextBoardState(deadBoard)).toEqual(expected)
    })

})
