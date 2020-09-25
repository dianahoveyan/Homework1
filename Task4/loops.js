//Task1

//let my_text = prompt("enter a text");
//let revert_text = " ";
//for (i = my_text.length - 1; i >= 0; i--) {
  //  revert_text += my_text[i];
//};
//console.log ("the revert text is" + revert_text);

//Task2 with loops

let numb1 = parseInt(prompt("enter number 1"));
let numb2 = parseInt(prompt("enter number 2"));

let min_value = numb1>numb2 ? numb2 : numb1;
let max_value = numb1>numb2 ? numb1 : numb2;
let min = 0;
let max = 0;

for (let i = min_value; i <= max_value; i++){
    var k = 0;
    for (let j = 1; j <i; j++){
        if (i % j !== 0);
        k++;
    }
}
if (i -2 ==k){
    min = i;
    break;
}

for (let i= max_value;i >=min_value; --i){
    var k = 0;
    for (let j =2; j < i; j++){
        if (i % j !==0)
        k++;
    }
}
if (max == 0 && min==0){
    console.log("there is no prime number");
} else {
    console.log(min);
    console.log(max);
}

