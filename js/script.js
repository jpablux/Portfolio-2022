window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu =document.querySelector('.mobile-menu-slider');
    const switch_btn = document.querySelector('.slider');
    const light = document.getElementById('light');
    const closeBtn = document.querySelectorAll('.close-icon');
    const downBtn = document.querySelector('.scroll-down');
    const section = document.getElementById('uiResearch');
    const alldivs = document.querySelectorAll('.card-clicked');
    const allcards = document.querySelectorAll('.cards');
    const cards = document.getElementById('service-cards');
    const body = document.getElementById('documentBody');


   for(var i = 0; i < allcards.length; i++) {
      allcards[i].addEventListener("click", CardClick(i));
}
function CardClick(i) {
   return function() {
      alldivs[i].style.display = 'flex';
      cards.classList.add('non-clickable');
   };
   
}

   for (var i= 0; i < closeBtn.length; i++){
      closeBtn[i].addEventListener('click', function(){
         for(var i = 0; i < alldivs.length; i++){
          alldivs[i].style.display = 'none'; 
         cards.classList.remove('non-clickable');
         }
      });
}



    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        
    });

    switch_btn.addEventListener('click', function(){

        if(light.href.match('styles/styles.css')){
            light.href = 'styles/dark.css';
        } 
        else{
            light.href = 'styles/styles.css';   
        }
 });

  var swiper = new Swiper(".mySwiper", {
     effect: "cards",
     grabCursor: true,
    
  });

downBtn.addEventListener('click', function(){
   section.scrollIntoView({behavior: 'smooth', block: 'end', inline:'nearest'});
});

}
