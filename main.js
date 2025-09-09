/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\nclass Board{\r\n    constructor() {\r\n    }\r\n    deadState(width, height){\r\n        let board_state= []\r\n        for (let i = 0; i < height; i++) {\r\n            let arrayX=[]\r\n            for (let j = 0; j < width; j++) {\r\n                arrayX.push(0)\r\n            }\r\n            board_state.push(arrayX)\r\n        }\r\n        return board_state\r\n    }\r\n    randomState(width, height){\r\n        let state= this.deadState(width, height)\r\n        for (let i = 0; i < state.length; i++) {\r\n            for (let j = 0; j < state[i].length; j++) {\r\n                let rd= Math.round(Math.random())\r\n                if(rd== 1){\r\n                    state[i][j] = rd\r\n                }\r\n            }\r\n        }\r\n        return state\r\n    }\r\n    render(board_state){\r\n        let resultStr=''\r\n        let firstLine= '_ '.repeat(board_state[0].length+2)+'\\n'\r\n        resultStr+= firstLine\r\n        for (let i = 0; i < board_state.length; i++) {\r\n            let row= board_state[i]\r\n            resultStr+= '| '\r\n            for (let j = 0; j < row.length; j++) {\r\n                if( row[j] == 1){\r\n                    resultStr+= '# '\r\n                }else{\r\n                    resultStr+= '° '\r\n                }\r\n            }\r\n            resultStr+= '|\\n'\r\n        }\r\n        resultStr+= firstLine\r\n        return console.log(resultStr)\r\n    }\r\n    isDead(board_state, cellCol, cellRow){\r\n        let arr=[\r\n            [cellRow, cellCol+1], \r\n            [cellRow+1, cellCol+1],\r\n            [cellRow+1, cellCol],\r\n            [cellRow+1, cellCol-1],\r\n            [cellRow, cellCol-1],\r\n            [cellRow-1, cellCol-1],\r\n            [cellRow-1, cellCol],\r\n            [cellRow-1, cellCol+1]\r\n        ]\r\n        let count= 0\r\n        let result= board_state[cellRow][cellCol]\r\n        arr.forEach((coord)=>{\r\n            if(board_state[coord[0]] !=undefined && board_state[coord[0]][coord[1]] != undefined){\r\n                if(board_state[coord[0]][coord[1]] == 1){\r\n                    count +=1\r\n                }\r\n            }\r\n        })\r\n        \r\n        if(board_state[cellRow][cellCol] == 1){\r\n            if(count==2 || count == 3){\r\n                result = 1 \r\n            }else{\r\n                result=0\r\n            }\r\n        }else{\r\n            if(count==3){\r\n                result= 1\r\n                \r\n            }\r\n        }\r\n        return result\r\n    }\r\n    nextBoardState(board_state){\r\n        let newBoard=this.deadState(board_state[0].length, board_state.length)\r\n        for (let i = 0; i < board_state.length; i++) {\r\n            \r\n            for (let j = 0; j < board_state[i].length; j++) {\r\n                newBoard[i][j]= this.isDead(board_state, j, i)\r\n                \r\n            }\r\n        }\r\n        \r\n        return this.render(this.nextBoardState(newBoard))\r\n    }\r\n    Init(){\r\n        let firstBoard= this.randomState(3, 3)\r\n        this.render(this.nextBoardState(firstBoard))\r\n        // for (let i = 0; i < 10; i++) {\r\n        //     firstBoard= this.nextBoardState(firstBoard)\r\n        //     this.render(firstBoard)\r\n        // }\r\n    }\r\n}\r\n\r\n const boardInstance= new Board()\r\n boardInstance.Init()\r\n// let random= boardInstance.randomState(6,6)\r\n// console.table(boardInstance.render(random))\r\n// let next= boardInstance.nextBoardState(random)\r\n// //console.table(boardInstance.render(boardInstance.randomState(6,6)))\r\n// console.table(boardInstance.render(next))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdCQUF3QjtBQUNoRDtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3QkFBd0I7QUFDaEQ7QUFDQSw0QkFBNEIsMkJBQTJCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lb2ZsaWZlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9hcmR7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuICAgIGRlYWRTdGF0ZSh3aWR0aCwgaGVpZ2h0KXtcclxuICAgICAgICBsZXQgYm9hcmRfc3RhdGU9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlYPVtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd2lkdGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYXJyYXlYLnB1c2goMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2FyZF9zdGF0ZS5wdXNoKGFycmF5WClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkX3N0YXRlXHJcbiAgICB9XHJcbiAgICByYW5kb21TdGF0ZSh3aWR0aCwgaGVpZ2h0KXtcclxuICAgICAgICBsZXQgc3RhdGU9IHRoaXMuZGVhZFN0YXRlKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN0YXRlW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmQ9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSlcclxuICAgICAgICAgICAgICAgIGlmKHJkPT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVbaV1bal0gPSByZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKGJvYXJkX3N0YXRlKXtcclxuICAgICAgICBsZXQgcmVzdWx0U3RyPScnXHJcbiAgICAgICAgbGV0IGZpcnN0TGluZT0gJ18gJy5yZXBlYXQoYm9hcmRfc3RhdGVbMF0ubGVuZ3RoKzIpKydcXG4nXHJcbiAgICAgICAgcmVzdWx0U3RyKz0gZmlyc3RMaW5lXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZF9zdGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm93PSBib2FyZF9zdGF0ZVtpXVxyXG4gICAgICAgICAgICByZXN1bHRTdHIrPSAnfCAnXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiggcm93W2pdID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cis9ICcjICdcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFN0cis9ICfCsCAnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0U3RyKz0gJ3xcXG4nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdFN0cis9IGZpcnN0TGluZVxyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhyZXN1bHRTdHIpXHJcbiAgICB9XHJcbiAgICBpc0RlYWQoYm9hcmRfc3RhdGUsIGNlbGxDb2wsIGNlbGxSb3cpe1xyXG4gICAgICAgIGxldCBhcnI9W1xyXG4gICAgICAgICAgICBbY2VsbFJvdywgY2VsbENvbCsxXSwgXHJcbiAgICAgICAgICAgIFtjZWxsUm93KzEsIGNlbGxDb2wrMV0sXHJcbiAgICAgICAgICAgIFtjZWxsUm93KzEsIGNlbGxDb2xdLFxyXG4gICAgICAgICAgICBbY2VsbFJvdysxLCBjZWxsQ29sLTFdLFxyXG4gICAgICAgICAgICBbY2VsbFJvdywgY2VsbENvbC0xXSxcclxuICAgICAgICAgICAgW2NlbGxSb3ctMSwgY2VsbENvbC0xXSxcclxuICAgICAgICAgICAgW2NlbGxSb3ctMSwgY2VsbENvbF0sXHJcbiAgICAgICAgICAgIFtjZWxsUm93LTEsIGNlbGxDb2wrMV1cclxuICAgICAgICBdXHJcbiAgICAgICAgbGV0IGNvdW50PSAwXHJcbiAgICAgICAgbGV0IHJlc3VsdD0gYm9hcmRfc3RhdGVbY2VsbFJvd11bY2VsbENvbF1cclxuICAgICAgICBhcnIuZm9yRWFjaCgoY29vcmQpPT57XHJcbiAgICAgICAgICAgIGlmKGJvYXJkX3N0YXRlW2Nvb3JkWzBdXSAhPXVuZGVmaW5lZCAmJiBib2FyZF9zdGF0ZVtjb29yZFswXV1bY29vcmRbMV1dICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBpZihib2FyZF9zdGF0ZVtjb29yZFswXV1bY29vcmRbMV1dID09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ICs9MVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBpZihib2FyZF9zdGF0ZVtjZWxsUm93XVtjZWxsQ29sXSA9PSAxKXtcclxuICAgICAgICAgICAgaWYoY291bnQ9PTIgfHwgY291bnQgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAxIFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJlc3VsdD0wXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoY291bnQ9PTMpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0PSAxXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0XHJcbiAgICB9XHJcbiAgICBuZXh0Qm9hcmRTdGF0ZShib2FyZF9zdGF0ZSl7XHJcbiAgICAgICAgbGV0IG5ld0JvYXJkPXRoaXMuZGVhZFN0YXRlKGJvYXJkX3N0YXRlWzBdLmxlbmd0aCwgYm9hcmRfc3RhdGUubGVuZ3RoKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRfc3RhdGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYm9hcmRfc3RhdGVbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld0JvYXJkW2ldW2pdPSB0aGlzLmlzRGVhZChib2FyZF9zdGF0ZSwgaiwgaSlcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLm5leHRCb2FyZFN0YXRlKG5ld0JvYXJkKSlcclxuICAgIH1cclxuICAgIEluaXQoKXtcclxuICAgICAgICBsZXQgZmlyc3RCb2FyZD0gdGhpcy5yYW5kb21TdGF0ZSgzLCAzKVxyXG4gICAgICAgIHRoaXMucmVuZGVyKHRoaXMubmV4dEJvYXJkU3RhdGUoZmlyc3RCb2FyZCkpXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGZpcnN0Qm9hcmQ9IHRoaXMubmV4dEJvYXJkU3RhdGUoZmlyc3RCb2FyZClcclxuICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXIoZmlyc3RCb2FyZClcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiBjb25zdCBib2FyZEluc3RhbmNlPSBuZXcgQm9hcmQoKVxyXG4gYm9hcmRJbnN0YW5jZS5Jbml0KClcclxuLy8gbGV0IHJhbmRvbT0gYm9hcmRJbnN0YW5jZS5yYW5kb21TdGF0ZSg2LDYpXHJcbi8vIGNvbnNvbGUudGFibGUoYm9hcmRJbnN0YW5jZS5yZW5kZXIocmFuZG9tKSlcclxuLy8gbGV0IG5leHQ9IGJvYXJkSW5zdGFuY2UubmV4dEJvYXJkU3RhdGUocmFuZG9tKVxyXG4vLyAvL2NvbnNvbGUudGFibGUoYm9hcmRJbnN0YW5jZS5yZW5kZXIoYm9hcmRJbnN0YW5jZS5yYW5kb21TdGF0ZSg2LDYpKSlcclxuLy8gY29uc29sZS50YWJsZShib2FyZEluc3RhbmNlLnJlbmRlcihuZXh0KSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;