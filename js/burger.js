const openBurgerMenu = () => {
   const open = document.querySelector('#openBurger');
   const menu = document.querySelector('#burgerMenu');
   const close = document.querySelector('#closeBurger');

   open.addEventListener('click',() => {
      menu.style.transform = "translateX(0%)";
   });

   close.addEventListener('click',() => {
      menu.style.transform = "translateX(100%)";
   });


}

openBurgerMenu();

const burgerDropDowns = () => {
   function clickToOpenOrClose(arrow, menu) {
      if (menu.style.display === "none") {
         menu.style.display = "block";
         arrow.style.transform = "rotate(180deg)";
      }
      else{
         menu.style.display = "none";
         arrow.style.transform = "rotate(0deg)";
      }
      
   }

// workspace drop down 
const btn1 = document.querySelector('.burgerDropDownBtn1');
const menu1 = document.querySelector('.burgerDropDown--1');
const arrow1 = document.querySelector('#workspace-arrow2');
btn1.addEventListener('click', e => {
   clickToOpenOrClose(arrow1, menu1);
})

// services drop down 
const btn2 = document.querySelector('.burgerDropDownBtn2');
const menu2 = document.querySelector('.burgerDropDown--2');
const arrow2 = document.querySelector('#services-arrow2');
btn2.addEventListener('click', e => {
   clickToOpenOrClose(arrow2, menu2);
})

}

burgerDropDowns();