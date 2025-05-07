let balance = 1000;
let flag = true;
function checkBalance() {
  alert(`Your Balance is: ${balance}`);
}

function depositMoney() {
  const amount = parseInt(prompt("Amount to deposit"));
  balance += amount;
  alert(`Deposited ${amount} successfully!`);
}

function withdrawMoney() {
  const amount = parseInt(prompt("Amount to withdraw"));
  if (amount <= balance) {
    balance -= amount;
    alert("Withdrawl succesfull!");
  } else {
    alert("Insufficient Balance!");
  }
}

while (flag) {
  const choice = parseInt(
    prompt(
      `Select Option
    1. Check Balance
    2. Deposit Money
    3. Withdraw Money
    4. Exit

    Enter your choice (1-4):
    `
    )
  );

  switch (choice) {
    case 1:
      checkBalance();
      break;

    case 2:
      depositMoney();
      break;

    case 3:
      withdrawMoney();
      break;

    case 4:
      alert("Thank you!")
      flag = false;
      break;

    default:
      alert("Invalid choice!");
  }
}
