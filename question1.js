// console.log("asddcfsd");

import chalk from 'chalk';

let str = "pabab";
function expandFromCentre (left,right,str) {
    while(left >=0 && right<str.length){
        if(str[left] !== str[right]) break;
        left--;
        right++;
    }
    return [left+1,right];
}


function App  (str){
     let max = [0,1];
    for(let i=0; i<str.length;i++){
        let even = expandFromCentre(i-1,i,str);
        let odd = expandFromCentre(i-1,i+1,str);
        let maxVal = odd[1] - odd[0] > even[1] - even[0]? odd:even;
        max = max[1] - max[0] > maxVal[1] - maxVal[0] ? max:maxVal;
        //console.log(length);
    
    }
    return str.slice(max[0], max[1]);
};




function finalSubStr(){
    let newVal = App(str);
    console.log(chalk.yellow("Longest palindrome is: ") + chalk.green(newVal));
}
finalSubStr();