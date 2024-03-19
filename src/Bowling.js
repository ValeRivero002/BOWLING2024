export default class Game {
  constructor() {
    this.totalScore = 0; // Cambiar el nombre de la propiedad score a totalScore
  }

  roll(pins) {
    this.totalScore += pins; // Actualizar la propiedad totalScore
  }

  score() {
    return this.totalScore; // Devolver el valor de totalScore
  }
}
