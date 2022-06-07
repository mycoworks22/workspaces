// Virtual Business Address - price change based on period 
function buyServicePrice1(){ 

   //select
   const virtBusAddSelect = document.querySelector('#virtBusAddSelect');
   const virtBusAddSelectValue = virtBusAddSelect.options[virtBusAddSelect.selectedIndex].value;

   //price
   const virtBusAddPrice = document.querySelector('#virtBusAddPrice');

   switch(virtBusAddSelectValue){

      case "12":
         virtBusAddPrice.innerHTML='&#163;249.99 <span>+VAT</span>';
      break;

      case "6":
         virtBusAddPrice.innerHTML='&#163;159.99 <span>+VAT</span>';
      break;

      case "3":
         virtBusAddPrice.innerHTML='&#163;89.99 <span>+VAT</span>';
      break;

      case "1":
         virtBusAddPrice.innerHTML='&#163;39.99 <span>+VAT</span>';
      break;

      default:
         virtBusAddPrice.innerHTML='&#163;249.99 <span>+VAT</span>';
   }
}


// Virtual Business Plus - price change based on period 
function buyServicePrice2(){ 

   //select
   const virtBusPlusSelect = document.querySelector('#virtBusPlusSelect');
   const virtBusPlusSelectValue = virtBusPlusSelect.options[virtBusPlusSelect.selectedIndex].value;

   //price
   const virtBusPlusPrice = document.querySelector('#virtBusPlusPrice');

   switch(virtBusPlusSelectValue){

      case "12":
         virtBusPlusPrice.innerHTML='&#163;299.99 <span>+VAT</span>';
      break;

      case "6":
         virtBusPlusPrice.innerHTML='&#163;199.99 <span>+VAT</span>';
      break;

      case "3":
         virtBusPlusPrice.innerHTML='&#163;119.99 <span>+VAT</span>';
      break;

      case "1":
         virtBusPlusPrice.innerHTML='&#163;54.99 <span>+VAT</span>';
      break;

      default:
         virtBusPlusPrice.innerHTML='&#163;299.99 <span>+VAT</span>';
   }
}

// vba + tas 
function buyServicePrice3(){ 

   //select
   const virtBusPlusSelect = document.querySelector('#vbaTasSelect');
   const virtBusPlusSelectValue = virtBusPlusSelect.options[virtBusPlusSelect.selectedIndex].value;

   //price
   const virtBusPlusPrice = document.querySelector('#vbaTasPrice');

   switch(virtBusPlusSelectValue){

      case "12":
         virtBusPlusPrice.innerHTML='&#163;349.99 <span>+VAT</span>';
      break;

      case "6":
         virtBusPlusPrice.innerHTML='&#163;199.99 <span>+VAT</span>';
      break;

      case "3":
         virtBusPlusPrice.innerHTML='&#163;104.99 <span>+VAT</span>';
      break;

      case "1":
         virtBusPlusPrice.innerHTML='&#163;54.99 <span>+VAT</span>';
      break;

      default:
         virtBusPlusPrice.innerHTML='&#163;349.99 <span>+VAT</span>';
   }
}

// vbp + tas 
function buyServicePrice4(){ 

   //select
   const select = document.querySelector('#vbpTasSelect');
   const selectValue = select.options[select.selectedIndex].value;

   //price
   const price = document.querySelector('#vbpTasPrice');

   switch(selectValue){

      case "12":
         price.innerHTML='&#163;399.99 <span>+VAT</span>';
      break;

      case "6":
         price.innerHTML='&#163;226.99 <span>+VAT</span>';
      break;

      case "3":
         price.innerHTML='&#163;139.99 <span>+VAT</span>';
      break;

      case "1":
         price.innerHTML='&#163;69.99 <span>+VAT</span>';
      break;

      default:
         price.innerHTML='&#163;399.99 <span>+VAT</span>';
   }
}

// vbp + web
function buyServicePrice5(){ 

   //select
   const select = document.querySelector('#vbpWebSelect');
   const selectValue = select.options[select.selectedIndex].value;

   //price
   const price = document.querySelector('#vbpWebPrice');

   switch(selectValue){

      case "12":
         price.innerHTML='&#163;399.99 <span>+VAT</span>';
      break;

      case "6":
         price.innerHTML='&#163;226.99 <span>+VAT</span>';
      break;

      case "3":
         price.innerHTML='&#163;139.99 <span>+VAT</span>';
      break;

      case "1":
         price.innerHTML='&#163;69.99 <span>+VAT</span>';
      break;

      default:
         price.innerHTML='&#163;399.99 <span>+VAT</span>';
   }
}

// tas
function buyServicePrice6(){ 

   //select
   const select = document.querySelector('#tasSelect');
   const selectValue = select.options[select.selectedIndex].value;

   //price
   const price = document.querySelector('#tasPrice');

   switch(selectValue){

      case "12":
         price.innerHTML='&#163;129.99 <span>+VAT</span>';
      break;

      case "6":
         price.innerHTML='&#163;79.99 <span>+VAT</span>';
      break;

      case "3":
         price.innerHTML='&#163;49.99 <span>+VAT</span>';
      break;

      case "1":
         price.innerHTML='&#163;24.99 <span>+VAT</span>';
      break;

      default:
         price.innerHTML='&#163;129.99 <span>+VAT</span>';
   }
}