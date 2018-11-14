const button = document.querySelector('.button');
const header = document.querySelector('h1');

button.addEventListener('click', changeHeader);

function changeHeader(e) {
    e.preventDefault()
    header.innerText = 'You clicked the button, good job'
}