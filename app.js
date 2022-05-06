const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


slides.forEach( (slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', ()=>{
    counter++;
    carrousel();
});

prevBtn.addEventListener('click', ()=> {
    counter--;
    carrousel();
});

function carrousel() {

    if(counter === slides.length){
        counter = 0;
    }

    if(counter < 0){
        counter = slides.length - 1;
    }
    
    slides.forEach( slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}







