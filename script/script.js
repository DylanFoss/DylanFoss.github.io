// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onload= function() {
    var element = document.getElementById('id');
    element.style.opacity = "0.0";
    element.style.filter  = 'alpha(opacity=0';

    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
}

window.onscroll = function() {
    var top = window.scrollY;
    var element = document.getElementById('id');
    var ele = document.getElementById('home');
    var bot = ele.offsetHeight;
    if(top >= bot) {
        element.style.opacity = "1.0";
        element.style.filter  = 'alpha(opacity=100)';
    }
    else {
       //header.classList.add('navbarDark');
       let x = lerp(0.0, 1.0, easeIn(top/bot));
       element.style.opacity = x;
    }
}

function lerp(a, b, t)
{
    return a * (1-t) + b * t;
}

function easeIn( t)
{
    return t*t;
}