


let humburger = document.querySelector(".humburger"); 
let menu = document.querySelector(".menu"); 


humburger.addEventListener('click' , function(){

  
  menu.classList.toggle('active')



})








//...................Sticky Navbar starts ...............//
$(function(){

    $(window).on('scroll', function(){
  
      if ($(window).scrollTop ()){
  
          $('.navbar').addClass('nav-white'); 
      }
  
  
      else{
          $('.navbar').removeClass('nav-white');
      }
  
  }) 
  
  
   
  });  
  
  
  
  
  //...................Sticky Navbar Ends ...............//


//   logo add remove  starts here 
 
$(function(){ 

    $(window).on('scroll', function(){
  
      if ($(window).scrollTop ()){
  
          $('.logo').addClass('d-none');   
          
      } 
  
  
      else{ 
          $('.logos').removeClass('d-none'); 
        
      }
  
  }) 
  
  
   
  });  
  


  
