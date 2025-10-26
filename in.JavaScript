const mainImage = document.getElementById('main-image');
const descriptionDiv = document.getElementById('description-text');

const originalSrc = mainImage.src;
const originalAlt = mainImage.alt; 

function updateImage(thumbnail) {
    // Cập nhật thuộc tính src, alt của ảnh lớn và nội dung mô tả
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    descriptionDiv.innerHTML = thumbnail.alt;
    
    console.log(`Đã cập nhật ảnh lớn thành: ${thumbnail.alt}`);
}

function resetImage() {
    // Đặt lại src, alt và văn bản mô tả về giá trị ban đầu
    mainImage.src = originalSrc;
    mainImage.alt = originalAlt;
    descriptionDiv.innerHTML = originalAlt;

    console.log("Đã hoàn tác về ảnh ban đầu.");
}
