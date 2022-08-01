var images = document.querySelectorAll('.image img');
var imgGalary = document.querySelector('.galary__img img');
var galaryClose = document.querySelector('.galary__close');
var galaryPrev = document.querySelector('.galary__prev');
var galaryNext = document.querySelector('.galary__next');
var galary = document.querySelector('.galary');

var currentIndex = 0;

function showGalary(){
    currentIndex==0 ? galaryPrev.classList.add('hide') : galaryPrev.classList.remove('hide');
    currentIndex == images.length-1 ? galaryNext.classList.add('hide') : galaryNext.classList.remove('hide');
    
    // galleryImg.src = images[currentIndex].src;

    imgGalary.src = images[currentIndex].src;
    galary.classList.add('show');
}

images.forEach(function(img, index){
    img.addEventListener('click', function(){
        currentIndex = index;
        showGalary();
    });
});

galaryClose.addEventListener('click', function(){
    galary.classList.remove('show');
})

galaryPrev.addEventListener('click', function(){
    // currentIndex!=0 ? currentIndex-- : undefined;
    if(currentIndex!=0) currentIndex--;
    showGalary();
})

galaryNext.addEventListener('click', function(){
    // currentIndex != images.length-1 ? currentIndex++ : undefined;
    if(currentIndex != images.length-1) currentIndex++;
    showGalary();
})

document.addEventListener('keydown', function(event){
    if(event.keyCode==27) galary.classList.remove('show');
})