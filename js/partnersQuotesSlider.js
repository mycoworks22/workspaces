const partnersSlider = () => {
   const slider = document.querySelector('.partnersQuoteContainer');
   const slides = document.querySelectorAll('.partnersQuote');
   const prev = document.querySelector('#partnersPrev');
   const next = document.querySelector('#partnersNext');
   

   const auto = true;
   let slideInterval;
   const intervalTime = 15000;

   //counter
   let counter = 1;

   // get width of slide 
   let size = slides[0].clientWidth;

   
   //show first slide and not the last slide clone
   slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

   // next slide function 
   function nextSlide() { 
      if(counter >= slides.length -1) return;
      slider.style.transition = 'all 0.5s linear';
      counter++;
      slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

      if(auto){
         clearInterval(slideInterval);
         slideInterval = setInterval(nextSlide, intervalTime);
      }
   }  

   // prev slide function 
   function prevSlide() {
      if(counter <= 0) return;
      slider.style.transition = 'all 0.5s linear';
      counter--;
      slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

      if(auto){
         clearInterval(slideInterval);
         slideInterval = setInterval(nextSlide, intervalTime);
      }
   }  

   //next btn on click
   next.addEventListener('click', e => {
      nextSlide();
   });

   //prev btn on click
   prev.addEventListener('click', e => {
      prevSlide();
   });

   //make it infinite
   slider.addEventListener('transitionend', () => {
      if(slides[counter].id === 'last-clone'){
         slider.style.transition = 'none';
         counter = slides.length - 2 ;
         slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
      }

      if(slides[counter].id === 'first-clone'){
         slider.style.transition = 'none';
         counter = slides.length - counter ;
         slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
      }
   });

   // auto rotate 
   window.onload=function(){
      setTimeout(loadNextSlideAfterTime, 15000)   
   };

   function loadNextSlideAfterTime() { 
         next.click();
   }

}

partnersSlider();