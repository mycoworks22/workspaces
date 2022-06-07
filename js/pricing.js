// Individual and Combined open and close 
const pricing = () => {

   const indBtn = document.querySelector('#indPackBtn');
   const combBtn = document.querySelector('#combPackBtn');
   const ind = document.querySelector('.pricingIndividual');
   const comb = document.querySelector('.pricingCombined');

   indBtn.addEventListener('click',() => {
           ind.classList.remove('hide');
           ind.classList.add('show2');
           comb.classList.add('hide');
           comb.classList.remove('show2');

           indBtn.classList.remove('pricingBtns--off');
           indBtn.classList.add('pricingBtns--active');
           combBtn.classList.add('pricingBtns--off');
           combBtn.classList.remove('pricingBtns--active');

   });

   combBtn.addEventListener('click',() => {
       comb.classList.remove('hide');
       comb.classList.add('show2');
       ind.classList.add('hide');
       ind.classList.remove('show2');

       combBtn.classList.remove('pricingBtns--off');
       combBtn.classList.add('pricingBtns--active');
       indBtn.classList.add('pricingBtns--off');
       indBtn.classList.remove('pricingBtns--active');
   });
}

pricing();

// Registered Office Address - Director Service Address
const pricing1 = () => {

    const regOffAddPrice = document.querySelector('#regOffAdd-price');
    const regOffAddCheck = document.querySelector('#director-check');
    const regOffAddUl1 = document.querySelector('#regOffAdd1');
    const regOffAddUl2 = document.querySelector('#regOffAdd2');

    regOffAddCheck.addEventListener('click',() => {

        if (regOffAddCheck.checked){
            regOffAddUl1.classList.remove('hide');
            regOffAddUl1.classList.add('show1');
            regOffAddUl2.classList.add('hide');
            regOffAddUl2.classList.remove('show1');
            regOffAddPrice.innerHTML='<span>&#163;</span>49<span>.99</span><span class="serviceVat">+ VAT</span>';
        }
        else{
            regOffAddUl2.classList.remove('hide');
            regOffAddUl2.classList.add('show1');
            regOffAddUl1.classList.add('hide');
            regOffAddUl1.classList.remove('show1');
            regOffAddPrice.innerHTML='<span>&#163;</span>39<span>.99</span><span class="serviceVat">+ VAT</span>';
        }
    });
}

pricing1();

//PERIOD
function pricingPeriod1(){
   // prices 
    const vBussAddPrice = document.querySelector('#vBussAdd-price');
    const vBussPlusPrice = document.querySelector('#vBussPlus-price');
    const tAnswPrice = document.querySelector('#tAnswServ-price');

    const comb1Price = document.querySelector('#comb1-price');
    const comb2Price = document.querySelector('#comb2-price');
    const comb3Price = document.querySelector('#comb3-price');

    //select
    const pricingPeriod = document.querySelector('#pricing-period');
    const pricingPeriodValue = pricingPeriod.options[pricingPeriod.selectedIndex].value;

    switch(pricingPeriodValue) {
        case "12":
            vBussAddPrice.innerHTML='<span>&#163;</span>249<span>.99</span><span class="serviceVat">+ VAT</span>';
            vBussPlusPrice.innerHTML='<span>&#163;</span>299<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            tAnswPrice.innerHTML='<span>&#163;</span>129<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb1Price.innerHTML='<span>&#163;</span>349<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb2Price.innerHTML='<span>&#163;</span>399<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            comb3Price.innerHTML='<span>&#163;</span>399<span>.99</span><span class="serviceVat">+ VAT</span>';
        break;

        case "6":
            vBussAddPrice.innerHTML='<span>&#163;</span>159<span>.99</span><span class="serviceVat">+ VAT</span>';
            vBussPlusPrice.innerHTML='<span>&#163;</span>199<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            tAnswPrice.innerHTML='<span>&#163;</span>79<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb1Price.innerHTML='<span>&#163;</span>199<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb2Price.innerHTML='<span>&#163;</span>226<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            comb3Price.innerHTML='<span>&#163;</span>226<span>.99</span><span class="serviceVat">+ VAT</span>';
        break;

        case "3":
            vBussAddPrice.innerHTML='<span>&#163;</span>89<span>.99</span><span class="serviceVat">+ VAT</span>';
            vBussPlusPrice.innerHTML='<span>&#163;</span>119<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            tAnswPrice.innerHTML='<span>&#163;</span>49<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb1Price.innerHTML='<span>&#163;</span>104<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb2Price.innerHTML='<span>&#163;</span>139<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            comb3Price.innerHTML='<span>&#163;</span>139<span>.99</span><span class="serviceVat">+ VAT</span>';
        break;

        case "1":
            vBussAddPrice.innerHTML='<span>&#163;</span>39<span>.99</span><span class="serviceVat">+ VAT</span>';
            vBussPlusPrice.innerHTML='<span>&#163;</span>54<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            tAnswPrice.innerHTML='<span>&#163;</span>24<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb1Price.innerHTML='<span>&#163;</span>54<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb2Price.innerHTML='<span>&#163;</span>69<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            comb3Price.innerHTML='<span>&#163;</span>69<span>.99</span><span class="serviceVat">+ VAT</span>';
        break;

        default:
            vBussAddPrice.innerHTML='<span>&#163;</span>39<span>.99</span><span class="serviceVat">+ VAT</span>';
            vBussPlusPrice.innerHTML='<span>&#163;</span>54<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            tAnswPrice.innerHTML='<span>&#163;</span>24<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb1Price.innerHTML='<span>&#163;</span>54<span>.99</span><span class="serviceVat">+ VAT</span>';
            comb2Price.innerHTML='<span>&#163;</span>69<span>.99</span><span class="serviceVat serviceVat--popular">+ VAT</span>';
            comb3Price.innerHTML='<span>&#163;</span>69<span>.99</span><span class="serviceVat">+ VAT</span>';
    }
}