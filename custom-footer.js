<div id="customize" style="display: none;">
    console.log("开始加载");  // 检查是否执行到这里
    fetch('https://cdn.jsdelivr.net/gh/Yinhono/beautify-alist@latest/page.html')
    .then(response => {
        console.log('响应状态:', response.status); // 检查请求是否成功
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('获取到的数据:', data);  // 查看加载的内容
        const footer = document.getElementById('custom-footer');
        console.log('找到的footer元素:', footer);  // 确认元素存在
        footer.innerHTML = data;
        console.log('设置完成');  // 确认是否执行到这一步
    })
    .catch(error => console.error('错误:', error));
</div>

<script>
    console.log("脚本开始执行");  // 检查脚本是否开始运行
    let interval = setInterval(() => {
        console.log("检查.footer");  // 查看定时器是否在运行
        if (document.querySelector(".footer")) {
            console.log('找到.footer, 显示customize');
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
            console.log('interval已清除');
        }
    }, 200);
</script>
