
// Di chuyển logo liên tục
document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    const logos = logoContainer.children;
    const logoWidth = logos[0].clientWidth + 20; // Lấy chiều rộng của một logo cộng với khoảng cách
    const totalWidth = logoWidth * logos.length; // Tính tổng chiều rộng của tất cả logo
    let position = 0;

    function moveLogos() {
        position -= 1; // Di chuyển sang trái
        if (Math.abs(position) >= totalWidth) {
            position = 0; // Reset vị trí khi đã di chuyển hết
        }
        logoContainer.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveLogos); // Gọi lại hàm để tiếp tục di chuyển
    }

    moveLogos(); // Bắt đầu di chuyển logo
});

// Hiệu ứng xuất hiện khi cuộn xuống
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8; // Đặt ngưỡng để kích hoạt hiệu ứng
        fadeInElements.forEach(element => {
            const boxTop = element.getBoundingClientRect().top; // Lấy vị trí của phần tử
            if (boxTop < triggerBottom) {
                element.classList.add('visible'); // Thêm lớp visible khi phần tử xuất hiện
            } else {
                element.classList.remove('visible'); // Xóa lớp nếu không còn trong khung nhìn
            }
        });
    }

    window.addEventListener('scroll', checkVisibility); // Kiểm tra khi cuộn
    checkVisibility(); // Kiểm tra ngay khi tải trang
});
