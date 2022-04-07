
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
              $(".nav").css("background" , "transparent");
              $(".nav").css("color" , "#fff");
            }
            else{
                $(".nav").css("background" , "#fff");  	
                $(".nav").css("color" , "#000");  	
            }
        })
var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');
var nav= document.getElementById('nav');

window.onscroll = function(){
    if(window.pageYOffset >= menu.offsetTop && window.matchMedia("(min-width: 640px)").matches){
        nav.classList.add('sticky');
    }
    else{
        nav.classList.remove('sticky');
    }
}

$(document).ready(function() { 
    $("#bars").click(function() { 
    $("#sideBar").toggle(); 
    }); 
    }); 

$(document).ready(function() { 
    $("#dropdown-menu").hover(function() { 
    $("#dropdown-content").toggle(); 
    }); 
    }); 
      })
const trunc = document.querySelector('.trunc');
trunc.innerHTML = trunc.innerHTML.substring(0, 150) + '...'
    
    var myIndex = 0;
    carousel();
    
        
        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          myIndex++;
          if (myIndex > x.length) {myIndex = 1}    
          x[myIndex-1].style.display = "block";  
          setTimeout(carousel, 6000); // Change image every 6 seconds
        }
          
  