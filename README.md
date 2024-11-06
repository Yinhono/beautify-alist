# beautify-alist
自用的alist自定义，~~抄袭~~ 参考自各位大佬

## 使用方法
自定义头部
<link href="https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@latest/aliststylev8.css" rel="stylesheet" type="text/css">  

自定义内容
<div id="custom-footer"></div>
<script>
    fetch('https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@latest/pagev2.html')
        .then(response => response.text())
        .then(data => document.getElementById('custom-footer').innerHTML = data);
</script>
