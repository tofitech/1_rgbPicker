const html_body = document.querySelector('body');
const rgbName = document.querySelector('#rgbName');
const btn = document.querySelector('#btn');



btn.addEventListener('click', () => {
  var r = () => Math.random() * 256 >> 0;
var color = `rgb(${r()}, ${r()}, ${r()})`;
  rgbName.textContent = html_body.style.backgroundColor = color;
});


