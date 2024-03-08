let buttons = document.querySelectorAll('#calc-button');
let display = document.querySelector('.content').innerText;
let operand1 = null;
let operand2 = null;
let operator = null;

function updatedisplay(display){
    document.querySelector('.content').innerText = display;
}




buttons.forEach((button) => {
    button.addEventListener('click',() => {  
        let value = button.getAttribute('data-value');
        if((parseInt(value)>=0 && parseInt(value)<=9||(value === "."))){
            if(display!="Infinity"){
                display += value;
            } else {
                display = "";
            }
            updatedisplay(display);
        } else if(value === "Ac"){
            display ="";
            updatedisplay(display);
        } else if(value === "BSP"){
            if(display!= ""){
            display = display.substr(0,display.length - 1);
            updatedisplay(display);
            }
        } else if(value === "+/-"){
            if(display!= ""){
            display = parseInt(display)*-1;
            updatedisplay(display);
            }
        }else if(value === "+" || value === "-" || value === "/" || value === "x"){
            operand1 = display;
            operator = value;
            display = "";
            updatedisplay(display);
        }else if(value === "="){
            operand2 = display;
            let result = eval(operand1+" "+operator+" "+operand2);
            display = result;
            updatedisplay(display);
            
        }
    });
    
});
        
