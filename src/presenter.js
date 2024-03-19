import Game from './Bowling.js'; // Asumiendo que tengas una clase Game en un archivo Bowling.js

document.addEventListener("DOMContentLoaded", function() {
  const calculateButton = document.getElementById("calculateButton");
  calculateButton.addEventListener("click", calculateScore);
});

function calculateScore() {
  let totalScore = 0;

  // Iterar sobre los campos de los rolls y verificar si la suma es igual a 20
  for (let i = 1; i <= 10; i++) {
      const roll1 = parseInt(document.getElementById(`frame${i}roll1`).value) || 0;
      const roll2 = parseInt(document.getElementById(`frame${i}roll2`).value) || 0;
      
      totalScore += roll1 + roll2;
  }

  // Mostrar el puntaje total
  const totalScoreElement = document.getElementById("totalScore");
  totalScoreElement.textContent = `Total Score: ${totalScore}`;
}
