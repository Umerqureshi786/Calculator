
// Create Calculator 
var firstNumber = parseInt(prompt("Enter first Number"));
var secondNumber = parseInt(prompt("Enter second Number"));
var operator = prompt("Enter operator")

if(operator=="+"){
    alert(firstNumber+secondNumber);
} else if(operator=="-"){
    alert(firstNumber-secondNumber);
} else if (operator=="*"){
    alert(firstNumber*secondNumber);
}else if(operator=="/"){
    alert(firstNumber/secondNumber);
} else{
    alert("Your enter invalid details");
}




