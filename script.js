"use strict";
const inputSon = document.getElementById("sonaccountinput");
const inputMother = document.getElementById("motheraccountinput");
const formSon = document.getElementById("sonaccount");
const formMother = document.getElementById("motheraccount");
const listSon = document.getElementById("sonlist");
const listMother = document.getElementById("motherlist");
const sonBalanceNumber = document.getElementById("sonbalancenumber");
const motherBalanceNumber = document.getElementById("motherbalancenumber");
const depositSonButton = document.getElementById("depositson");
const drawSonButton = document.getElementById("drawson");
const depositMotherButton = document.getElementById("depositmother");
const drawMotherButton = document.getElementById("drawmother");
const sonInterestNumber = document.getElementById("soninterestnumber");
const motherInterestNumber = document.getElementById("motherinterestnumber");
let balanceSonInit = 0;
let interestSonInit = 0;
let balanceMotherInit = 0;
let interestMotherInit = 0;
formSon.addEventListener("submit", (e) => {
    e.preventDefault();
    //prendiamo i valori dell'input area
    const sonInputValue = parseFloat(inputSon.value);
});
formMother.addEventListener("submit", (e) => {
    e.preventDefault();
    //prendiamo i valori dell'input area
    const motherInputValue = parseFloat(inputMother.value);
});
// Aggiungi un event listener per il pulsante di deposito
function deposit(accountType, amount) {
    if (accountType === "son") {
        balanceSonInit += amount;
        interestSonInit = balanceSonInit + (balanceSonInit * 0.1);
        updateSonBalance();
        updateSonInterest();
    }
    else if (accountType === "mother") {
        balanceMotherInit += amount;
        interestMotherInit = balanceMotherInit + (balanceMotherInit * 0.1);
        updateMotherBalance();
        updateMotherInterest();
    }
}
function withdraw(accountType, amount) {
    if (accountType === "son") {
        balanceSonInit -= amount;
        interestSonInit = balanceSonInit + (balanceSonInit * 0.1);
        updateSonBalance();
        updateSonInterest();
    }
    else if (accountType === "mother") {
        balanceMotherInit -= amount;
        interestMotherInit = balanceMotherInit + (balanceMotherInit * 0.1);
        updateMotherBalance();
        updateMotherInterest();
    }
}
// Event listener per il deposito del figlio
depositSonButton.addEventListener("click", (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(inputSon.value);
    deposit("son", depositAmount);
});
// Event listener per il prelievo del figlio
drawSonButton.addEventListener("click", (e) => {
    e.preventDefault();
    const drawAmount = parseFloat(inputSon.value);
    withdraw("son", drawAmount);
});
// Event listener per il deposito della madre
depositMotherButton.addEventListener("click", (e) => {
    e.preventDefault();
    const depositAmount = parseFloat(inputMother.value);
    deposit("mother", depositAmount);
});
// Event listener per il prelievo della madre
drawMotherButton.addEventListener("click", (e) => {
    e.preventDefault();
    const drawAmount = parseFloat(inputMother.value);
    withdraw("mother", drawAmount);
});
function updateSonBalance() {
    sonBalanceNumber.textContent = balanceSonInit.toString();
}
function updateSonInterest() {
    sonInterestNumber.textContent = interestSonInit.toString();
}
function updateMotherBalance() {
    motherBalanceNumber.textContent = balanceMotherInit.toString();
}
function updateMotherInterest() {
    motherInterestNumber.textContent = interestMotherInit.toString();
}
updateSonBalance();
updateSonInterest();
updateMotherBalance();
updateMotherInterest();
