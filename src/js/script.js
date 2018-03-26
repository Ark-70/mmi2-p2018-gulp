document.addEventListener("DOMContentLoaded", function(event) {

  let $burger = document.querySelector('.nav__burger');
  let $menu = document.querySelector('.menu');

  $burger.addEventListener("click", function(){
    $menu.classList.toggle('menu--open');
  });

});
