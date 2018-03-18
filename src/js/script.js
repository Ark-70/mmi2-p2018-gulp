document.addEventListener("DOMContentLoaded", function(event) {

  let $burger = document.querySelector('.nav__burger');
  let $menu = document.querySelector('.menu');

  $burger.addEventListener("click", function(){
    $menu.style.height = ($menu.style.height == "auto")? 0 : "auto";
  });

});
