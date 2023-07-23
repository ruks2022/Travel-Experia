//background image slider

const sliderImage = ["travel-experia1.jpeg", "travel-experia2.jpeg", "travel-experia3.jpeg", "travel-experia4.jpeg", "travel-experia5.jpeg", "travel-experia6.jpeg"];

let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000)

const changeSliderImage = () => {
    sliderGridItems.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {

                if(index == sliderGridItems.length -1){
                    if(currentImage > sliderImage.length -1){
                        currentImage = 0;
                    }
                    else{
                        currentImage++;
                    }

                    slider.src = `img/${sliderImage[currentImage]}`;

                    sliderGridItems.map((item, i)=> {
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i*100)
                    })
                }

            }, 100)

        }, index*100)
    })
}

//navbar 

// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll', () => {
//     if(scrollY >= 188){
//         navbar.classList.add('bg');
//     }else{
//         navbar.classList.remove('bg');
//     }
// })


const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () =>{
    if(scrollY >= 188){
        navbar.classList.add('bg');
    }
    else{
        navbar.classList.remove('bg');
    }
})