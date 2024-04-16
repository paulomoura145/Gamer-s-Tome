
let isDown = false;
let startX;
let scrollLeft;

const slider = document.querySelector ('.carrocel');

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
});

var paginas = ['Home', 'Maispopulares', 'Retro', 'Atuais', 'Marcantes'].map(id => document.getElementById(id));

function navegarPara(paginaId) {
  paginas.forEach((pagina) => {
    if (pagina.id === paginaId) {
      pagina.style.display = 'block';
    } else {
      pagina.style.display = 'none';
    }
  });
}