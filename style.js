let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove(active);
    }

}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

document.querySelectorAll('.small-image-1').forEach(images =>{
    imahes.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    imahes.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    imahes.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});

let countData = new Data('aug 1, 2021 00.00.00').getline();

function countData(){

    let noe = new Data().getline();
    gap = countData = now;

    let seconds = 10000;
    let miuntes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap %(hours)) /(minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('miuntes').innerText = m;
    document.getElementById('seconds').innerText = s;


}

setInterval(function(){
    countDown()
},1000);

var swiper = new swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    autoplay: {
        delay:  4000,
        disableOnInteraction: false,
    },
    navigation:  {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView:  3,
        },
        1000: {
            slidesPerView:  3,
        },
    },
});

var swiper = new swiper(".review-slider",{
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints:  {
        0: {
            slidesPerView: 1,
        },
        550: {
            slidesPerView:  2,
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

    
