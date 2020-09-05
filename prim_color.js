

const btn_red = document.querySelector('#btn_red');
const btn_yellow = document.querySelector('#btn_yellow');
const btn_blue = document.querySelector('#btn_blue');
const btn_orange = document.querySelector('#btn_orange');
const btn_green = document.querySelector('#btn_green');
const btn_violet = document.querySelector('#btn_violet');


//The body tag..
const html_body = document.querySelector('body');

//color red
btn_red.addEventListener('click', () => html_body.style.backgroundColor = 'red');

//color yellow
btn_yellow.addEventListener('click', () => html_body.style.backgroundColor = 'yellow');

//color blue
btn_blue.addEventListener('click', () => html_body.style.backgroundColor ='blue');

//color orange
btn_orange.addEventListener('click', () => html_body.style.backgroundColor = 'orange');

//color green
btn_green.addEventListener('click', () => html_body.style.backgroundColor ='green');

//color violet
btn_violet.addEventListener('click', () => html_body.style.backgroundColor ='violet');
