const slider = () => {
  const slider = document.querySelector(".slider1Slides");
  const slides = document.querySelectorAll(".slider1Slide");
  const prev = document.querySelector(".slider1Controls--prev");
  const next = document.querySelector(".slider1Controls--next");

  //clone 1st and last
  slidesLenght = slides.length;
  firstSlide = slides[0];
  lastSlide = slides[slidesLenght - 1];
  cloneFirst = firstSlide.cloneNode(true);
  cloneLast = lastSlide.cloneNode(true);
  slider.appendChild(cloneFirst);
  slider.insertBefore(cloneLast, firstSlide);
  cloneFirst.setAttribute("id", "firstClone");
  cloneLast.setAttribute("id", "lastClone");
  cloneFirst.setAttribute("class", "slider1Slide");
  cloneLast.setAttribute("class", "slider1Slide");

  //new slides
  const newSlides = document.querySelectorAll(".slider1Slide");

  //auto ,set to true to rotate
  const auto = false;
  let slideInterval;
  const intervalTime = 10000;

  //counter
  let counter = 1;

  // get width of slide
  let size = slides[0].clientWidth;

  //show first slide and not the last slide clone
  slider.style.transform = "translateX(" + -size * counter + "px)";

  // next slide function
  function nextSlide() {
    if (counter >= newSlides.length - 1) return;
    slider.style.transition = "all 0.6s linear";
    counter++;
    slider.style.transform = "translateX(" + -size * counter + "px)";

    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }

  // prev slide function
  function prevSlide() {
    if (counter <= 0) return;
    slider.style.transition = "all 0.6s linear";
    counter--;
    slider.style.transform = "translateX(" + -size * counter + "px)";

    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }

  //next btn on click
  next.addEventListener("click", (e) => {
    nextSlide();
  });

  //prev btn on click
  prev.addEventListener("click", (e) => {
    prevSlide();
  });

  //make it infinite
  slider.addEventListener("transitionend", () => {
    if (newSlides[counter].id === "lastClone") {
      slider.style.transition = "none";
      counter = newSlides.length - 2;
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }

    if (newSlides[counter].id === "firstClone") {
      slider.style.transition = "none";
      counter = newSlides.length - counter;
      slider.style.transform = "translateX(" + -size * counter + "px)";
    }
  });

  // auto rotate
  // window.onload=function(){
  //    setTimeout(loadNextSlideAfterTime, 15000)
  // };

  // function loadNextSlideAfterTime() {
  //       next.click();
  // }

  
};

slider();
