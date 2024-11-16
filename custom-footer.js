function loadFooter() {
    fetch('https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@latest/page.html')
        .then(response => response.text())
        .then(data => {
            const footer = document.getElementById('custom-footer');
            if (footer) {
                footer.innerHTML = data;
            }
        });
}

// 延迟加载检查
let interval = setInterval(() => {
    if (document.querySelector(".footer")) {
        loadFooter();  // 当检测到.footer存在时才加载
        clearInterval(interval);
    }
}, 200);
