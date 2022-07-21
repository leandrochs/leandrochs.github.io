const profile = require('../images/perfil.jpg');

const todoList = require('../images/projectsImages/todoList.png');
const pixelArt = require('../images/projectsImages/pixelArt.png');
const colorGuess = require('../images/projectsImages/colorGuess.png');
const misteryLetter = require('../images/projectsImages/misteryLetter.png');
const trybewarts = require('../images/projectsImages/trybewarts.png');
const jsUnitTests = require('../images/projectsImages/jsUnitTests.png');
const zooFunctions = require('../images/projectsImages/zooFunctions.png');
const shoppingCart = require('../images/projectsImages/shoppingCart.png');
const tryunfo = require('../images/projectsImages/tryunfo.png');
const reactTestingLibrary = require('../images/projectsImages/reactTestingLibrary.png');
const trybewallet = require('../images/projectsImages/trybewallet.png');
const triviaReactRedux = require('../images/projectsImages/triviaReactRedux.png');
const starwarsPlanetsSearch = require('../images/projectsImages/starwarsPlanetsSearch.png');
const dockerTodoList = require('../images/projectsImages/dockerTodoList.png');
const mysqlOneForAll = require('../images/projectsImages/mysqlOneForAll.png');

const dataDisplay = [
  {
    type: 'profile',
    name: 'LEANDRO SILVA',
    image: profile,
    subTitle: 'Full Stack',
    description:
      'Um entusiasta das ciências naturais e do comportamento humano. Viu na tecnologia a possibilidade de resolver problemas de maneira rápida, eficiente e automatizável.',
    externalLink: 'https://www.linkedin.com/in/leandrosi/',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'BOOTSTRAP',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg',
    subTitle: 'Biblioteca CSS',
    description:
      'Kit de ferramentas de front-end poderoso, extensível e repleto de recursos. Crie e personalize com Sass, utilize sistemas e componentes de grade pré-construídos e dê vida a projetos com poderosos plugins JavaScript.',
    externalLink: 'https://getbootstrap.com/',
    tags: ['#front-end', '#CSS', '#biblioteca'],
  },
  {
    type: 'technology',
    name: 'CSS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
    subTitle: 'Estilo',
    description:
      'CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.',
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    tags: ['#CSS', '#front-end', '#estilo'],
  },
  {
    type: 'technology',
    name: 'REACT',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
    subTitle: 'App',
    description:
      'React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.',
    externalLink: 'https://pt-br.reactjs.org/',
    tags: ['#biblioteca', '#interface', '#front-end'],
  },
  {
    type: 'technology',
    name: 'REDUX',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    subTitle: 'React-Redux',
    description: 'Um contêiner de estado previsível para aplicativos JS.',
    externalLink: 'https://redux.js.org/',
    tags: ['#React', '#estados', '#front-end'],
  },
  {
    type: 'technology',
    name: 'DOCKER',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg',
    subTitle: 'Contêiner',
    description:
      'O Docker elimina tarefas de configuração repetitivas e é usado em todo o ciclo de vida de desenvolvimento de aplicativos - rápido, fácil e portátil.',
    externalLink: 'https://www.docker.com/',
    tags: ['#desenvolvimento', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'ESLint',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg',
    subTitle: 'Padronização',
    description: 'Encontra e corrija problemas em código JavaScript',
    externalLink: 'https://eslint.org/',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'EXPRESS',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
    subTitle: 'Back-end',
    description:
      'O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.',
    externalLink: 'https://expressjs.com/pt-br/',
    tags: ['#developer', '#back-end', '#node'],
  },
  {
    type: 'technology',
    name: 'FIGMA',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    subTitle: 'Design',
    description:
      'Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web, com ferramentas offline adicionais para aplicações desktop para GNU/Linux, macOS e Windows.',
    externalLink: 'https://www.figma.com/',
    tags: ['#planejamento', '#front-end', '#projeto'],
  },
  {
    type: 'technology',
    name: 'GIT',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
    subTitle: 'Versionamento',
    description:
      'Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo. ',
    externalLink: 'https://git-scm.com/book/pt-br/v2',
    tags: ['#Desenvolvimento', '#Colaboração', '#Git'],
  },
  {
    type: 'technology',
    name: 'GITHUB',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
    subTitle: 'Versionamento',
    description:
      'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.',
    externalLink: 'https://github.com/',
    tags: ['#Desenvolvimento', '#Colaboração', '#GitHub'],
  },
  {
    type: 'technology',
    name: 'HEROKU',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg',
    subTitle: 'Deploy',
    description:
      'Heroku é uma plataforma que suporta várias linguagens de programação. Uma das primeiras plataformas em nuvem.',
    externalLink: 'https://www.heroku.com/home',
    tags: ['#Deploy', '#nuvem', '#build'],
  },
  {
    type: 'technology',
    name: 'HTML',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
    subTitle: 'Web',
    description:
      'HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.',
    externalLink: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'JAVASCRIPT',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    subTitle: 'Linguagem de Programação',
    description:
      'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.',
    externalLink: 'https://www.javascript.com/',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'TYPESCRIPT',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    subTitle: 'Tipagem',
    description:
      'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
    externalLink: 'https://www.typescriptlang.org/',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'JEST',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    subTitle: 'Testes',
    description:
      'Jest é um poderoso Framework de Testes em JavaScript com um foco na simplicidade.',
    externalLink: 'https://jestjs.io/pt-BR/',
    tags: ['#testes', '#javascript', '#cobertura'],
  },
  {
    type: 'technology',
    name: 'MOCHA',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
    subTitle: 'Testes',
    description:
      'O Mocha é uma estrutura de teste JavaScript para programas Node.js., com suporte ao navegador, testes assíncronos, relatórios de cobertura de testes e uso de qualquer biblioteca de asserções.',
    externalLink: 'https://mochajs.org/',
    tags: ['#testes', '#javascript', '#cobertura'],
  },
  {
    type: 'technology',
    name: 'JUPTER',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg',
    subTitle: 'Notebook',
    description:
      'O Jupyter Notebook é uma ferramenta de Literate Computing, extremamente eficientes, pois permitem unir código e texto. Assim cada funcionalidade pode ser explicada detalhadamente. Você também pode gerar gráficos “vivos” gerados em tempo real dentro da ferramenta.',
    externalLink: 'https://jupyter.org/',
    tags: ['#dados', '#python', '#ciência-de-dados'],
  },
  {
    type: 'technology',
    name: 'LINUX',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    subTitle: 'Sistema Operacional',
    description:
      'Linux é um termo popularmente empregado para se referir a sistemas operativos ou sistemas operacionais que utilizam o Kernel Linux.',
    externalLink: 'http://releases.ubuntu.com/20.04/',
    tags: ['#Unix', '#Bash', '#Kernel'],
  },
  {
    type: 'technology',
    name: 'MARKDOWN',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg',
    subTitle: 'linguagem de marcação',
    description:
      'Markdown é uma linguagem de marcação que converte seu texto em HTML válido. Frequentemente usado para formatar arquivos README, escrever mensagens em fóruns de discussão online e criar rich text.',
    externalLink: 'https://stackedit.io/',
    tags: ['#README', '#rich-text', '#documentação'],
  },

  {
    type: 'technology',
    name: 'MONGODB',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    subTitle: 'Bando de dados',
    description:
      'Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.',
    externalLink: 'https://www.mongodb.com/pt-br',
    tags: ['#nosql', '#esquemas', '#JSON'],
  },
  {
    type: 'technology',
    name: 'MYSQL',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg',
    subTitle: 'Banco de dados',
    description:
      'O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface.',
    externalLink: 'https://www.mysql.com/',
    tags: ['#sql', '#esquemas', '#JSON'],
  },
  {
    type: 'technology',
    name: 'SEQUELIZE',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg',
    subTitle: 'ORM',
    description:
      'Sequelize é um ORM TypeScript e Node.js moderno para Postgres, MySQL, MariaDB, SQLite e SQL Server e muito mais. Apresentando suporte a transações sólidas, relações, eager and lazy loading, replicação de leitura e muito mais.',
    externalLink: 'https://sequelize.org/',
    tags: ['#bando_de_dados', '#back-end', '#ORM'],
  },

  {
    type: 'technology',
    name: 'NODE',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    subTitle: 'Node Js',
    description:
      'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
    externalLink: 'https://nodejs.org/pt-br/docs/',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'NPM',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
    subTitle: 'pacotes',
    description: 'npm é um gerenciador de pacotes para o Node.JS',
    externalLink: 'https://docs.npmjs.com/',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'SLACK',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg',
    subTitle: 'Comunicação',
    description:
      'O Slack é um programa de mensagens projetado especificamente para o local de trabalho.',
    externalLink: 'https://slack.com/intl/pt-br/',
    tags: ['#developer', '#back-end', '#front-end'],
  },
  {
    type: 'technology',
    name: 'TRELLO',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg',
    subTitle: 'Metodologia Ágil',
    description:
      'Trello é um aplicativo de gerenciamento de projeto baseado na web.',
    externalLink: 'https://trello.com/pt-BR',
    tags: ['#times', '#scrum', '#kanban'],
  },
  {
    type: 'technology',
    name: 'VS CODE',
    image:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg',
    subTitle: 'Editor',
    description:
      'O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código. ',
    externalLink: 'https://code.visualstudio.com/',
    tags: ['#developer', '#back-end', '#front-end'],
  },

  // PROJETOS

  {
    type: 'project',
    name: 'TODO LIST',
    image: todoList,
    subTitle: 'Projeto Todo List em html',
    description: 'Projeto Todo List em html e lógica em Javascript.',
    github: 'https://github.com/leandrochs/Todo-List',
    deploy: 'https://leandrochs.github.io/Todo-List/',
    tags: ['#todo-list', '#html', '#javascript'],
  },
  {
    type: 'project',
    name: 'PIXEL ART',
    image: pixelArt,
    subTitle: 'Projeto Pixel Art',
    description:
      'Projeto Pixel Art onde podemos ver a interação do usuário com elementos da tela por meio do DOM com html e Javascript.',
    github: 'https://github.com/leandrochs/Pixels-Art',
    deploy: 'https://leandrochs.github.io/Pixels-Art/',
    tags: ['#pixel-art', '#dom', '#javascript'],
  },
  {
    type: 'project',
    name: 'COLOR GUESS',
    image: colorGuess,
    subTitle: 'Projeto Color Guess',
    description:
      'Projeto Color Guess em que temos um jogo de adivinhação de cores.',
    github: 'https://github.com/leandrochs/Color-Guess',
    deploy: 'https://leandrochs.github.io/Color-Guess/',
    tags: ['#color-guess', '#jogo', '#javascript'],
  },
  {
    type: 'project',
    name: 'MISTERY LETTER',
    image: misteryLetter,
    subTitle: 'Projeto Mistery Letter',
    description:
      'Projeto Mistery Letter em que uma carta misteriosa é gerada com letras e fontes randômicas a partir de um texto digitado.',
    github: 'https://github.com/leandrochs/Mistery-Letter',
    deploy: 'https://leandrochs.github.io/Mistery-Letter/',
    tags: ['#mistery-letter', '#html', '#javascript'],
  },
  {
    type: 'project',
    name: 'Trybewarts',
    image: trybewarts,
    subTitle: 'Projeto Trybewarts',
    description: 'Projeto Trybewarts em que foi criado um formulário completo.',
    github: 'https://github.com/leandrochs/Trybewarts',
    deploy: 'https://leandrochs.github.io/Trybewarts/',
    tags: ['#trybewarts', '#formulario', '#javascript'],
  },
  {
    type: 'project',
    name: 'JS UNIT TESTS',
    image: jsUnitTests,
    subTitle: 'Projeto Js Unit Tests',
    description: 'Projeto para aplicação de testes unitários.',
    github: 'https://github.com/leandrochs/Js-Unit-Tests',
    tags: ['#testes', '#testesunitarios', '#javascript'],
  },

  {
    type: 'project',
    name: 'ZOO FUNCTIONS',
    image: zooFunctions,
    subTitle: 'Projeto Zoo Functions',
    description:
      'Projeto para aplicação Higher Order Function (ES6) e interpretação de testes unitários.',
    github: 'https://github.com/leandrochs/Zoo-Functions',
    tags: ['#zoofunctions', '#ES6', '#higherorderfunction'],
  },
  {
    type: 'project',
    name: 'SHOPPING CART',
    image: shoppingCart,
    subTitle: 'Projeto Shopping Cart',
    description:
      'Projeto para requisição da API do mercado livre utilizando html, css e javascript para funções assíncronas e testes unitários.',
    github: 'https://github.com/leandrochs/Shopping-Cart',
    deploy: 'https://leandrochs.github.io/Shopping-Cart/',
    tags: ['#shoppingcart', '#api', '#testesunitarios'],
  },

  {
    name: 'SOLAR SYSTEM',
  },

  {
    type: 'project',
    name: 'TRYUNFO',
    image: tryunfo,
    subTitle: 'Projeto Tryunfo',
    description:
      'Projeto para ler e atualizar estados de componentes, capturar eventos usando sintaxe React, criar formulários e transmitir informações por hereditariedade via callbacks.',
    github: 'https://github.com/leandrochs/Tryunfo',
    deploy: 'https://leandrochs.github.io/Tryunfo',
    tags: ['#Tryunfo', '#formulario', '#react'],
  },
  {
    type: 'project',
    name: 'REACT TESTING LIBRARY',
    image: reactTestingLibrary,
    subTitle: 'Projeto React Testing Library',
    description:
      'Implementação de testes em um projeto já desenvolvido. Foram utilizados seletores (queries) da React-Testing-Library em testes automatizados, simulação de eventos, fluxos lógicos assíncronos, testes de inputs e mocks de APIs utilizando fetch.',
    github: 'https://github.com/leandrochs/React-Testing-Library',
    tags: ['#ReactTestingLibrary', '#testesAutomatizados', '#mocks'],
  },
  {
    type: 'project',
    name: 'TRYBEWALLET',
    image: trybewallet,
    subTitle: 'Projeto Trybewallet',
    description:
      'Projeto com ênfase em redux com desenvolvimento de store, reducers, actions, dispatchers e actions assíncronas para controle de gastos e conversão de moedas.',
    github: 'https://github.com/leandrochs/Trybewallet',
    deploy: 'https://leandrochs.github.io/Trybewallet/',
    tags: ['#ReactTestingLibrary', '#testesAutomatizados', '#mocks'],
  },
  {
    type: 'project',
    name: 'TRIVIA REACT REDUX',
    image: triviaReactRedux,
    subTitle: 'Projeto Trivia React Redux',
    description:
      'Projeto de um jogo de perguntas e respostas com Trivia, React e Redux.',
    github: 'https://github.com/leandrochs/Trivia-React-Redux',
    deploy: 'https://leandrochs.github.io/Trivia-React-Redux/',
    tags: ['#trivia', '#react', '#redux'],
  },
  {
    type: 'project',
    name: 'STARWARS PLANETS SEARCH',
    image: starwarsPlanetsSearch,
    subTitle: 'Projeto Starwars Planets Search',
    description:
      'Projeto de buscas e filtros de resultados utilizando context API para gerenciar estado, React Hooks customizados, useState, useContext e useEffect.',
    github: 'https://github.com/leandrochs/Starwars-Planets-search',
    deploy: 'https://leandrochs.github.io/Starwars-Planets-search/',
    tags: ['#reacthooks', '#react', '#contextapi'],
  },
  {
    type: 'project',
    name: 'Docker Todo List',
    image: dockerTodoList,
    subTitle: 'Projeto Docker Todo List',
    description:
      'Projeto back-end em que se aplicou comandos dockers no CLI, criação de contêiners Docker para aplicações de front-end, back-end e testes, orquestrando os três contêineres utilizando o Docker compose.',
    github: 'https://github.com/leandrochs/Docker-Todo-List',
    tags: ['#backend', '#docker', '#conteiner'],
  },
  {
    type: 'project',
    name: 'Mysql One For All',
    image: mysqlOneForAll,
    subTitle: 'Projeto Mysql One For All',
    description:
      'Projeto com ênfase em comandos de banco de dados mySql com modelagem, criação de tabelas, identificação de entidades, atributos e relacionamentos e aplicação de 1ª, 2ª e 3ª Forma Normal.',
    github: 'https://github.com/leandrochs/Mysql-One-For-All',
    tags: ['#backend', '#bancodedados', '#mysql'],
  },
];

export default dataDisplay;
