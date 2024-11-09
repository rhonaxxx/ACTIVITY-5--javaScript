//FUCTION DISPLAY NAME
 function displayName(name){
    alert("Your Name is "+ name);
    ducument.write("Your Name is"+name);
    console.log("Your Name is"+ name);

 }
 function sumOfTwoNumbers(firstNumber,secondNumber){
    let c = firstNumeber + secondNumber;
    document.write("The sum of two number is "+c);
 }

 function sumOfTwoNumbers(a,b,d){
    let c = a + b;
    documnet.getElementById(d).innerHTML= "The sum is"+c;
 }

function procduct(a,d,c,){
      document .getElementsByClassName(c)[0].innerHTML="The Product is:"+(a*b);
 } 

 function inputTwoNumbers(){
    let num1 = prarsef
 }
 //INPUT TWO NUMBER
 function inputTwoNumbers(){
   let num1=parsefloat(prompt("Enter the first number:"));
   let num2=parsefloat(prompt("Enter the second number:"));
   let sum=num1+num2;
   altert("The sum of the two numbers is:"+sum);   
}
function InputGrade(){
   var name=prompt("Enter your name:");
   let totalscore=parseInt(prompt("Enter your total score:"));
   let totalItem= pareInt(prompt("Enter the total item:"));

   let compute = parseFloat((-4*(totalScore/totalItem)+5).toFixed(2));
   var remarks=checkRemarks(compute);
      return "Hello"+name+",your grade is:"+compute;
}

function checkRemarks(grade){
   var remarks=(grade>3.0)? "Failed":"Passed";
   return remarks;
}
