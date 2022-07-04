const todoList = require('../images/projectsImages/todoList.png');
const pixelArt = require('../images/projectsImages/pixelArt.png');
const colorGuess = require('../images/projectsImages/colorGuess.png');

const dataProjects = [
  {
    type: 'Project',
    name: 'TODO LIST',
    image: todoList,
    subTitle: 'Projeto Todo List em html',
    description:
      'Projeto Todo List em html e lógica em Javascript.',
    deploy: 'https://leandrochs.github.io/Todo-List/',
    tags: ['#todo-list', '#html', '#javascript'],
  },
  {
    type: 'Project',
    name: 'PIXEL ART',
    image: pixelArt,
    subTitle: 'Projeto Pixel Art',
    description:
      'Projeto Pixel Art onde podemos ver a interação do usuário com elementos da tela por meio do DOM com html e Javascript.',
    deploy: 'https://leandrochs.github.io/Pixels-Art/',
    tags: ['#pixel-art', '#dom', '#javascript'],
  },
  {
    type: 'Project',
    name: 'COLOR GUESS',
    image: colorGuess,
    subTitle: 'Projeto Color Guess',
    description:
      'Projeto Color Guess em que temos um jogo de adivinhação de cores.',
    deploy: 'https://leandrochs.github.io/Color-Guess/',
    tags: ['#color-guess', '#jogo', '#javascript'],
  },
  {
    type: 'Project',
    name: 'MISTERY LETTER',
    image: colorGuess,
    subTitle: 'Projeto Mistery Letter',
    description:
      'Projeto Mistery Letter em que uma carta misteriosa é gerada com letras e fontes randômicas a partir de um texto digitado.',
    deploy: 'https://leandrochs.github.io/Color-Guess/',
    tags: ['#mistery-letter', '#html', '#javascript'],
  },
  
];

export default dataProjects;
