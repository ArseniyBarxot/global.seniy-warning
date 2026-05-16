const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w, h;

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  draw();
}
function draw(){
  ctx.clearRect(0,0,w,h);
  for(let i=0; i<300; i++){
    const x = Math.random() * w;
    const y = Math.random() * h;
    const r = 0.2 + Math.random() * 2.2;
    const alpha = 0.4 + Math.random() * 0.6;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.fill();
  }
}
window.addEventListener('resize', resize);
resize();



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll('.end, .card, .txtc').forEach(el => {
    observer.observe(el);
});


function toggleCard(header) {
    const card = header.parentElement;
    
    document.querySelectorAll('.card').forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('open')) {
            otherCard.classList.remove('open');
        }
    });
    
    card.classList.toggle('open');
}