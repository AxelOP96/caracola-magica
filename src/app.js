const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updateButton() {
    const icon = this.paused ? '⏯' : '⏸';
    toggle.textContent = icon;
}
video.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

const answers = ['Probablemente','No...','Seguro que si','Pregunta otra vez','Tal vez','Como yo lo veo, sí',' Sin lugar a dudas','Puedes confiar en ello.','Es lo más probable','Las señales apuntan a que sí','Mejor no decirte ahora.','Vuelve a preguntar más tarde','Respuesta confusa, vuelve a intentarlo','No cuentes con ello','Mis fuentes dicen que no','Muy dudoso','Mi respuesta es no','Las perspectivas no son muy buenas','Concéntrate y vuelve a preguntar'];

const btn = document.querySelector("#answer");
const place = document.querySelector("#speech");

btn.addEventListener("click", ()=>{
    let limit = answers.length;
    let random = Math.round(Math.random()*limit)
    console.log(random);
    
    place.innerHTML = answers[random];
})