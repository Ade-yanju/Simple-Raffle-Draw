'use strict'

let userDataArray = [
  
];
let drawingInProgress = false;
let roundsExecuted = 0;
document.querySelector('.drawNames').textContent = "Participant name draw at random";
document.querySelector('.numRounds').textContent = "NO of rounds";

// add button
document.querySelector('.add').addEventListener('click', function getUserData() {
  let userData = (document.querySelector('.name').value);
  if (userData) {
    userDataArray.push(userData);
    // userData.value = '';
    document.querySelector('.namesInput').textContent = userDataArray;
  } else {
    document.querySelector('.namesInput').textContent = "No data entered";
  }
});

document.querySelector('.add').addEventListener('click', function() {
  if (drawingInProgress) return;
});

// Draw button
document.querySelector('.draw').addEventListener('click', function getRandomUserData() {
  if (drawingInProgress) return;

  const drawNamesElement = document.querySelector('.drawNames');
  const numRounds = parseInt(document.querySelector('.numRounds').value);

  if (userDataArray.length === 0) {
    drawNamesElement.textContent = "No data entered.";
  } else {
    let randomData = [];
    let tempArray = [...userDataArray];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    randomData.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
    roundsExecuted++;
    drawNamesElement.innerHTML += `<br>Round ${roundsExecuted}: ${randomData}`;
    drawNamesElement.style.backgroundColor = "#adff2f";

    if (roundsExecuted >= numRounds) {
      document.querySelector('.add').disabled = true;
      document.querySelector('.draw').disabled = true;
      drawingInProgress = true;
    }
  }
});

// restart button for restarting the drawing when given number rounds is reached
document.querySelector('.restart').addEventListener('click', function() {
  roundsExecuted = 0;
  drawingInProgress = false;
  document.querySelector('.add').disabled = false;
  document.querySelector('.draw').disabled = false;
});


//Restart button
document.querySelector('.restart').addEventListener('click', function (){
  userDataArray = [];
  document.querySelector('.drawNames').style.backgroundColor = '#eee';
  document.querySelector('.namesInput').textContent = "Participant name inputed"
  document.querySelector('.drawNames').textContent = "Participant name draw at random"
  document.querySelector('.name').value = '';
})

// Enter key event
document.addEventListener('keydown', function(e){
  if (e.key === 'Enter') {
  let userData = (document.querySelector('.name').value);
  if (userData) {
    userDataArray.push(userData);
    document.querySelector('.namesInput').textContent = userDataArray;
  } else {
    document.querySelector('.namesInput').textContent = "No data entered";
  }
}
})