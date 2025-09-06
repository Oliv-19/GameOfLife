import { describe } from "jest";
import Board from "../src";

describe('Board tests',()=>{
    const boardInstance= new Board()
    test('Get random state of board', () => {
      expect(boardInstance.randomState(2,2)).toHaveLength(2);
    });

})
