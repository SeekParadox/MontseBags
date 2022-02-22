function addToCart() {
  
  let nameP = document.querySelector('#name1').textContent;
  
  if(localStorage.getItem('productPress1') == null)  localStorage.setItem('productPress1', 0 );
  let y = parseInt(localStorage.getItem('productPress1'));
      y+=1;
      localStorage.setItem('productPress1',y);
  localStorage.setItem('name1', nameP);
  let costP = document.querySelector('#cost1').textContent;
  let x = costP.replace(/[^0-9.]/g, '');
  localStorage.setItem('cost1',x);
  

  return false;
}

function addToCart1() {
  
  let nameP = document.querySelector('#name2').textContent;
  
  if(localStorage.getItem('productPress2') == null)  localStorage.setItem('productPress2', 0 );
  let y = parseInt(localStorage.getItem('productPress2'));
  
      y+=1;
      localStorage.setItem('productPress2',y);
    console.log(y);

  localStorage.setItem('name2', nameP);
  let costP = document.querySelector('#cost2').textContent;
  let x = costP.replace(/[^0-9.]/g, '');
  localStorage.setItem('cost2',x);
  

  return false;
}

function addToCart3() {
  
  let nameP = document.querySelector('#name3').textContent;
  
  if(localStorage.getItem('productPress3') == null)  localStorage.setItem('productPress3', 0 );
  let y = parseInt(localStorage.getItem('productPress3'));
  
      y+=1;
      localStorage.setItem('productPress3',y);
    console.log(y);

  localStorage.setItem('name3', nameP);
  let costP = document.querySelector('#cost3').textContent;
  let x = costP.replace(/[^0-9.]/g, '');
  localStorage.setItem('cost3',x);
  

  return false;
}

/*let cart = document.getElementById('linkToChange')
cart.addEventListener('click',function(){
    if(window.innerWidth >= 900) {
        
        cart.href ='checkout.html';

    }

});*/

//add event listen for the shopping cart icon if icon is less than 900px
