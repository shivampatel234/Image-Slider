
// let form = document.querySelector('form');
// let inputs = document.querySelectorAll("input")
// form.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     validation()

// })
// // inputs.forEach(input=>{
// //     input.addEventListener('input',(e)=>{
// //         e.preventDefault()
// //         validation()

// //     })
// // })
// function validation(){
//     let first_Name = document.getElementById("name").value.trim();
//     let Last_Name = document.getElementById("L-name").value.trim();
//     let email = document.getElementById("Email").value.trim();
//     let password = document.getElementById("password").value.trim();
//     let con_password = document.getElementById("Con-password").value.trim();


//     checkinput('name',first_Name,'First Name should not be empty and must have at least 3 characters',3);
//     checkinput('L-name',Last_Name,'last Name should not be empty and must have at least 3 characters',3);
//     checkinput('Email',email,'Email should not be empty ',1);
//     checkinput('password',password,'Password must be at least 6 characters',6);
//     checkConfirmPassword('Con-password', password,con_password);
// }
// function checkinput(id,value,massage,minlength){
//     let inputfield =document.getElementById(id);
//     let parentbox = inputfield.parentElement;
//     let small = parentbox.querySelector("small")
//     if(value.length < minlength){
//         small.innerText = massage;
//         parentbox.classList.add("error");
//         parentbox.classList.remove("success")

//     }
//     else{
//         parentbox.classList.add("success");
//         parentbox.classList.remove("error")

//     }
    
 
   

// }
// function checkConfirmPassword(id,pass,conPass){
//     let inputfield =document.getElementById(id);
//     let parentbox = inputfield.parentElement;
//     let small = parentbox.querySelector("small")
//     if(conPass !== pass){
//         small.innerText = "Passwords do not match";
//         parentbox.classList.add("error");
//         parentbox.classList.remove("success")

//     }
//     else{
//         parentbox.classList.add("success");
//         parentbox.classList.remove("error")

//     }


// }

////////////////////////////////////////////////////////////

// let slides = document.querySelectorAll(".slide");
// let counter = 0
// // console.log(slides)
// slides.forEach((slide,index)=>{
//     slide.style.left =`${index * 100}%`

// })
// function goPrev(){
//     counter--
//     if (counter < 0) {
//         counter = slides.length - 1; // Reset to last image
//     }
//     slidImages()

// }
// function goNext(){
//     counter++
//     if (counter >= slides.length) {
//         counter = 0; // Reset to first image
//     }
//     slidImages()

// }
// function slidImages(){
//     slides.forEach((slide)=>{
//         slide.style.transform =`translateX(-${counter*100}%)`
    
//     })

// }


//////////////////////////////////////////////////////////////////////////////

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