const mainImage = document.getElementById('main-image');
const descriptionDiv = document.getElementById('description-text');

const originalSrc = mainImage.src;
const originalAlt = mainImage.alt; 

function updateImage(thumbnail) {
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    descriptionDiv.innerHTML = thumbnail.alt;
    
    console.log(`Đã cập nhật ảnh lớn thành: ${thumbnail.alt}`);
}

function resetImage() {
    mainImage.src = originalSrc;
    mainImage.alt = originalAlt;
    descriptionDiv.innerHTML = originalAlt;

    console.log("Đã hoàn tác về ảnh ban đầu.");
}
