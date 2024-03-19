import Game from './Bowling.js'; // Asumiendo que tengas una clase Game en un archivo Game.js

document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateScore);
});

function calculateScore() {
    const game = new Game();

    // Obtener el puntaje total
    const totalScore = game.score();

    // Mostrar el puntaje total
    const totalScoreElement = document.getElementById("totalScore");
    totalScoreElement.textContent = `Total Score: ${totalScore}`;
}
