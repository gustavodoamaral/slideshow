let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth //tamanho do slide 

//document.querySelector('.slider-width').style.width = `${sliderWidth*totalSlides}px`; montagem da largura das imagens (tamanho fixo)

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`; // slide tela inteira 

//document.querySelector('.slider-controls').style.width = `${sliderWidth}px`; manipulação da largura dos botões para servir ao tamanho da imagem 

document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`; 

function goPrev() {
    currentSlide --;
    if(currentSlide < 0){
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext(){
    currentSlide ++;
    if(currentSlide > (totalSlides -1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let sliderNewWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderNewWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000)