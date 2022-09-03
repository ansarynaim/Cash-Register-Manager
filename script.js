const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkbutton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const Notes = [2000, 500, 100, 20, 10, 5, 1];

checkbutton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned)
        } else {
            showMessage("Majak na kar bhai aur paise de!!")
        }
    } else{
        showMessage("Invalid Bill Amount")
    }
} );

function calculateChange(amountToBeReturned){
    for(let i = 0; i < Notes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/Notes[i]
            );
            amountToBeReturned = amountToBeReturned % Notes[i]
            noOfNotes[i].innerText = numberOfNotes
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}
