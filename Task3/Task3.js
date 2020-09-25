var mytext = prompt("Enter the text with min 5 symbols"));
var number = 0
if (mytext.length < 5){
    alert ("Try again with less symbols")
}
else
{
    switch (mytext.charAt(0)){
        case "a":
        case "e":
        case "u":
        case "i":
        case "o":
            number += 4
            break;
        case "z":
            number += 5
            break;
         default:
            number -= 1   
    }
    switch (mytext.charAt(1)){
        case "a":
        case "e":
        case "u":
        case "i":
        case "o":
            number += 4
            break;
        case "z":
            number += 5
            break;
        default:
            number -= 1
    }
    switch (mytext.charAt(2)){
        case "a":
        case "e":
        case "u":
        case "i":
        case "o":
            number += 4
            break;
        case "z":
            number += 5
            break;
        default:
            number -= 1
    }
    alert ("Your number is " + number);

}  
            