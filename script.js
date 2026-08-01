const screen=document.getElementById("display");
const buttons=document.querySelectorAll("button");
let currentInput="0";
let firstNumber=null;
let operator=null;
buttons.forEach(function(button)
{
    button.addEventListener("click", function()
    {
        if(button.textContent==="." && currentInput.includes("."))
            return;
        if(currentInput==="0")
            currentInput=button.textContent;
        else
            currentInput+=button.textContent;
        screen.textContent=currentInput;
        
    });
});