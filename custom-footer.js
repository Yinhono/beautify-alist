<div id="customize" style="display: none;">
    fetch('https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@latest/page.html')
    .then(response => response.text())
    .then(data => document.getElementById('custom-footer').innerHTML = data);
</div>
<script>
    let interval = setInterval(() => {
        if (document.querySelector(".footer")) {
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
        }
    }, 200);
</script>
