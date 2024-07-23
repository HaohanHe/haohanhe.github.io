window.onscroll = function() {scrollFunction()};  
  
function scrollFunction() {  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {  
        document.getElementsByClassName("navbar")[0].classList.add("scrolled");  
    } else {  
        document.getElementsByClassName("navbar")[0].classList.remove("scrolled");  
    }  
}
