 AOS.init();


$('.section3 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('.section3-2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


$('.section3-3 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

$('.section3-4 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.section3-5 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// const images = document.querySelectorAll('.image');
// let currentIndex = 0;

// function moveImage(index) {
//     images[index].style.left = '40px';
//     setTimeout(() => {
//         images[index].style.left = '0px';
//         if (index === images.length - 1) {
//             currentIndex = 0;
//         } else {
//             currentIndex++;
//         }
//         moveImage(currentIndex);
//     }, 5000);
// }

// moveImage(currentIndex);

const images = document.querySelectorAll('.image');
        let currentIndex = 0;
        const moveDistance = 20; // المسافة التي تتحركها الصورة

        function moveImage(index) {
            const image = images[index];
            image.style.left = `${moveDistance}px`; // تحريك الصورة لأسفل

            setTimeout(() => {
                image.style.left = '0px'; // إعادة الصورة إلى مكانها الأصلي
                currentIndex = (currentIndex + 1) % images.length; // تحديث المؤشر للصورة التالية
                moveImage(currentIndex);
            }, 2000); // مدة الحركة (2 ثانية)
        }

        moveImage(currentIndex);




function setLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-ar').style.display = 'none';
        document.querySelector('html').dir = "ltr";
        localStorage.setItem("lg", "en");
    } else if (lang === 'ar') {
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-ar').style.display = 'block';
        document.querySelector('html').dir = "rtl";
        localStorage.removeItem("lg");
    }
};

let language = localStorage.getItem("lg");
if (language) {
    document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-ar').style.display = 'none';
        document.querySelector('html').dir = "ltr";
};

// page-indicator (top)
const indicator = document.querySelector(".page-indicator");
const top_btn = document.querySelector(".top");


window.onscroll = () => {
  let top =
    window.scrollY ||
    document.body.scrollTop ||
    document.documentElement.scrollTop;

  if (top > 100) {
    indicator.classList.add("show");
  } else {
    indicator.classList.remove("show");
  }

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (top / height) * 100 * 3.6;
  indicator.style.background = `conic-gradient(#39B54A ${scrolled}deg, #e1e1e1 0deg)`;

  //   console.log(height);
};

top_btn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

