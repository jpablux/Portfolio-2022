window.onload = function(){
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu =document.querySelector('.mobile-menu-slider');
    const switch_btn = document.querySelector('.slider');
    const light = document.getElementById('light');
    const uiDesign = document.getElementById('uiDesign');
    const uiDesignCard = document.getElementById('uiDesignCard');
    const prototyping = document.getElementById('prototyping');
    const protoCard = document.getElementById('prototypingCard');
    const wireframing = document.getElementById('wireframing');
    const wireframingCard = document.getElementById('wireframingCard');
    const uiResearch = document.getElementById('uiResearch');
    const uiResearchCard = document.getElementById('uiResearchCard');
    const architecture = document.getElementById('architecture');
    const architectureCard  = document.getElementById('architectureCard');
    const userTesting = document.getElementById('userTesting');
    const userTestingCard = document.getElementById('userTestingCard');
    const webDesign =  document.getElementById('webDesign');
    const webDesignCard = document.getElementById('webDesignCard');
    const appDesign = document.getElementById('appDesign');
    const appDesignCard = document.getElementById('appDesignCard');
    const dModeling = document.getElementById('3dModeling');
    const dModelingCard = document.getElementById('3dModelingCard');
    const closeBtn = document.querySelectorAll('.close-icon');
    const alldivs = document.querySelectorAll('.card-clicked');
    const downBtn = document.querySelector('.scroll-down');
    const section = document.getElementById('uiResearch');
    
    
for (var i= 0; i < closeBtn.length; i++){
        closeBtn[i].addEventListener('click', function(){
           for(var i = 0; i < alldivs.length; i++){
            alldivs[i].style.display = 'none'; 
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

 dModeling.addEventListener('click', function(){
    dModelingCard.style.display = 'flex';
 });

 appDesign.addEventListener('click', function(){
    appDesignCard.style.display = 'flex';
 });

 webDesign.addEventListener('click', function(){
    webDesignCard.style.display = 'flex';
 });

 userTesting.addEventListener('click', function(){
    userTestingCard.style.display = 'flex';
 });

 architecture.addEventListener('click', function(){
    architectureCard.style.display = 'flex';
 });

 uiResearch.addEventListener('click', function(){
    uiResearchCard.style.display = 'flex';
 });


 wireframing.addEventListener('click', function(){
    wireframingCard.style.display = 'flex';
 });


 uiDesign.addEventListener('click', function(){
    uiDesignCard.style.display = 'flex';
 });

 prototyping.addEventListener('click', function(){
     protoCard.style.display = 'flex';
 });

 var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    
  });

downBtn.addEventListener('click', function(){
   section.scrollIntoView({behavior: 'smooth', block: 'end', inline:'nearest'});
});

}
