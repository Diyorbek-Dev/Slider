 let slideIndex =1;
showSlide(slideIndex);
function nextSlide(){
    showSlide(slideIndex += 1)
}
function prevSlide(){
    showSlide(slideIndex -= 1)
}
function defSlide(n){
    showSlide(slideIndex = n)
}

function showSlide(n){

    let images = document.getElementsByClassName('image');  
    if( n > images.length) {
        slideIndex = 1
    }
    if(n < 1 ) {
        slideIndex = images.length
    }           
    for (let slide of images) {
        slide.style.display='none';
    }
    images[slideIndex-1].style.display ='block'
}
