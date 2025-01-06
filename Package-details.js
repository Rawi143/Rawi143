

let plus = document.querySelector('.quantity .plus');
let minus = document.querySelector('.quantity .min');
let number = document.querySelector('.quantity span');
let moreLink = document.querySelector('.section1 .discription .mor');
let lessLink = document.querySelector('.section1 .discription .les');
let moreText = document.querySelector('.section1 .discription .showMore');

plus.onclick = () => {
    number.innerHTML = parseFloat(number.innerHTML) + 1;
}
minus.onclick = () => {
    if (number.innerHTML > 1) {
        number.innerHTML = parseFloat(number.innerHTML) - 1;
    } else {
        alert("you can not minus");
    }
};

moreLink.onclick = () =>{
    moreText.classList.remove("showMore");
    moreLink.classList.add("showMore");
}
lessLink.onclick = () =>{
    moreText.classList.add("showMore");
    moreLink.classList.remove("showMore");
}


 let screenWidth = window.innerWidth;
let sec3Img = document.querySelector('main .section3 img');
if (screenWidth <= 767) {
    sec3Img.style.display = "none";
} else {
    sec3Img.style.display = "block";
}



