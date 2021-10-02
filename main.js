const bill = document.getElementById('input-bill');
const tipBtns = document.querySelectorAll('.tip');
const tipCustom = document.getElementById('input-tip');
const people = document.getElementById('input-people');
const errorMsg = document.querySelector('.error-msg');
const results = document.querySelectorAll('.value');
const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', reset);

let billValue = 0.0; //default value
let tipValue = 0.15; //default value -> 15% button is active
let peopleValue = 1; 

console.log(bill.value);

function validateFloat(s){
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function validateInt(s){
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

const setBillValue = bill.addEventListener('input', () => {
    if (bill.value.includes(',')){
        bill.value = bill.value.replace(',', '.');
    }

    if(!validateFloat(bill.value)){
        bill.value = bill.value.substring(0, bill.value.length-1);
    }

    billValue = parseFloat(bill.value);

    calculateTip();
    console.log(bill.value);
});


tipBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        tipBtns.forEach(btn => {
            //clear active state
            btn.classList.remove('btn-active');
    
            //set active state 
            if(event.target.innerHTML == btn.innerHTML){
                btn.classList.add('btn-active');
                tipValue = parseFloat(btn.innerHTML)/100;
            }
        });
    
        //clear custom tip
        tipCustom.value = '';
    
        calculateTip();
    });
});

tipCustom.addEventListener('input', () => {
    if(!validateInt(tipCustom.value)){
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length-1);
    }
    
    tipValue = parseFloat(tipCustom.value/100);

    //remove active state from buttons
    tipBtns.forEach(btn => {
        btn.classList.remove('btn-active');
    });

    if(tipCustom.value !== ''){
        calculateTip();
    }
});

const setPeopleValue = people.addEventListener('input', () => {
    if(!validateInt(people.value)){
        people.value = people.value.substring(0, people.value.length-1);
    }

    peopleValue = parseFloat(people.value);

    if(peopleValue <= 0){
        errorMsg.classList.add('show-error-msg');
        setTimeout(function(){
            errorMsg.classList.remove('show-error-msg');
        }, 3000);
    }

    calculateTip();
});

function calculateTip(){
    if (peopleValue >=1 ){
        let tipAmount = billValue * tipValue / peopleValue;
        let total = billValue * (tipValue + 1) / peopleValue;
        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML = '$' + total.toFixed(2);
    }
}


//Reset button
function reset(){
    bill.value = '';
    setBillValue();

    tipBtns[2].click();

    people.value = '1';
    setPeopleValue();
}

