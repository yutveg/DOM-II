// Your code goes here

//Mouse Enter
const headerImg = document.querySelector('header img');
headerImg.addEventListener('mouseenter', () => {
    headerImg.style.transform="skew(30deg, 20deg)";
})

//Mouse Leave
headerImg.addEventListener('mouseleave', () => {
    headerImg.style.transform="";
})

//Scroll 
const imgItems = document.querySelectorAll('.content-section img');
console.log(imgItems);
window.addEventListener('scroll', () => {
    imgItems.forEach( 
        function(currentValue) { 
          currentValue.style.transform="rotate(0.5turn)"; 
        }
      );
})

//Double Click
const mainContent = document.querySelector('.content-section');
const mainContentInverse = document.querySelector('.inverse-content')
mainContent.addEventListener('dblclick', () => {
    mainContent.style.flexDirection="row-reverse";
    mainContentInverse.style.flexDirection="row-reverse";
})
mainContentInverse.addEventListener('dblclick', () => {
    mainContent.style.flexDirection="row-reverse";
    mainContentInverse.style.flexDirection="row-reverse";
})


//Click
mainContent.addEventListener('click', () => {
    imgItems.forEach( 
        function(currentValue) { 
          currentValue.style.transform=""; 
        }
      );
})
mainContentInverse.addEventListener('click', () => {
    imgItems.forEach( 
        function(currentValue) { 
          currentValue.style.transform=""; 
        }
      );
})

//Wheel
const bod = document.querySelector('body');
const navHeader = document.querySelector('.main-navigation');
console.log(navHeader);
bod.addEventListener('wheel', () => {
    navHeader.style.position="absolute";
    navHeader.style.top="190%";
    navHeader.style.transform="rotate(0.5turn)";
})

//Context
navHeader.addEventListener('contextmenu', () => {
    navHeader.style.backgroundImage="linear-gradient(319deg, #ffbc42 0%, #28965a 37%, #ee6352 100%)";
})

//Mouseover
const brandName = document.querySelector('.main-navigation h1')
brandName.addEventListener('mouseover', () => {
    navHeader.style.position="fixed";
    navHeader.style.top="0";
})

//Drag
const lastImg = document.querySelector('.content-destination img');
lastImg.addEventListener('drag', () => {
    lastImg.style.width="100%";
    navHeader.style.transform="";
})

//Auxclick
bod.addEventListener('auxclick', () => {
    bod.style.backgroundImage="linear-gradient(319deg, #e4ff6d 0%, #ffad42 37%, #e4ff6d 100%)";
})