// Your code goes here

//Header Image Skew and Unskew Events
const headerimg = document.querySelector('header img');
headerimg.addEventListener('mouseenter', () => {
    headerimg.style.transform="skew(30deg, 20deg)";
})

headerimg.addEventListener('mouseleave', () => {
    headerimg.style.transform="";
})

//Nav Flippy 
const body = document.querySelector('body');
const navitems = document.querySelectorAll('.main-navigation nav a');
console.log(navitems);
body.addEventListener('scroll', () => {
    navitems.forEach(obj => {
        obj.style.fontSize="50px";

    })
})
