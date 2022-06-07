function mouseOverDropDown(btn, arrow, menu) {
      btn.classList.add('dropDown-btn--active');
      menu.classList.remove('closeDropDown');
      menu.classList.add('openDropDown');
      arrow.style.transform = "rotate(180deg)";
}

function mouseOverDropDown2(btn, arrow, menu) {
   btn.classList.add('dropDown-btn--active');
   menu.classList.remove('closeDropDown');
   menu.classList.add('openDropDown2');
   arrow.style.transform = "rotate(180deg)";
}

function mouseOutDropDown(btn, arrow, menu) {
   btn.classList.remove('dropDown-btn--active');
   menu.classList.add('closeDropDown');
   menu.classList.remove('openDropDown');
   arrow.style.transform = "rotate(0deg)";
}

// workspace nav drop down 
const btn1 = document.querySelector('#workspace-btn');
const menu1 = document.querySelector('#workspace-dropDown');
const arrow1 = document.querySelector('#workspace-arrow');
btn1.addEventListener('mouseover', e => {
   mouseOverDropDown(btn1, arrow1, menu1);
})
btn1.addEventListener('mouseout', e => {
   mouseOutDropDown(btn1, arrow1, menu1);
})

// other services nav drop down 
const btn2 = document.querySelector('#otherServ-btn');
const menu2 = document.querySelector('#otherServ-dropDown');
const arrow2 = document.querySelector('#otherServ-arrow');
btn2.addEventListener('mouseover', e => {
   mouseOverDropDown2(btn2, arrow2, menu2);
})
btn2.addEventListener('mouseout', e => {
   mouseOutDropDown(btn2, arrow2, menu2);
})


//SERVICE PAGES - additional services drop down
const dropDown2 = () => {
   const DropDownBtn2 = document.querySelector('.additionalServicesDropDown__btn');
   const DropDown2 = document.querySelector('.additionalServicesDropDown__dropDown');
   const DropDownArrow2 = document.querySelector ('.additionalServicesDropDown__arrow');

   DropDownBtn2.addEventListener('click',() => {
       //hide show nav
       if(DropDown2.classList.contains("additionalServicesDropDown__dropDown--close")){

           DropDown2.classList.remove('additionalServicesDropDown__dropDown--close');
           DropDown2.classList.add('additionalServicesDropDown__dropDown--open');

           DropDownArrow2.style.transform = "rotate(180deg)"; 
           
       }

       else{
           DropDown2.classList.add('additionalServicesDropDown__dropDown--close');
           DropDown2.classList.remove('additionalServicesDropDown__dropDown--open');

           DropDownArrow2.style.transform = "rotate(0deg)"; 
       }
   });

}

dropDown2();