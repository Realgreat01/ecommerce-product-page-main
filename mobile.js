const blur = document.getElementById("blur");
const close = document.getElementById("close");
const navMobile = document.getElementById("nav-mobile");
const menu = document.getElementById("menu");
const items = document.querySelectorAll("#items img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const slide = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
];
let i =0;

close.addEventListener("click",()=>{
    blur.style.display="none";
    navMobile.style.display="none";
    hideCart()
})
menu.addEventListener("click",()=>{
    blur.style.display="block";
    navMobile.style.display="block";
    hideCart()
})

prev.addEventListener("click", ()=>{
    if(i>0){
        i--
    }else{
        i=slide.length-1
    }
    currentItem.src = slide[i];
    hideCart()
})

next.addEventListener("click", ()=>{
    if(i<slide.length-1){
        i++
    }else{
        i=0
    }
    currentItem.src = slide[i];
    hideCart()
})