let links =  document.querySelectorAll(".links"),
    btn = document.querySelectorAll('.btn'),
    previousBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

const active = () =>{
    links.forEach((link,position) =>{
        link.addEventListener('click',(e)=>{
        e.preventDefault();
        link.parentElement
        link.classList.toggle("active");
        btn[position].classList.toggle("active")
    })
    })
}

active();

