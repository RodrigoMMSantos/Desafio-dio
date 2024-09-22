let nomeDoHeroi = 'Rodrigo, o grande mestre jedi';
let nivelDoHeroi = 100000;

if (nivelDoHeroi <= 1000) {
  nivelDoHeroi = 'Ferro';
} else if (nivelDoHeroi === 1001 || nivelDoHeroi <= 2000) {
  nivelDoHeroi = 'Bronze';
} else if (nivelDoHeroi === 2001 || nivelDoHeroi <= 5000) {
  nivelDoHeroi = 'Prata';
} else if (nivelDoHeroi === 5001 || nivelDoHeroi <= 7000) {
  nivelDoHeroi = 'Ouro';
} else if (nivelDoHeroi === 7001 || nivelDoHeroi <= 8000) {
  nivelDoHeroi = 'Platina';
} else if (nivelDoHeroi === 8001 || nivelDoHeroi <= 9000) {
  nivelDoHeroi = 'Ascendente';
} else if (nivelDoHeroi === 9001 || nivelDoHeroi <= 10000) {
  nivelDoHeroi = 'Imortal';
} else if (nivelDoHeroi => 10001) {
  nivelDoHeroi = 'Radiante';
}

console.log(
  'O herói de nome : ',
  nomeDoHeroi,
  ',está no nível: ',
  nivelDoHeroi
);
