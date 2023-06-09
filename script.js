let menu=document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');

}
// form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
// for picture slides
var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }
    function showSlides(n)
    {
         var i;
        var slides=document.getElementsByClassName("mySlides");
        var dots=document.getElementsByClassName("dot");
        if(n > slides.length){slideIndex= 1 }
        if(n<1){slideIndex= slides.length }
    
    for(i=0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    for(i=0; i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active", "");
    }
   slides[slideIndex-1].style.display="block";
   dots[slideIndex-1].className+="active";
}
// auto slide
// var slideIndex=0;
// showSlides();
// function showSlides(){
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for(i=0;i<slides.length;i++)
//     {
//         slides[i].style.display="none"
//     }
//     slideIndex++;
//     if(slideIndex > slides.length){
//         slideIndex=1
//     }
//     slides[slideIndex - 1].style.display="block";
//     setTimeout(showSlides,3000);
// // change image every two seconds
// }