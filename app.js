// NAVIGATION   MENU

const hamBurger = document.getElementById("hamBurger");
const navigation = document.getElementById("navigation");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");

hamBurger.addEventListener("click", () => {
    l1.classList.toggle("line-1")
    l2.classList.toggle("line-2")
    l3.classList.toggle("line-3")
    navigation.classList.toggle("mobile-nav")
});


// CAROUSEL   SLIDER

const carousel = [...document.querySelectorAll(".carousel-images")]


carousel.forEach((item) => {
    let contentDimension = item.getBoundingClientRect().width;
    console.log("Content Dimension", contentDimension);
    console.log("Scroll Left: ", item.scrollLeft)
    console.log("Scroll Width: ", item.scrollWidth)
    console.log("Offset Width: ", item.offsetWidth)
    item.scrollLeft = contentDimension;
    console.log("Offset Width: ", item.scrollLeft)
    const slideCarousel = () => {
        if (item.offsetWidth + item.scrollLeft >= item.scrollWidth) {
            item.scrollLeft = 0;
            console.log("Its On the left")
        }
        else {
            item.scrollLeft += contentDimension;
            console.log(item.offsetWidth, item.scrollLeft, item.scrollWidth)
        } 
    }
    setInterval(() => slideCarousel(), 4000);
})
