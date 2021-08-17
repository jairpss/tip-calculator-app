let tip, bill, numPeople;

let billInput = document.querySelector('.input-bill');
let peopleInput = document.querySelector('.input-people');
let tipOptions = document.querySelector(".tip-percent-grid").querySelectorAll("label");
let tipCustom  = document.querySelector(".custom");
let resetBtn = document.querySelector("button");

let tipAmount = document.querySelector(".text-tip-amount");
let total = document.querySelector(".text-total");

//Logical operations for the tips
const calculate_tip = (Bill, Tip, PeopleNumber) => {
    let tip1, tip2;
    tip1 = Math.round(((Number(Bill) * (Number(Tip) / 100)) / Number(PeopleNumber)) * 100) / 100;
    tip2 = Math.round(((Number(Bill) / Number(PeopleNumber)) + tip1) * 100) / 100;
    tipAmount.innerText = `$${tip1}`;
    total.innerText = `$${total}`
}

//Reset all radio inputs to false
const radio_inputs = () => {
    document.querySelectorAll("[type='radio']").forEach(elem => elem.checked = false);
}

//Reset button
resetBtn.addEventListener("click", () => {
    bill, tip, numPeople = 0;
    [billInput , peopleInput ,tipCustom].map( elem => elem.value = " ");
    [tipAmount,tolal].map( elem => elem.innerText = "$0.00")
    radio_inputs()
    resetBtn.disabled = true 
});