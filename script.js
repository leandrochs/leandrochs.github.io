const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const date = new Date();
const signature = document.querySelector('#signature');

signature.innerHTML = `${monthNames[date.getMonth()]} de ${date.getFullYear()}`
