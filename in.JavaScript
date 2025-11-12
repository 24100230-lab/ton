window.addEventListener('load', () => {
    
    console.log("Trang đã tải xong (Bước 8). Bắt đầu gán sự kiện.");

    const images = document.querySelectorAll('#gallery img');

    for (let i = 0; i < images.length; i++) {
        let currentImage = images[i];

        console.log(`Đang gán sự kiện cho ảnh ${i + 1}`);

        currentImage.setAttribute('tabindex', '0');

        currentImage.addEventListener('mouseover', (event) => {
            console.log('Sự kiện: MOUSEOVER - Chuột đang ở trên ảnh');
        });

        currentImage.addEventListener('mouseleave', (event) => {
            console.log('Sự kiện: MOUSELEAVE - Chuột đã rời khỏi ảnh');
        });

        currentImage.addEventListener('focus', (event) => {
            console.log('Sự kiện: FOCUS - Ảnh đã được chọn bằng bàn phím');
        });

        currentImage.addEventListener('blur', (event) => {
            console.log('Sự kiện: BLUR - Ảnh đã bị bỏ chọn bằng bàn phím');
        });
    }
});
