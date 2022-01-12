var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var btnCheck = document.querySelector("#btnCheck");
var twoThousand = document.querySelector("#twoThousand");
var fiveHundred = document.querySelector("#fiveHundred");
var oneHundred = document.querySelector("#oneHundred");
var twenty = document.querySelector("#twenty");
var ten = document.querySelector("#ten");
var five = document.querySelector("#five");
var one = document.querySelector("#one");
var output = document.querySelector("#output");

cashGiven.disabled = true;

billAmount.onkeydown = (e) => {
   if(billAmount.value===""){
        if(!((e.keyCode > 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
            return false;
        }
    }
    else {
        if(!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
            return false;
        }
    }
    cashGiven.disabled=false;
}

cashGiven.onkeydown = (e) => {
   if(cashGiven.value===""){
        if(!((e.keyCode > 96 && e.keyCode < 106) || (e.keyCode > 48 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
            return false;
        }
    }
    else {
        if(!((e.keyCode > 95 && e.keyCode < 106) || (e.keyCode > 47 && e.keyCode < 58)  || e.keyCode == 8 || e.keyCode == 9)) {
            return false;
        }
    }
}

var returnCash;
twoThousand.innerText = "--";
fiveHundred.innerText = "--";
oneHundred.innerText = "--";
twenty.innerText = "--";
ten.innerText = "--";
five.innerText = "--";
one.innerText = "--";


function ClickEventHandler(){
    if(billAmount.value === ""){
        output.innerText = "Please enter every field";
        output.style.color ="red";
        billAmount.focus();
    }
    else if(cashGiven.value === ""){
        output.innerText = "Please enter every field";
        output.style.color ="red";
        cashGiven.focus();
    }
    else{
        output.style.color = "black";
        document.querySelectorAll("input").forEach((element) => { element.disabled = true; });
        returnCash = cashGiven.value - billAmount.value;
        if(returnCash < 0){
            output.innerHTML = "Cash Given is less than the bill amount.<br> Amount still required: Rs. <b>" +  Math.abs(returnCash) + "</b>.";
        }
        else if(returnCash === 0) {
            output.innerText = "No change is required to be given. Customer has given required amount of money.";
        }
        else{
            output.innerHTML = "";
            var flag= true;
            
            while(flag){
                if(returnCash===0){
                    flag=false;
                    break;
                }
                else {
                    if(returnCash >= 2000){
                        twoThousand.innerText = Math.floor(returnCash / 2000) ;
                        returnCash = returnCash % 2000 ;
                        continue;
                    }
                    else if(returnCash >= 500) {
                        fiveHundred.innerText = Math.floor(returnCash / 500);
                        returnCash = returnCash % 500;
                        continue;
                    }
                    else if(returnCash >= 100) {
                        oneHundred.innerText = Math.floor(returnCash / 100);
                        returnCash = returnCash % 100;
                        continue;
                    }
                    else if(returnCash >= 20) {
                        twenty.innerText = Math.floor(returnCash / 20);
                        returnCash = returnCash % 20;
                        continue;
                    }
                    else if(returnCash >= 10) {
                        ten.innerText = Math.floor(returnCash / 10);
                        returnCash = returnCash % 10;
                        continue;
                    }
                    else if(returnCash >= 5) {
                        five.innerText = Math.floor(returnCash / 5);
                        returnCash = returnCash % 5;
                        continue;
                    }
                    else if(returnCash >= 1) {
                        one.innerText = Math.floor(returnCash / 1);
                        returnCash = returnCash % 1;
                    }
                }
            }
        }
    } 
}


btnCheck.addEventListener("click", ClickEventHandler);
