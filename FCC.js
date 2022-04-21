const entry = prompt("1. Deposit or 2. Widthdrawl?");
alert(typeof entry);
let balance = 2000; //2 thow-wow

if (entry == 1) {
  const amount = Number(prompt('How much would you like to deposit?'));
  alert(`You're new balance is ${balance + amount}!`);
  if (balance + amount <= 0) {
    alert(`BROKE`);
  } else {
    alert(`You got monnneyyy!!!`);
  }
} else if (entry == 2) {
  const amount = Number(prompt('How much would you like to widthdrawl?'));
  alert(`You're new balance is ${balance - amount}!`);
}