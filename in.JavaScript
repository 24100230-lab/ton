let mainImage;
let descriptionDiv;
let originalSrc;
let originalAlt;

window.onload = function() {
    mainImage = document.getElementById('main-image');
    descriptionDiv = document.getElementById('description-text');

    if (!mainImage || !descriptionDiv) {
        console.error("LỖI DOM: Không thể tìm thấy 'main-image' hoặc 'description-text'. Kiểm tra lại ID trong index.html.");
        return; 
    }
    originalSrc = mainImage.src;
    originalAlt = mainImage.alt; 

    console.log("Script Thư viện Ảnh Tương tác đã sẵn sàng.");
};
function updateImage(thumbnail) {
    if (!mainImage || !descriptionDiv) return;

    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    descriptionDiv.innerHTML = thumbnail.alt;
}
function resetImage() {
    if (!mainImage || !descriptionDiv) return;

    mainImage.src = originalSrc;
    mainImage.alt = originalAlt;
    descriptionDiv.innerHTML = originalAlt;
}
