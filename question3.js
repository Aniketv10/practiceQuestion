// let app = "data";
// var newData = app.split("").reverse().join("");
// console.log(newData);
// console.log(Date());

// function App (){

// }
// var data = "aniket vishwakarma";
// var newData = data.split("").reverse().join("")
// console.log(newData);
import chalk from 'chalk';


let board = [["5","3",".",".","7",".",".",".","."]
            ,["6",".",".","1","9","5",".",".","."]
            ,[".","9","8",".",".",".",".","6","."]
            ,["8",".",".",".","6",".",".",".","3"]
            ,["4",".",".","8",".","3",".",".","1"]
            ,["7",".",".",".","2",".",".",".","6"]
            ,[".","6",".",".",".",".","2","8","."]
            ,[".",".",".","4","1","9",".",".","5"]
            ,[".",".",".",".","8",".",".","7","9"]];
// var newVar =board;

//var outputVal = [];

function App () {
//console.log(board.length);
const rows =  [];
const cols =  [];
const blocks =  [];
// var test = board.length;
// console.log(test);

for(let i = 0; i < board.length; i++) {
        rows.push(new Set());
        cols.push(new Set());
        blocks.push(new Set());
    }
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            const cell = board[i][j];
            if(cell === '.') continue;
            const boxNum = 3*Math.floor(i/3)+Math.floor(j/3);
            // console.log(boxNum);
            if(rows[i].has(cell) || cols[j].has(cell) || blocks[boxNum].has(cell)) return false;
            rows[i].add(cell);
            cols[j].add(cell);
            blocks[boxNum].add(cell);
        }
    }
    return true;
}
function newApp() {
var data = App();
 console.log(chalk.yellow("Output:")+ chalk.green(data));
    
}
newApp();

