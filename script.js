/* develop by shivam patel */

let slidImages = document.querySelectorAll('img');
//access the next and prev buttons
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
//access the indicator
let dots = document.querySelectorAll(".dot")
var counter =0;

//code for next button
next.addEventListener("click",()=>{
    slidNext()
})

function slidNext(){
    slidImages[counter].style.animation ='next1 0.5s ease-in forwards';
    if(counter >= slidImages.length-1){
        counter = 0
    }
    else{
        counter++
    }
    slidImages[counter].style.animation ='next2 0.5s ease-in forwards';
    indiCators()

}
//code for prev button
prev.addEventListener("click",()=>{
    slidPrev()
})

function slidPrev(){
    slidImages[counter].style.animation ='prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slidImages.length-1
    }
    else{
        counter--
    }
    slidImages[counter].style.animation ='prev2 0.5s ease-in forwards';
    indiCators()
}

// auto sliding

function autoSliding(){
    deletInterval = setInterval(timer, 3000);
    function timer(){
        slidNext()
        indiCators()
    }
}
autoSliding()

//stop auto sliding when mouse is over

const container = document.querySelector(".slide-container");
container.addEventListener("mouseover", ()=>{
    clearInterval( deletInterval)
})

// resume sliding when mouse is out
container.addEventListener("mouseout", ()=>{
    autoSliding()
})

// add remove actives class from the indicators

function indiCators(){
    for(let i=0; i< dots.length;i++){
        dots[i].className = dots[i].className.replace(' active','')
    }
    dots[counter].className += ' active';
}

// add click event to the indicator

function switchImge(currentImage){
    currentImage.classList.add("active");
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
        slidImages[counter].style.animation ='next1 0.5s ease-in forwards';
        counter = imageId;
        slidImages[counter].style.animation ='next2 0.5s ease-in forwards';

    }
    else if(imageId == counter){
        return
    }
    else{
        slidImages[counter].style.animation ='prev1 0.5s ease-in forwards';
        counter = imageId;
        slidImages[counter].style.animation ='prev2 0.5s ease-in forwards';


    }
    indiCators()
}
