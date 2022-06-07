//////////////////////////////
////  Video play/pause   /////

const video = document.querySelector('.video__vid');
const controls = document.querySelector('.video__controls');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

controls.addEventListener('click',() => {
   if(video.paused){
      video.play(); 
      play.classList.remove('show-playPause');
      play.classList.add('hide-playPause');
      pause.classList.add('show-playPause');
      pause.classList.remove('hide-playPause');
   }
   else{
      video.pause(); 
      pause.classList.remove('show-playPause');
      pause.classList.add('hide-playPause');
      play.classList.add('show-playPause');
      play.classList.remove('hide-playPause');
   }
});

video.addEventListener('ended',() => {
      pause.classList.remove('show-playPause');
      pause.classList.add('hide-playPause');
      play.classList.add('show-playPause');
      play.classList.remove('hide-playPause');
   
});


