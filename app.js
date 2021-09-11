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

var returnCash;

function ClickEventHandler(){
    returnCash = cashGiven.value - billAmount.value;
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


btnCheck.addEventListener("click", ClickEventHandler);