let currentImageIndex = 0;
const images = [
  "img/Products/f1.png",
  "img/Products/f2.png",
  "img/Products/f3.png",
  "img/Products/f4.jpg"
];

const mainImg = document.querySelector("#MainImg");
const smallImgs = document.querySelectorAll(".small-img");

function changeMainImage(newImageIndex) {
  currentImageIndex = newImageIndex;
  mainImg.src = images[newImageIndex];
}

smallImgs.forEach((img, index) => {
  img.addEventListener("click", () => {
    changeMainImage(index);
  });
});

