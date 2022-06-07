const testimonials = () => {
   const testimonials = document.querySelector('.testimonialsInner');
   const testimonial = document.querySelectorAll('.testimonial');
   const dot1 = document.querySelector('.control__1');
   const dot2 = document.querySelector('.control__2');
   const dot3 = document.querySelector('.control__3');
   
   // get width of slide 
   let size = testimonial[0].clientWidth;


   dot1.addEventListener('click', e => {
      testimonials.style.transition = 'all 0.5s linear';
      testimonials.style.transform = 'translateX(0)';
      dot1.classList.add('control--active');
      dot2.classList.remove('control--active');
      dot3.classList.remove('control--active');
   });

   dot2.addEventListener('click', e => {
      testimonials.style.transition = 'all 0.5s linear';
      testimonials.style.transform = 'translateX(' + -size + 'px)';
      dot2.classList.add('control--active');
      dot1.classList.remove('control--active');
      dot3.classList.remove('control--active');
   });

   dot3.addEventListener('click', e => {
      testimonials.style.transition = 'all 0.5s linear';
      testimonials.style.transform = 'translateX(' + (-size * 2 )+ 'px)';
      dot3.classList.add('control--active');
      dot1.classList.remove('control--active');
      dot2.classList.remove('control--active');
   });



}

testimonials();