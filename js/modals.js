function openModal(modalContainer, modal) {
   modalContainer.style.display = 'flex';
   document.body.style.overflow = "hidden";
   setTimeout( function () { modal.style.transform = 'translateY(0%)'; }, 100);
}

function closeModal(modalContainer, modal) {
   modal.style.transform = 'translateY(-150%)';
   setTimeout( function () { modalContainer.style.display = 'none'; }, 1000);
   setTimeout( function () { document.body.style.overflow = "auto"; }, 1001);
   
}


// 10% DISCOUNT MODAL 
const openModal8 = document.querySelector('.topNav10');
const modalContainer8 = document.querySelector('#discountModalWrap');
const modal8 = document.querySelector('.discountModal');
const closeModal8  = document.querySelectorAll('.closeDiscount');

openModal8.addEventListener('click', e => {
   openModal(modalContainer8, modal8);
})
closeModal8.forEach(item => {
   item.addEventListener('click', () => {
      closeModal(modalContainer8, modal8);
   });
});

// London City Map
const openModal1 = document.querySelector('#cityViewMap');
const modalContainer1 = document.querySelector('#cityMap');
const modal1 = document.querySelector('.locationMapModal--city');
const closeModal1  = document.querySelector('#closeCity');
openModal1.addEventListener('click', e => {
   openModal(modalContainer1, modal1);
})
closeModal1.addEventListener('click', e => {
   closeModal(modalContainer1, modal1);
})

// London Strand Map
const openModal2 = document.querySelector('#strandViewMap');
const modalContainer2 = document.querySelector('#strandMap');
const modal2 = document.querySelector('.locationMapModal--strand');
const closeModal2  = document.querySelector('#closeStrand');
openModal2.addEventListener('click', e => {
   openModal(modalContainer2, modal2);
})
closeModal2.addEventListener('click', e => {
   closeModal(modalContainer2, modal2);
})

//London West 1
const openModal3 = document.querySelector('#westEnd1ViewMap');
const modalContainer3 = document.querySelector('#westEnd1Map');
const modal3 = document.querySelector('.locationMapModal--westEnd1');
const closeModal3  = document.querySelector('#closeWestEnd1Map');
openModal3.addEventListener('click', e => {
   openModal(modalContainer3, modal3);
})
closeModal3.addEventListener('click', e => {
   closeModal(modalContainer3, modal3);
})


//London West 2
const openModal4 = document.querySelector('#westEnd2ViewMap');
const modalContainer4 = document.querySelector('#westEnd2Map');
const modal4 = document.querySelector('.locationMapModal--westEnd');
const closeModal4  = document.querySelector('#closeWestEnd2Map');
openModal4.addEventListener('click', e => {
   openModal(modalContainer4, modal4);
})
closeModal4.addEventListener('click', e => {
   closeModal(modalContainer4, modal4);
})


// Edinburgh 1 
const openModal5 = document.querySelector('#edin1ViewMap');
const modalContainer5 = document.querySelector('#edin1Map');
const modal5 = document.querySelector('.locationMapModal--edin1');
const closeModal5  = document.querySelector('#closeEdin1');
openModal5.addEventListener('click', e => {
   openModal(modalContainer5, modal5);
})
closeModal5.addEventListener('click', e => {
   closeModal(modalContainer5, modal5);
})

//Edinburgh 2
const openModal6 = document.querySelector('#edin2ViewMap');
const modalContainer6 = document.querySelector('#edin2Map');
const modal6 = document.querySelector('.locationMapModal--edin2');
const closeModal6  = document.querySelector('#closeEdin2');
openModal6.addEventListener('click', e => {
   openModal(modalContainer6, modal6);
})
closeModal6.addEventListener('click', e => {
   closeModal(modalContainer6, modal6);
})


//Ipswich
const openModal7 = document.querySelector('#ipswichViewMap');
const modalContainer7 = document.querySelector('#ipswMap');
const modal7 = document.querySelector('.locationMapModal--ipsw');
const closeModal7  = document.querySelector('#closeIpsw');
openModal7.addEventListener('click', e => {
   openModal(modalContainer7, modal7);
})
closeModal7.addEventListener('click', e => {
   closeModal(modalContainer7, modal7);
})

