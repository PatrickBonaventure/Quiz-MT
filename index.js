let navbar = document.querySelector('#zonaprivada');
let menuBtn = document.querySelector('#acceso');

menuBtn.onclick = () =>{
  

   if (navbar.style.visibility === 'visible') {
    navbar.style.visibility = 'hidden';
  } else {
    navbar.style.visibility = 'visible';
  }
   
};



let accepetarcookies = document.querySelector('#acceptacookies');
let escondercookies = document.querySelector('#cookiesweb');
let rechazarcookies = document.querySelector('#rechazacookies');

accepetarcookies.onclick = () =>{
  
  escondercookies.style.visibility = 'hidden';
     
};


rechazarcookies.onclick = () =>{
  
  escondercookies.style.visibility = 'hidden';
       
};