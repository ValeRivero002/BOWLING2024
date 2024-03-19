import Game from './Bowling.js';
test('Deberia devolver score 0', () => {
  const game = new Game(); 
  for (let i = 0; i < 20; i++) {
    game.roll(0);
  }

  // Verificar si el puntaje es 0
  expect(game.score()).toBe(0);
});
