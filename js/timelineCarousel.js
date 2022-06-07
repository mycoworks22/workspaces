const timeline = document.querySelector('.timelineCarousel');
const timelineTrack = document.querySelector('.timelineCarousel__track');
const timelineSlides = Array.from(timelineTrack.children);
const timelineNext = document.querySelector('.timelineCarousel__button--next');
const timelinePrev = document.querySelector('.timelineCarousel__button--prev');
const timelineNav = document.querySelector('.timelineCarousel__nav');
const timelineIndicators = Array.from(timelineNav.children);

// GET WIDTH OF SLIDES
const timelineSlideSize = timelineSlides[0].getBoundingClientRect();
const timelineSlidesWidth = timelineSlideSize.width;
const timelineSlidesHeight = timelineSlideSize.height;


//ARRANGE SLIDES NEXT TO EACH OTHER
timelineSlides.forEach((slide, index) => {
   slide.style.left = timelineSlidesWidth * index + 'px';
})


//CHANGE TO TARGET SLIDE
const moveToTimelineSlide = (timelineTrack, currentSlide, targetSlide) => {
   timelineTrack.style.transform = 'translateX(-' + targetSlide.style.left +')';
   currentSlide.classList.remove('timelineCarouselCurrent'); 
   targetSlide.classList.add('timelineCarouselCurrent');
}

//UPDATE INDICATORS
const updateIndicators = (currentDot, targetDot) => {
   currentDot.classList.remove('timelineCarouselCurrentIndicator');
   targetDot.classList.add('timelineCarouselCurrentIndicator');
}

//HIDE OR SHOW ARROWS
const  hideShowArrows = (timelineSlides, timelinePrev, timelineNext, targetIndex) => {
   if(targetIndex === 0) {
      timelinePrev.classList.add('is-hidden');
      timelineNext.classList.remove('is-hidden');
   }
   else if(targetIndex === timelineSlides.length - 1) {
      timelinePrev.classList.remove('is-hidden');
      timelineNext.classList.add('is-hidden');
   }
   else{
      timelinePrev.classList.remove('is-hidden');
      timelineNext.classList.remove('is-hidden');
   }
}

//PREV BUTTON
timelinePrev.addEventListener('click', e => {
   // find out what slide we are on - looking at the track and not the document so it is quicker
   const currentSlide = timelineTrack.querySelector('.timelineCarouselCurrent'); 
   const prevSlide =  currentSlide.previousElementSibling;
   const currentDot = timelineNav.querySelector('.timelineCarouselCurrentIndicator');
   const prevDot = currentDot.previousElementSibling;
   const prevIndex = timelineSlides.findIndex(slide => slide === prevSlide);

   //plug ^ into the move to target slide function
   moveToTimelineSlide(timelineTrack, currentSlide, prevSlide);

   //plug ^ into update Indicators
   updateIndicators(currentDot, prevDot);

   //plug ^ into hide/show arrow
   hideShowArrows(timelineSlides, timelinePrev, timelineNext, prevIndex);
})

// NEXT BUTTON
timelineNext.addEventListener('click', e => {
   // find out what slide we are on - looking at the track and not the document so it is quicker
   const currentSlide = timelineTrack.querySelector('.timelineCarouselCurrent'); 
   const nextSlide =  currentSlide.nextElementSibling; 
   const currentDot = timelineNav.querySelector('.timelineCarouselCurrentIndicator');
   const nextDot = currentDot.nextElementSibling;
   const nextIndex = timelineSlides.findIndex(slide => slide === nextSlide);
   //plug ^ into the move to target slide function
   moveToTimelineSlide(timelineTrack, currentSlide, nextSlide);

   //plug ^ into update Indicators
   updateIndicators(currentDot, nextDot);

   //plug ^ into hide/show arrow
   hideShowArrows(timelineSlides, timelinePrev, timelineNext, nextIndex);
})

//NAV INDICATORS
timelineNav.addEventListener('click', e =>{

   //what indicator is clicked
   const targetDot = e.target.closest('p'); 

   //if they are not clicking on one of the indicators nothing happens
   if (!targetDot) return; 
   
   const currentSlide = timelineTrack.querySelector('.timelineCarouselCurrent');
   const currentDot = timelineNav.querySelector('.timelineCarouselCurrentIndicator');
   const targetIndex = timelineIndicators.findIndex(indicator => indicator === targetDot)
   const targetSlide = timelineSlides[targetIndex];

   //plug ^ into the move to target slide function
   moveToTimelineSlide(timelineTrack, currentSlide, targetSlide);

   //plug ^ into update Indicators
   updateIndicators(currentDot, targetDot);

   //plug ^ into hide/show arrow
   hideShowArrows(timelineSlides, timelinePrev, timelineNext, targetIndex);
})
