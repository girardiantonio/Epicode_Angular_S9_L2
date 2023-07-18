const inputSon = document.getElementById("sonaccountinput") as HTMLInputElement;
const inputMother = document.getElementById("motheraccountinput") as HTMLInputElement;
const formSon = document.getElementById("sonaccount") as HTMLFormElement;
const formMother = document.getElementById("motheraccount") as HTMLFormElement;
const listSon = document.getElementById("sonlist") as HTMLUListElement;
const listMother = document.getElementById("motherlist") as HTMLUListElement;
const sonBalanceNumber = document.getElementById("sonbalancenumber") as HTMLSpanElement;
const motherBalanceNumber = document.getElementById("motherbalancenumber") as HTMLSpanElement;
const depositSonButton = document.getElementById("depositson") as HTMLButtonElement
const drawSonButton = document.getElementById("drawson") as HTMLButtonElement
const depositMotherButton = document.getElementById("depositmother") as HTMLButtonElement
const drawMotherButton = document.getElementById("drawmother") as HTMLButtonElement
const sonInterestNumber = document.getElementById("soninterestnumber") as HTMLSpanElement;
const motherInterestNumber = document.getElementById("motherinterestnumber") as HTMLSpanElement;


let balanceSonInit: number = 0;
let interestSonInit: number = 0;

let balanceMotherInit: number = 0;
let interestMotherInit: number = 0;


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
function deposit(accountType: "son" | "mother", amount: number) {
  if (accountType === "son") {
    balanceSonInit += amount;
    interestSonInit = balanceSonInit + (balanceSonInit * 0.1);
    updateSonBalance();
    updateSonInterest();
  } else if (accountType === "mother") {
    balanceMotherInit += amount;
    interestMotherInit = balanceMotherInit + (balanceMotherInit * 0.1);
    updateMotherBalance();
    updateMotherInterest();
  }
}

function withdraw(accountType: "son" | "mother", amount: number) {
  if (accountType === "son") {
    balanceSonInit -= amount;
    interestSonInit = balanceSonInit + (balanceSonInit * 0.1);
    updateSonBalance();
    updateSonInterest();
  } else if (accountType === "mother") {
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
  motherInterestNumber.textContent = interestMotherInit.toString()
}


updateSonBalance();
updateSonInterest();

updateMotherBalance();
updateMotherInterest();