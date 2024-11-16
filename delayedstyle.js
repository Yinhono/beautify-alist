function loadStylesAndFooter() {
    // 加载 Google Fonts
    const googleFonts1 = document.createElement('link');
    googleFonts1.rel = 'stylesheet';
    googleFonts1.href = 'https://fonts.googleapis.com/css2?family=Baloo+Paaji+2';
    document.head.appendChild(googleFonts1);

    const googleFonts2 = document.createElement('link');
    googleFonts2.rel = 'stylesheet';
    googleFonts2.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC';
    document.head.appendChild(googleFonts2);

    // 加载主CSS样式
    fetch('https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@0c9dbe9c4b84feea3ea240e50730d8ab9f6de1a8/aliststyle.css')
        .then(response => response.text())
        .then(css => {
            const style = document.createElement('style');
            style.textContent = css;
            document.head.appendChild(style);
        });

    // 加载自定义 Footer
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
        loadStylesAndFooter(); // 当检测到 .footer 存在时才加载
        clearInterval(interval);
    }
}, 200);
