document.addEventListener("DOMContentLoaded", function(){

  // make it as accordion for smaller screens
  if (window.innerWidth > 992) {

    document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
      
      everyitem.addEventListener('mouseover', function(e){

        let el_link = this.querySelector('a[data-bs-toggle]');

        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.add('show');
           nextEl.classList.add('show');
        }
        
      });
      everyitem.addEventListener('mouseleave', function(e){
         let el_link = this.querySelector('a[data-bs-toggle]');
        
        if(el_link != null){
          let nextEl = el_link.nextElementSibling;
          el_link.classList.remove('show');
           nextEl.classList.remove('show');
        }
        

      })
    });

  }
  // end if innerWidth
}); 



$(document).ready(function () {
  // mobile menu
  openNav = () => {
      document.getElementById("myNav").style.height = "100%";
  }

  closeNav = () => {
      document.getElementById("myNav").style.height = "0%";
  }
  $("#pages").click(function () {
      $("#pages-slid").slideToggle("slow");
  });
  $("#article").click(function () {
      $("#article-slid").slideToggle("slow");
  });
  $("#portfolio").click(function () {
      $("#portfolio-slid").slideToggle("slow");
  });


});


