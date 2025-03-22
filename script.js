document.addEventListener('DOMContentLoaded', function() {
    // 1. Xử lý nút Subscribe
    const subscribeButton = document.querySelector('button.btn');
    subscribeButton.addEventListener('click', function() {
        showSubscribeModal();
    });

    // 2. Làm hiệu ứng cho menu
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        link.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    });

    // 3. Làm hiệu ứng cho các bài viết khi hover
    const articleItems = document.querySelectorAll('.article-item');
    articleItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // 4. Hiệu ứng cho tác giả khi hover
    const authorCards = document.querySelectorAll('.grid-cols-4 > div');
    authorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 5. Nút Join Us
    const joinButton = document.querySelector('.btn.btn-primary:last-of-type');
    joinButton.addEventListener('click', function() {
        showJoinModal();
    });

    // 6. Làm một slider tự động chuyển cho phần Featured Post
    setupFeaturedPostSlider();
});

// Hiển thị modal đăng ký
function showSubscribeModal() {
    // Tạo DOM cho modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Đăng ký nhận tin mới</h2>
            <p>Hãy nhập email của bạn để nhận tin tức mới nhất từ chúng tôi</p>
            <form>
                <input type="email" placeholder="Email của bạn" required>
                <button type="submit" class="btn btn-primary">Đăng ký</button>
            </form>
        </div>
    `;

    // Thêm style cho modal
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            max-width: 500px;
            text-align: center;
        }
        .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 24px;
            cursor: pointer;
        }
        .modal form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 20px;
        }
        .modal input {
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    `;

    // Thêm modal và style vào body
    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Xử lý sự kiện đóng modal
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    // Đóng modal khi click bên ngoài
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Xử lý form submit
    const form = modal.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input').value;
        alert(`Cảm ơn bạn đã đăng ký! Địa chỉ email: ${email}`);
        document.body.removeChild(modal);
    });
}

// Hiển thị modal tham gia
function showJoinModal() {
    // Tạo DOM cho modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>Tham gia cùng chúng tôi</h2>
            <p>Điền thông tin của bạn để tham gia vào đội ngũ của chúng tôi</p>
            <form>
                <input type="text" placeholder="Họ và tên" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Tại sao bạn muốn tham gia?" rows="4" required></textarea>
                <button type="submit" class="btn btn-primary">Gửi thông tin</button>
            </form>
        </div>
    `;

    // Thêm style cho modal
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            max-width: 500px;
            text-align: center;
            position: relative;
        }
        .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 24px;
            cursor: pointer;
        }
        .modal form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 20px;
        }
        .modal input, .modal textarea {
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    `;

    // Thêm modal và style vào body
    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Xử lý sự kiện đóng modal
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    // Đóng modal khi click bên ngoài
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            document.body.removeChild(modal);
        }
    });

    // Xử lý form submit
    const form = modal.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã gửi thông tin! Chúng tôi sẽ liên hệ với bạn sớm.');
        document.body.removeChild(modal);
    });
}

// Thiết lập slider cho phần Featured Post
function setupFeaturedPostSlider() {
    // Tạo mảng dữ liệu bài viết
    const posts = [
        {
            image: "assets/images/white-concrete-building.png",
            author: "John Doe",
            date: "May 23, 2022",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            image: "assets/images/together.png",
            author: "Jane Smith",
            date: "June 15, 2022",
            title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
        },
        {
            image: "assets/images/man.png",
            author: "Robert Johnson",
            date: "July 7, 2022",
            title: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
            description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt."
        }
    ];

    // Lấy phần tử bài viết featured
    const featuredPost = document.querySelector('section.section .border');
    let currentIndex = 0;

    // Hàm cập nhật nội dung bài viết
    function updateFeaturedPost() {
        const post = posts[currentIndex];
        featuredPost.innerHTML = `
            <header>
                <img src="${post.image}" alt="" class="object-cover" style="height: 352px">
            </header>
            <div class="flex flex-col gap-3">
                <p class="m-0 text-body-2">By <span class="text-purple">${post.author}</span> | 
                    <time datetime="${post.date.replace(' ', '-')}">${post.date}</time>
                </p>
                <a href="#">
                    <h3 class="text-h3">${post.title}</h3>
                </a>
                <p class="text-medium-grey m-0">
                    ${post.description}
                </p>
            </div>
            <footer>
                <a href="" class="btn btn-primary">Read More &gt;</a>
            </footer>
        `;

        // Cập nhật index
        currentIndex = (currentIndex + 1) % posts.length;
    }

    // Tạo chuyển đổi bài viết tự động mỗi 5 giây
    setInterval(updateFeaturedPost, 5000);
} 