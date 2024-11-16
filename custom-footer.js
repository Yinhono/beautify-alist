fetch('https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@latest/page.html')
.then(response => response.text())
.then(data => document.getElementById('custom-footer').innerHTML = data);
