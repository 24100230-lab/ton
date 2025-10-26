let mainImage;
let descriptionDiv;

window.onload = function() {
    mainImage = document.getElementById('main-image');
    descriptionDiv = document.getElementById('description-text');

    if (!mainImage || !descriptionDiv) {
        console.error("LỖI DOM: Không thể tìm thấy 'main-image' hoặc 'description-text'.");
    }
    
    console.log("Script Thư viện Ảnh đã sẵn sàng.");
};

function changeImage(thumbnail) {
    if (!mainImage || !descriptionDiv) return;

    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    descriptionDiv.innerHTML = thumbnail.alt;
    
    console.log(`Đã thay đổi ảnh lớn thành: ${thumbnail.alt}`);
}
