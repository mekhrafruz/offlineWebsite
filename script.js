// javscirpt image changing logic
const image = document.getElementById("image");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", () => {
    image.src = "image1.jpg";
});
btn2.addEventListener("click", () => {
    image.src = "image2.jpg";
});
