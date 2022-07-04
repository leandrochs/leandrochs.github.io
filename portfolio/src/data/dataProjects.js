const todoList = require('../images/projectsImages/todoList.png');
const pixelArt = require('../images/projectsImages/pixelArt.png');

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
  
];

export default dataProjects;
