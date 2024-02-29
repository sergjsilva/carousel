const slider=document.querySelectorAll(".carousel");//images container

const nextBtn=document.querySelector(".btn-next");
const prevBtn=document.querySelector(".btn-prev");


let currentSlider=0;
let lastSlider=slider.length-1;

slider.forEach((image, index)=>image.style.transform=`translateX(${index*100}%)`);


function nextButtonClickHandler(){
    currentSlider++;
    if(currentSlider>lastSlider){
        currentSlider=0;
    }
    console.log("Current = ",currentSlider);
    slider.forEach((image, index)=>image.style.transform=`translateX(${(index-currentSlider)*100}%)`);
}

function prevButtonClickHandler(){
    currentSlider--;
    if(currentSlider<0){
        currentSlider=lastSlider;
    }
    console.log("Current = ",currentSlider);
    slider.forEach((image, index)=>image.style.transform=`translateX(${(index-currentSlider)*100}%)`);
}

nextBtn.addEventListener("click", nextButtonClickHandler);
prevBtn.addEventListener("click", prevButtonClickHandler);