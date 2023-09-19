let pecaXadrez = 'rei';
let movimento;

switch (pecaXadrez) {
    case 'rei':
        movimento = "O rei não pode mover-se para uma casa que esteja sob ameaça de uma peça adversária.";
      break;
    case 'dama':
        movimento = "Pode mover-se em qualquer direção (horizontal, vertical ou diagonal) em qualquer número de casas.";
      break;
    case 'torre':
        movimento = "Move-se horizontal ou verticalmente em qualquer número de casas. Não pode pular outras peças.";
      break;
    case 'bispo':
        movimento = "Move-se diagonalmente em qualquer número de casas. Não pode pular outras peças.";
      break;
    case 'cavalo':
        movimento = "Move-se em um padrão L - dois espaços em uma direção e um espaço perpendicular a isso. Pode pular outras peças.";
      break;
    case 'peao':
        movimento = "Move-se para frente uma casa, mas captura peças adversárias na diagonal. No primeiro movimento, pode avançar duas casas. Em sua primeira jogada, um peão pode mover-se duas casas para frente, desde que ambas estejam desocupadas.";
      break;
    default:
        movimento = 'Errouu!'
}
console.log(movimento);