import Game from './Bowling.js';
test('Deberia devolver score 0', () => {
  const game = new Game(); 
  for (let i = 0; i < 20; i++) {
    game.roll(0);
  }

  expect(game.score()).toBe(0);
});
test('Debería devolver un puntaje de 20 para un juego donde se derribó 1 pin en cada roll', () => {
  const juego = new Game(); 


  for (let i = 0; i < 20; i++) {
    juego.roll(1);
  }

  expect(juego.score()).toBe(20);
});
