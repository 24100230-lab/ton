const originalSrc = "images/placeholder.jpg";
const originalAlt = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
const mainImage = document.getElementById('main-image');
const descriptionDiv = document.getElementById('description-text');

function updateImage(thumbnail) {

    console.log("Sự kiện kích hoạt trên ảnh:", thumbnail.src);
    console.log("Alt text:", thumbnail.alt);

    mainImage.src = thumbnail.src;

    mainImage.alt = thumbnail.alt;

    descriptionDiv.innerHTML = thumbnail.alt;
}
function resetImage() {
  
    descriptionDiv.innerHTML = originalAlt;

    mainImage.src = originalSrc;
    mainImage.alt = originalAlt;
}
console.log("Script Thư viện Ảnh đã tải thành công.");
